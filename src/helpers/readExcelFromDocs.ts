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
