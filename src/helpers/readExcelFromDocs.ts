import fs from "fs/promises";
import path from "path";

import * as XLSX from "xlsx";

const EXCEL_EXTENSIONS = new Set([".xlsx", ".xls", ".xlsm", ".xlsb"]);

function resolveExcelPathInDocs(name: string): string {
  const base = path.basename(name.trim());

  if (!base || base === "." || base === "..") {
    throw new Error(`Invalid Excel file name: ${name}`);
  }

  const ext = path.extname(base).toLowerCase();
  const fileName = EXCEL_EXTENSIONS.has(ext) ? base : `${base}.xlsx`;

  const docsDir = path.resolve(process.cwd(), "docs");
  const fullPath = path.resolve(docsDir, fileName);
  const relative = path.relative(docsDir, fullPath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Resolved path must stay inside docs/");
  }

  return fullPath;
}

/**
 * Each sheet as an array of row objects (first row becomes keys), keyed by sheet name.
 */
export function workbookRowsBySheet(
  workbook: XLSX.WorkBook
): Record<string, Record<string, unknown>[]> {
  const out: Record<string, Record<string, unknown>[]> = {};

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
      continue;
    }

    out[sheetName] = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
      defval: null,
      raw: false
    });
  }

  return out;
}

/**
 * Write parsed sheet rows to `./docs/{baseName}.json` (same logical name as the Excel file).
 */
export async function writeWorkbookJsonToDocs(
  workbook: XLSX.WorkBook,
  excelBaseName: string
): Promise<string> {
  const base = path.basename(excelBaseName.trim());

  if (!base || base === "." || base === "..") {
    throw new Error(`Invalid Excel file name: ${excelBaseName}`);
  }

  const ext = path.extname(base).toLowerCase();
  const withoutExt = EXCEL_EXTENSIONS.has(ext)
    ? path.basename(base, ext)
    : base;

  const jsonFileName = `${withoutExt}.json`;
  const docsDir = path.resolve(process.cwd(), "docs");
  const fullPath = path.resolve(docsDir, jsonFileName);
  const relative = path.relative(docsDir, fullPath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Resolved path must stay inside docs/");
  }

  const payload = workbookRowsBySheet(workbook);

  await fs.writeFile(fullPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  return fullPath;
}

/**
 * Load an Excel workbook from `./docs` by file name (e.g. `"report"` or `"report.xlsx"`).
 * Paths like `../foo` are rejected; only the base name is used.
 */
export async function readExcelFromDocs(name: string): Promise<XLSX.WorkBook> {
  const fullPath = resolveExcelPathInDocs(name);

  try {
    await fs.access(fullPath);
  }
  catch {
    throw new Error(`Excel file not found: ${fullPath}`);
  }

  const buf = await fs.readFile(fullPath);

  return XLSX.read(buf, { type: "buffer", cellDates: true });
}
