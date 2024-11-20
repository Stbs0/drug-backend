class HttpException extends Error {
  errorCode: number;
  constructor(
    errorCode: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-redundant-type-constituents
    public readonly message: string | any,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    super(message);
    this.errorCode = errorCode;
  }
}

export default HttpException;
