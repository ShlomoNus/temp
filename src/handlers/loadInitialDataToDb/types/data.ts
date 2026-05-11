export type FileMediaType = "pdf" | "audio" | "video";

export type FileItem = {
  id: number // מזהה ייחודי אקראי בן 5 ספרות (10000–99999)
  fileName: string // שם קובץ
  url: string // כתובת קובץ ב-S3
  type: FileMediaType
  category: string // קטגוריה
  subCategory: string // תת קטגוריה
  informationType: string // סוג מידע
  language: string // שפה
  isPublish: boolean
  status: string
};
