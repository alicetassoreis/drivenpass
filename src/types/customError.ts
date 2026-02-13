export type ErrorType =
  | "conflict"
  | "not_found"
  | "unauthorized"
  | "unprocessable_entity";

export interface CustomError {
  type: ErrorType;
  message: string;
}
