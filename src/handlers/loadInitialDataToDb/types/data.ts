import { Simplify } from "type-fest";

export type FileMediaType = "docs" | "images" | "audio" | "video";

type Status = "init" | "deleted" | "updated";
type MediaType = "audio" | "video" | "leaflets" | "studies" | "guides" | "reports" | "plans";

export type FileItem = {
  id: number
  type: FileMediaType
  status: Status
  isPublish: boolean
  fileUrl: string
  name: string
  mediaType: MediaType
  category: string
  subCategory: string
  language: string
};

export type FileItemFinal = Simplify<FileItem & {
  summary: string
  longSummary: string
  publishDate: string
  size: string
  lastModified: Date
}>;