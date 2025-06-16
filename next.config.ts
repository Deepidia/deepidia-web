import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_AI_FASTAPI: process.env.AI_FASTAPI,
  },
};

export default nextConfig;
