export type FileItem = {
  id: number // מזהה ייחודי אקראי בן 5 ספרות (10000–99999)
  fileName: string // שם קובץ
  pdfUrl: string // כתובת PDF ב-S3
  category: string // קטגוריה
  subCategory: string // תת קטגוריה
  informationType: string // סוג מידע
  language: string // שפה
  isPublish: boolean
  status: string
};
