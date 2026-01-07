# Verdethos Backend API

Minimal Backend API for Producer Management Module - Built for Senior Fullstack Lead Assignment

## 🏗️ Architecture

This backend demonstrates **lead-level** architectural principles:

- **Clean Architecture**: Modular folder structure with separation of concerns
- **Multi-Tenant Isolation**: Tenant-based data isolation via middleware
- **Type Safety**: Strict TypeScript with interfaces (no classes for data models)
- **In-Memory Storage**: Minimal backend using arrays (no database)

## 📁 Project Structure

```
verdethosBE/
├── src/
│   ├── data/
│   │   └── mock-producers.ts          # Mock producer data (5-10 records)
│   ├── middleware/
│   │   └── tenant.middleware.ts      # Tenant isolation middleware
│   ├── modules/
│   │   └── producers/
│   │       ├── producer.types.ts     # Type definitions
│   │       ├── producer.service.ts   # Business logic
│   │       ├── producer.controller.ts # HTTP handlers
│   │       └── producer.routes.ts    # Route definitions
│   ├── types/
│   │   └── index.ts                  # Shared types and enums
│   └── server.ts                     # Express app bootstrap
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run in development mode with hot reload
npm run dev
```

The server will start on `http://localhost:3001`

### Production Build

```bash
# Build TypeScript to JavaScript
npm run build

# Run production server
npm start
```

## 📡 API Endpoints

### Base URL
```
http://localhost:3001
```

### Required Headers

All API requests require the following header:

- **`x-tenant-id`**: Tenant identifier (e.g., `tenant-001`)

### Endpoints

#### 1. Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-04-20T10:30:00.000Z",
  "service": "verdethos-be"
}
```

#### 2. Get All Producers
```http
GET /api/producers
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `pageSize` (optional): Items per page (default: 10, max: 100)

**Example Request:**
```bash
curl -X GET "http://localhost:3001/api/producers?page=1&pageSize=10" \
  -H "x-tenant-id: tenant-001"
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "data": [
      {
        "id": "prod-001",
        "name": "Green Valley Farm Group",
        "type": "Farm Group",
        "numberOfFarms": 12,
        "serasaStatus": "4/4",
        "eudrStatus": "3/4",
        "status": "Approved",
        "tenantId": "tenant-001",
        "createdAt": "2024-01-15T00:00:00.000Z",
        "updatedAt": "2024-03-20T00:00:00.000Z"
      }
    ],
    "total": 5,
    "page": 1,
    "pageSize": 10,
    "totalPages": 1
  }
}
```

## 🧪 Testing with cURL

### Test 1: Get All Producers
```bash
curl -X GET "http://localhost:3001/api/producers" \
  -H "x-tenant-id: tenant-001"
```

### Test 2: Get Producers with Pagination
```bash
curl -X GET "http://localhost:3001/api/producers?page=1&pageSize=5" \
  -H "x-tenant-id: tenant-001"
```

### Test 3: Missing Tenant ID (Should Fail)
```bash
curl -X GET "http://localhost:3001/api/producers"
```

## 📮 Testing with Postman

### Required Headers

For all `/api/producers` endpoints:

| Header Key | Header Value | Required | Description |
|------------|--------------|----------|-------------|
| `x-tenant-id` | `tenant-001` or `tenant-002` | Yes | Tenant identifier for data isolation |

### Postman Setup

#### Step 1: Add Header
1. Open Postman
2. Select your request (GET)
3. Go to the **Headers** tab
4. Add:
   - **Key**: `x-tenant-id`
   - **Value**: `tenant-001` (or `tenant-002`)

#### Step 2: Example Requests

**Request 1: Get All Producers**
```
Method: GET
URL: http://localhost:3001/api/producers
Headers:
  x-tenant-id: tenant-001
```

**Request 2: Get Producers with Pagination**
```
Method: GET
URL: http://localhost:3001/api/producers?page=1&pageSize=5
Headers:
  x-tenant-id: tenant-001
```

**Request 3: Health Check (No headers needed)**
```
Method: GET
URL: http://localhost:3001/health
Headers: (None required)
```

### Notes
- Only `x-tenant-id` is required for `/api/producers` endpoints
- Health check (`/health`) does not require any headers
- Missing `x-tenant-id` returns `400 Bad Request` with error message
- Use `tenant-001` or `tenant-002` (based on mock data)

### Postman Collection Example

You can create a Postman collection with:
- **Environment variable**: `base_url` = `http://localhost:3001`
- **Environment variable**: `tenant_id` = `tenant-001` or `tenant-002`
- Then use: `{{base_url}}/api/producers` and `{{tenant_id}}` in headers

### Tenant Isolation
- All requests must include `x-tenant-id` header
- Data is automatically filtered by tenant ID
- Users can only access data belonging to their tenant

## 📊 Mock Data

The backend includes 10 mock producers across 2 tenants:
- **tenant-001**: 7 producers
- **tenant-002**: 3 producers

Each producer includes:
- `id`: Unique identifier
- `name`: Producer name
- `type`: Farm Group, Individual, or Cooperative
- `numberOfFarms`: Number of farms
- `serasaStatus`: Compliance status (format: "X/4")
- `eudrStatus`: EUDR compliance status (format: "X/4")
- `status`: Created, In Review, Approved, or Rejected
- `tenantId`: Tenant identifier
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## 🛠️ Development Scripts

```bash
# Development with hot reload
npm run dev

# Build TypeScript
npm run build

# Run production build
npm start

# Type checking only
npm run type-check
```

## 📝 Design Decisions

1. **Interfaces over Classes**: All data models use TypeScript interfaces for flexibility
2. **In-Memory Storage**: Arrays instead of database to keep it minimal
3. **Middleware Chain**: Tenant and RBAC checks happen at middleware level
4. **Service Layer**: Business logic separated from HTTP handling
5. **Strict Typing**: Full TypeScript strict mode for type safety
6. **Error Handling**: Consistent error responses with appropriate HTTP status codes

