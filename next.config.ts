import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGitHubPages ? '/portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? basePath : undefined,
  assetPrefix: isGitHubPages ? basePath : undefined,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  sassOptions: {
    additionalData: `$var: red;`
  }
};

export default nextConfig;
