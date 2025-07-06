// Neon Database Configuration
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Database connection string from environment variable
const sql = neon(process.env.DATABASE_URL!);

// Export the database instance
export const db = drizzle(sql);

// For backward compatibility, keep the getXataClient function
export const getXataClient = () => {
  return db;
};
