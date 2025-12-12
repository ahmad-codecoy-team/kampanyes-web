export interface ContentData {
  _id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ContentResponse {
  data: ContentData;
}
