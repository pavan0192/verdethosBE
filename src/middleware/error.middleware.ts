import { Request, Response, NextFunction } from 'express';

/**
 * Error Handling Middleware
 * 
 * Handles 404 (Not Found) and general error responses
 */

/**
 * 404 Handler - Catches all unmatched routes
 */
export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({
    error: 'Not found',
    message: `Route ${req.method} ${req.path} not found`
  });
};

/**
 * Error Handler - Catches all errors thrown in the application
 */
export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('Error:', err);
  res.status(err.statusCode || 500).json({
    error: 'Internal server error',
    message: err.message || 'An unexpected error occurred'
  });
};

