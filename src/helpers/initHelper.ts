import * as XLSX from "xlsx";

import { readExcelFromDocs } from "./readExcelFromDocs";

function logWorkbookTables(workbook: XLSX.WorkBook): void {
  console.info(`Sheets: ${workbook.SheetNames.join(", ")}`);

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
      continue;
    }

    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
      defval: null,
      raw: false
    });

    console.info(`\n=== ${sheetName} (${rows.length} rows) ===`);
    console.info(JSON.stringify(rows, null, 2));
  }
}

export async function initHelper() {
  const workbook = await readExcelFromDocs("infoCsv");

  logWorkbookTables(workbook);

  return { status: "initialized", timestamp: new Date().toISOString() };
}
