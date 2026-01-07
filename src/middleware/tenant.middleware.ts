import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../types';

/**
 * Tenant Isolation Middleware
 * 
 * Ensures multi-tenant data isolation by:
 * 1. Extracting tenant ID from 'x-tenant-id' header
 * 2. Attaching it to the request object for downstream use
 * 3. Rejecting requests without a valid tenant ID
 * 
 * This is a critical security middleware for B2B SaaS applications.
 */
export const tenantMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const tenantId = req.headers['x-tenant-id'] as string;

  if (!tenantId) {
    res.status(400).json({
      error: 'Missing tenant identifier',
      message: 'x-tenant-id header is required'
    });
    return;
  }

  // Attach tenant ID to request for use in services
  req.tenantId = tenantId;
  next();
};

