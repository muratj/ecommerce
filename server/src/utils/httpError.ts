export class HttpError extends Error {
  status: number;
  message: string;
  type?: string;

  constructor(status: number, message: string, type?: string) {
    super();
    this.status = status;
    this.message = message;
    this.type = type;
  }

  static badRequest(message: string) {
    return new HttpError(400, message);
  }

  static forbidden(message: string) {
    return new HttpError(403, message);
  }

  static notFound(message: string) {
    return new HttpError(404, message);
  }
}
