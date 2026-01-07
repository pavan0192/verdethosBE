import { Router } from 'express';
import { producerController } from './producer.controller';
import { tenantMiddleware } from '../../middleware/tenant.middleware';

/**
 * Producer Routes
 * 
 * Defines all routes for the Producer module with middleware:
 * 1. Tenant isolation (x-tenant-id header)
 * 2. Controller handlers
 */
const router = Router();

// Apply middleware to all routes
router.use(tenantMiddleware);

// Route definitions
router.get('/', producerController.getAll);

export default router;

