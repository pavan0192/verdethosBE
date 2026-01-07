/**
 * Shared types and interfaces for the backend
 */

export enum ProducerType {
  FARM_GROUP = 'Farm Group',
  INDIVIDUAL = 'Individual',
  COOPERATIVE = 'Cooperative'
}

export enum ProducerStatus {
  CREATED = 'Created',
  IN_REVIEW = 'In Review',
  APPROVED = 'Approved',
  REJECTED = 'Rejected'
}

export interface Producer {
  id: string;
  name: string;
  type: ProducerType;
  numberOfFarms: number;
  serasaStatus: string; // Format: "1/4"
  eudrStatus: string; // Format: "1/4"
  status: ProducerStatus;
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Extended Express Request with tenant context
import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  tenantId?: string;
}

