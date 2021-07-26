export type HttpRequest = {
  headers?: any;
  body?: any;
  params?: any; 
}

export type HttpResponseData = {
  data?: any;
}

export type HttpResponse = {
  json(data: HttpResponseData): HttpResponse;
}

export interface Controller {
  handle(req?: HttpRequest, res?: HttpResponse);
}