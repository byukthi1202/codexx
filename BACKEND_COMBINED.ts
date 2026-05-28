/**
 * ========================================
 * TRIPMIND AI - BACKEND COMBINED
 * All backend source code combined into a single file
 * ========================================
 */

// ========================================
// FILE: server/index.ts
// ========================================

import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);

// ========================================
// SERVER ARCHITECTURE OVERVIEW
// ========================================
/*
The TripMind AI backend is a minimal Node.js/Express server that:

1. SERVES STATIC FILES:
   - In production: Serves from dist/public directory
   - In development: Serves from dist/public directory
   
2. HANDLES CLIENT-SIDE ROUTING:
   - All routes (except static files) serve index.html
   - Enables React Router/Wouter to handle routing on the client side
   
3. PORT CONFIGURATION:
   - Default port: 3000
   - Configurable via PORT environment variable
   
4. HTTP SERVER:
   - Uses Node.js built-in http module for core functionality
   - Express middleware for static file serving and routing

ENVIRONMENT VARIABLES:
- NODE_ENV: Set to "production" or "development"
- PORT: Server port (default: 3000)

FILE STRUCTURE:
- server/index.ts: Main server entry point
- This file handles all backend logic

DEPLOYMENT:
1. Build frontend: pnpm build
2. Start server: node server/index.ts
3. Server listens on specified port and serves static frontend

API NOTES:
- The current implementation does NOT have explicit API routes
- API endpoints should be added as needed
- Consider adding:
  - /api/trips - Trip management endpoints
  - /api/destinations - Destination data endpoints
  - /api/ai - AI planning endpoints
  - /api/auth - Authentication endpoints
  - /api/users - User management endpoints

MIDDLEWARE RECOMMENDATIONS:
- express.json() - For JSON request parsing
- express.urlencoded() - For form data parsing
- cors() - For cross-origin requests
- helmet() - For security headers
- morgan() - For request logging
- dotenv - For environment variable management

SCALING CONSIDERATIONS:
- Add database connections (PostgreSQL, MongoDB, etc.)
- Implement caching (Redis)
- Add API authentication and authorization
- Implement rate limiting
- Add error handling and logging
- Add request validation and sanitization
*/

export default {};
