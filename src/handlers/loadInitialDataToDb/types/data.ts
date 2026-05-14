export type FileMediaType = "docs" | "images" | "audio" | "video"
type Status = "init" | "deleted" | "updated"
type MediaType= "audio" | "video" | "leaflets" | "studies" | "guides" | "reports" | "plans"

export type FileItem = {
  id: number // מזהה ייחודי אקראי בן 5 ספרות (10000–99999)
  type: FileMediaType
  status: Status
  isPublish: boolean
  fileUrl: string // כתובת קובץ ב-S3
  name: string // שם קובץ
  mediaType: MediaType 
  category: string // קטגוריה
  subCategory: string // תת קטגוריה
  language: string // שפה
};

export type FileItemWithEsData = FileItem & {
  summary: string,
  longSummary: string,
  publishDate: string,
  size: string,
  lastModified:Date
};