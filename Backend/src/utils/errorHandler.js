

export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  console.error("❌ Unhandled Error:", err);

  res.status(500).json({
    success: false,
    message: err.message||"Internal Server Error",
  });
};




// errors/AppError.js

export class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}

export class ConflictError extends AppError {
  constructor(message = "Conflict occurred") {
    super(message, 409);
  }
}
export class ValidationError extends AppError {
  constructor(message = "Validation failed") {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized access") {
    super(message, 401);
  }
}
export class ForbiddenError extends AppError {
  constructor(message = "Forbidden access") {
    super(message, 403);
  }
}
export class InternalServerError extends AppError {
  constructor(message = "Internal server error") {
    super(message, 500);
  }
}
export class BadRequestError extends AppError {
  constructor(message = "Bad request") {
    super(message, 400);
  }
}
export class ServiceUnavailableError extends AppError {
  constructor(message = "Service unavailable") {
    super(message, 503);
  }
}
export class GatewayTimeoutError extends AppError {
  constructor(message = "Gateway timeout") {
    super(message, 504);
  }
}