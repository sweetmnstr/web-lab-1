export class BasicError extends Error {
  public statusCode: number;

  constructor({ message, statusCode, name }) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}
