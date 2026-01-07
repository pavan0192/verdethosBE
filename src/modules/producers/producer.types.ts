import { Producer, PaginationParams, PaginatedResponse } from '../../types';

/**
 * Producer Module Types
 * 
 * Type definitions specific to the Producer module
 */

export interface ProducerServiceInterface {
  getAll(
    tenantId: string,
    pagination?: PaginationParams
  ): PaginatedResponse<Producer>;
}

export interface ProducerControllerResponse {
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
}

