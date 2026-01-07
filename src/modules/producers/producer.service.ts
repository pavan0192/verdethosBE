import { Producer, PaginationParams, PaginatedResponse } from '../../types';
import { mockProducers } from '../../data/mock-producers';
import { ProducerServiceInterface } from './producer.types';

/**
 * Producer Service
 * 
 * Business logic layer for Producer operations.
 * Implements tenant isolation.
 */
export class ProducerService implements ProducerServiceInterface {
  /**
   * Get all producers for a tenant with pagination
   * 
   * @param tenantId - Tenant identifier for data isolation
   * @param pagination - Optional pagination parameters
   * @returns Paginated response with producers
   */
  getAll(
    tenantId: string,
    pagination?: PaginationParams
  ): PaginatedResponse<Producer> {
    // Filter by tenant (critical for multi-tenant isolation)
    const tenantProducers = mockProducers.filter(
      producer => producer.tenantId === tenantId
    );

    // Calculate total before pagination
    const total = tenantProducers.length;

    // Apply pagination
    const page = pagination?.page || 1;
    const pageSize = pagination?.pageSize || 10;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = tenantProducers.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(total / pageSize);

    return {
      data: paginatedData,
      total,
      page,
      pageSize,
      totalPages
    };
  }
}

// Export singleton instance
export const producerService = new ProducerService();

