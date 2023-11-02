/**
 * Environment variables.
 * Exporting destructured `process.env` does not work in Next.js without hacking:
 * @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * @see https://github.com/vercel/next.js/issues/15574
 */

export const RESERVOIR_API_KEY = process.env.RESERVOIR_API_KEY!
export const POAP_API_KEY = process.env.POAP_API_KEY!
