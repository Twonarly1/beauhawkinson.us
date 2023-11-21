"use client";

import { Analytics } from "@vercel/analytics/react";

const AnalyticsWrapper = () => {
  return <Analytics debug={false} />;
};

export default AnalyticsWrapper;
