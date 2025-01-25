const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
     ignoreDuringBuilds: true, // 忽略 eslint 检查
   },
   typescript: {
     ignoreBuildErrors: true, // 忽略 TypeScript 检查
   }
}

module.exports = nextConfig
