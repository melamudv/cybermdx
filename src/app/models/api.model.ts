export interface IResponse {
  count: number;
  entries: IApi[];
}
export interface IApi {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}
