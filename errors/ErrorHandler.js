class ErrorHandler {
  constructor(status, msg) {
    this.status = status;
    this.message = msg;
  }
  static validationError(message = "all filed are required") {
    return new ErrorHandler(422, message);
  }
  static notFoundError(message = "Not found!") {
    return new ErrorHandler(422, message);
  }
  static forbidden(message = "not allowed!") {
    return new ErrorHandler(403, message);
  }
}
module.exports = ErrorHandler;
