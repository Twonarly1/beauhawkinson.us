/**
 * Environment variables.
 * Exporting destructured `process.env` does not work in Next.js without hacking:
 * @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * @see https://github.com/vercel/next.js/issues/15574
 */

// private
export const NODE_ENV = process.env.NODE_ENV
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN
export const GOOGLE_SHEET_KEY = process.env.GOOGLE_SHEET_KEY

// public
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
// export const NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT!
export const NEXT_PUBLIC_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!
export const NEXT_PUBLIC_STEPZEN_KEY = process.env.NEXT_PUBLIC_STEPZEN_KEY
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!
export const OAUTH_CLIENT_KEY = process.env.OAUTH_CLIENT_KEY!
export const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET!
export const DATABASE_URL = process.env.DATABASE_URL!
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!
