import { withContentlayer } from "next-contentlayer";

// ! track https://github.com/vercel/next.js/issues/5318 to potentially rename this file

// TODO enable descriptive file affixes, see https://github.com/vercel/next.js/issues/42614

/**
 * @typedef {import('next').NextConfig['headers']} Custom HTTP headers (override Next.js defaults or apply new)
 * NB: this is not an exhaustive list. For example, the standard 'Permissions-Policy' header is not set.
 */
const headers = async () => [
  {
    // match all paths, including "/" (https://github.com/vercel/next.js/discussions/17991#discussioncomment-112028)
    source: "/(.*?)",
    headers: [
      // enable DNS prefetching (https://nextjs.org/docs/pages/api-reference/next-config-js/headers#x-dns-prefetch-control)
      {
        key: "X-DNS-Prefetch-Control",
        value: "on",
      },
      // enforce HTTPS (https://nextjs.org/docs/pages/api-reference/next-config-js/headers#strict-transport-security)
      // NB: many hosting platforms (including e.g. Vercel) automatically apply this header; it is included for redundancy
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      // CSP (https://nextjs.org/docs/pages/api-reference/next-config-js/headers#content-security-policy)
      {
        key: "Content-Security-Policy",
        value: "frame-ancestors 'self'",
      },
      // prevent browser MIME-sniffing if `Content-Type` header not explicitly set (https://nextjs.org/docs/pages/api-reference/next-config-js/headers#x-content-type-options)
      // NB: superseded by CSP 'frame-ancestors', included here for backwards compatibility
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      // prevent loading when reflected XSS attack detected (https://nextjs.org/docs/pages/api-reference/next-config-js/headers#x-xss-protection)
      // NB: unnecessary with sufficiently strict CSP ('unsafe-inline'), included here for backwards compatibility
      {
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
      {
        // control iframe rendering ability (https://nextjs.org/docs/pages/api-reference/next-config-js/headers#x-frame-options)
        // NB: this directive's 'ALLOW-FROM' option is deprecated in favor of CSP 'frame-ancestors', included here for backwards compatibility
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      // only send origin in 'Referer' header of cross-origin requests (https://nextjs.org/docs/pages/api-reference/next-config-js/headers#referrer-policy)
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
    ],
  },
];
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // disable 'X-Powered-By' header (https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-powered-by)
  poweredByHeader: false,
  headers,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "i.seadn.io",
      "rarible.mypinata.cloud",
      "storage.opensea.io",
      "openseauserdata.com",
      "localhost",
    ],
    dangerouslyAllowSVG: true,
    // https://nextjs.org/docs/api-reference/next/image#remote-patterns
    // ! NB: this is a security risk, but is virtually necessary due to the variety of image sources.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
