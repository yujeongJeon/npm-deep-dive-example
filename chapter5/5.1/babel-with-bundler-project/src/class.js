class CustomError extends Error {
  constructor({ message, errorCode, stack }) {
    super(message);

    this.errorCode = errorCode;
    this.stack = stack;
  }

  log() {
    console.error(`errorCode: ${this.errorCode}, %o`, this.stack.join("\n"));
  }
}

export default CustomError;
