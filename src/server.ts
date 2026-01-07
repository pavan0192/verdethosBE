import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import producerRoutes from './modules/producers/producer.routes';
import { notFoundHandler, errorHandler } from './middleware/error.middleware';

/**
 * Express Server Bootstrap
 * 
 * Minimal backend API for Producer Management Module
 * Demonstrates:
 * - Clean architecture with modular structure
 * - Multi-tenant isolation
 * - TypeScript strict typing
 */

const app: Express = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable CORS for frontend integration
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'verdethos-be'
  });
});

// API Routes
app.use('/api/producers', producerRoutes);

// Error handling middleware (must be last)
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
  console.log(`🔌 API endpoint: http://localhost:${PORT}/api/producers`);
  console.log(`\n📝 Required Headers:`);
  console.log(`   - x-tenant-id: Tenant identifier`);
  console.log(`\n💡 Postman Testing:`);
  console.log(`   Base URL: http://localhost:${PORT}`);
  console.log(`   Header: x-tenant-id: tenant-001`);
});

