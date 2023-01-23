/**
 * Environment variables.
 * Exporting destructured `process.env` does not work in Next.js without hacking:
 * @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * @see https://github.com/vercel/next.js/issues/15574
 */

// core
export const NODE_ENV = process.env.NODE_ENV
export const NEXT_PUBLIC_ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!
export const NEXT_PUBLIC_SANITY_DATABASE = process.env.NEXT_PUBLIC_SANITY_DATABASE
export const NEXT_PUBLIC_SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
