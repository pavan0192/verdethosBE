import { Producer, ProducerType, ProducerStatus } from '../types';

/**
 * Mock Producer Data
 * Represents a minimal dataset for a B2B agricultural producer management system
 * Each producer belongs to a tenant and has various compliance statuses
 */
export const mockProducers: Producer[] = [
  {
    id: 'prod-001',
    name: 'Green Valley Farm Group',
    type: ProducerType.FARM_GROUP,
    numberOfFarms: 12,
    serasaStatus: '4/4',
    eudrStatus: '3/4',
    status: ProducerStatus.APPROVED,
    tenantId: 'tenant-001',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-03-20')
  },
  {
    id: 'prod-002',
    name: 'Organic Harvest Cooperative',
    type: ProducerType.COOPERATIVE,
    numberOfFarms: 28,
    serasaStatus: '2/4',
    eudrStatus: '1/4',
    status: ProducerStatus.IN_REVIEW,
    tenantId: 'tenant-001',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-04-15')
  },
  {
    id: 'prod-003',
    name: 'Sunrise Individual Farm',
    type: ProducerType.INDIVIDUAL,
    numberOfFarms: 1,
    serasaStatus: '4/4',
    eudrStatus: '4/4',
    status: ProducerStatus.APPROVED,
    tenantId: 'tenant-001',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-03-25')
  },
  {
    id: 'prod-004',
    name: 'Mountain Ridge Farm Group',
    type: ProducerType.FARM_GROUP,
    numberOfFarms: 8,
    serasaStatus: '1/4',
    eudrStatus: '0/4',
    status: ProducerStatus.CREATED,
    tenantId: 'tenant-001',
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-04-01')
  },
  {
    id: 'prod-005',
    name: 'Coastal Agriculture Cooperative',
    type: ProducerType.COOPERATIVE,
    numberOfFarms: 35,
    serasaStatus: '3/4',
    eudrStatus: '2/4',
    status: ProducerStatus.IN_REVIEW,
    tenantId: 'tenant-002',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-04-10')
  },
  {
    id: 'prod-006',
    name: 'Prairie Winds Farm',
    type: ProducerType.INDIVIDUAL,
    numberOfFarms: 1,
    serasaStatus: '4/4',
    eudrStatus: '3/4',
    status: ProducerStatus.APPROVED,
    tenantId: 'tenant-002',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-03-30')
  },
  {
    id: 'prod-007',
    name: 'Sustainable Growth Farm Group',
    type: ProducerType.FARM_GROUP,
    numberOfFarms: 15,
    serasaStatus: '2/4',
    eudrStatus: '1/4',
    status: ProducerStatus.REJECTED,
    tenantId: 'tenant-001',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-04-20')
  },
  {
    id: 'prod-008',
    name: 'River Valley Cooperative',
    type: ProducerType.COOPERATIVE,
    numberOfFarms: 42,
    serasaStatus: '4/4',
    eudrStatus: '4/4',
    status: ProducerStatus.APPROVED,
    tenantId: 'tenant-002',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-03-15')
  },
  {
    id: 'prod-009',
    name: 'Heritage Farm',
    type: ProducerType.INDIVIDUAL,
    numberOfFarms: 1,
    serasaStatus: '3/4',
    eudrStatus: '2/4',
    status: ProducerStatus.CREATED,
    tenantId: 'tenant-001',
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-04-05')
  },
  {
    id: 'prod-010',
    name: 'Global Export Farm Group',
    type: ProducerType.FARM_GROUP,
    numberOfFarms: 22,
    serasaStatus: '4/4',
    eudrStatus: '3/4',
    status: ProducerStatus.APPROVED,
    tenantId: 'tenant-002',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-04-01')
  }
];

