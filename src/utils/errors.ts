import { CustomError } from "../types/customError";

export function conflictError(message: string): CustomError {
  return { type: "conflict", message };
}

export function notFoundError(message: string): CustomError {
  return { type: "not_found", message };
}

export function unauthorizedError(message: string): CustomError {
  return { type: "unauthorized", message };
}

export function unprocessableEntityError(message: string): CustomError {
  return { type: "unprocessable_entity", message };
}
