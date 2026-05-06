import type * as XLSX from "xlsx";

import {
  readExcelFromDocs,
  workbookRowsBySheet,
  writeWorkbookJsonToDocs
} from "./readExcelFromDocs";

function logWorkbookTables(workbook: XLSX.WorkBook): void {
  const rowsBySheet = workbookRowsBySheet(workbook);

  console.info(`Sheets: ${Object.keys(rowsBySheet).join(", ")}`);

  for (const [sheetName, rows] of Object.entries(rowsBySheet)) {
    console.info(`\n=== ${sheetName} (${rows.length} rows) ===`);
    console.info(JSON.stringify(rows, null, 2));
  }
}

export async function initHelper() {
  const workbook = await readExcelFromDocs("infoCsv");
  const jsonPath = await writeWorkbookJsonToDocs(workbook, "infoCsv");

  console.info(`Saved Excel data to ${jsonPath}`);

  logWorkbookTables(workbook);

  return {
    status: "initialized",
    timestamp: new Date().toISOString(),
    jsonPath
  };
}
