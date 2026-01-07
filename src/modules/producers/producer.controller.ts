import { Response } from 'express';
import { AuthenticatedRequest } from '../../types';
import { producerService } from './producer.service';

/**
 * Producer Controller
 * 
 * Handles HTTP requests and responses for Producer endpoints.
 * Delegates business logic to ProducerService.
 */
export class ProducerController {
  /**
   * GET /api/producers
   * 
   * Retrieve paginated list of producers for the current tenant
   * 
   * Query Parameters:
   * - page: Page number (default: 1)
   * - pageSize: Items per page (default: 10)
   */
  getAll = (req: AuthenticatedRequest, res: Response): void => {
    try {
      const tenantId = req.tenantId!; // Set by tenantMiddleware

      // Parse pagination parameters
      const pagination = {
        page: req.query.page ? parseInt(req.query.page as string, 10) : 1,
        pageSize: req.query.pageSize ? parseInt(req.query.pageSize as string, 10) : 10
      };

      // Validate pagination
      if (pagination.page < 1) {
        res.status(400).json({
          error: 'Invalid pagination',
          message: 'Page must be greater than 0'
        });
        return;
      }

      if (pagination.pageSize < 1 || pagination.pageSize > 100) {
        res.status(400).json({
          error: 'Invalid pagination',
          message: 'Page size must be between 1 and 100'
        });
        return;
      }

      // Get producers from service
      const result = producerService.getAll(tenantId, pagination);

      res.status(200).json({
        success: true,
        data: result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error.message
      });
    }
  };
}

// Export singleton instance
export const producerController = new ProducerController();

