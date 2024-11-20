interface ErrorResponse {
  errors: {
    [key: string]: string;
  };
}
class HttpException extends Error {
  errorCode: number;

  constructor(errorCode: number, message: string | ErrorResponse) {
    // Pass a string to the base `Error` constructor
    super(typeof message === 'string' ? message : JSON.stringify(message));
    this.errorCode = errorCode;

    // Manually set the prototype for inheritance to work correctly
    Object.setPrototypeOf(this, HttpException.prototype);
  }
  getError() {
    try {
      const error = JSON.parse(this.message) as ErrorResponse;
      return error;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      return this.message;
    }
  }
}

export default HttpException;
