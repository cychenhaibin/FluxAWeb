export const siteConfig = {
  brand: { name: 'FluxA', slogan: 'AI 服务，一站搞定' },
  nav: [
    { label: '首页', href: '/' },
    { label: 'ChatGPT 充值', href: '/services/chatgpt' },
    { label: 'Claude 充值', href: '/services/claude' },
    { label: 'Claude Max 拼车', href: '/services/minimax' },
    { label: 'AI 聚合', href: '/services/ai-aggregator' },
    { label: '价格', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
  ],
  contact: {
    wechat: { name: '客服微信', qrPlaceholder: '/wechat-qr.jpg' },
    email: { name: '客服邮箱', address: 'support@fluxa.example.com' },
    ticket: { name: '在线工单', url: 'https://example.com/ticket' },
  },
  icp: '粤ICP备 XXXXXXXX 号-1',
  title: 'FluxA — ChatGPT 充值、Claude 充值、AI 聚合服务',
  description:
    'FluxA 提供 ChatGPT 充值、Claude 充值、Claude Max 拼车、AI 聚合平台等 AI 服务。官方价 + $3 人工费透明计费、稳定、极速、7×24 客服。',
} as const;

export type SiteConfig = typeof siteConfig;
