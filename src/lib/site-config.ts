export interface SubMenuItem {
  label: string;
  href: string;
}

export interface SubMenuCategory {
  category: string;
  items: SubMenuItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  subMenu?: SubMenuCategory[];
}

export const siteConfig = {
  brand: { name: 'FluxA', slogan: 'AI 服务，一站搞定' },
  /**
   * Header 主导航（minimaxi.com 1:1 复刻版）
   * - 模型：3 级下拉（语言模型 / 拼车 两个子分类）
   * - API / Token Plan / 价格：直链 /pricing
   * - FAQ：直链 /faq
   * - 关于我们：直链 /about
   */
  nav: [
    {
      label: '模型',
      subMenu: [
        {
          category: '语言模型',
          items: [
            { label: 'ChatGPT 充值', href: '/services/chatgpt' },
            { label: 'Claude 充值', href: '/services/claude' },
            { label: 'AI 聚合', href: '/services/ai-aggregator' },
          ],
        },
        {
          category: '拼车',
          items: [
            { label: 'MiniMax Max 拼车', href: '/services/minimax' },
          ],
        },
      ],
    },
    { label: 'API', href: '/pricing' },
    { label: 'Token Plan', href: '/pricing' },
    { label: '价格', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: '关于我们', href: '/about' },
  ] as NavItem[],
  contact: {
    wechat: { name: '客服微信', qrPlaceholder: '/wechat-qr.jpg' },
    email: { name: '客服邮箱', address: 'support@fluxa.example.com' },
    ticket: { name: '在线工单', url: 'https://example.com/ticket' },
  },
  icp: '粤ICP备 XXXXXXXX 号-1',
  title: 'FluxA — ChatGPT 充值、Claude 充值、MiniMax Max 拼车、AI 聚合',
  description:
    'FluxA 提供 ChatGPT 充值、Claude 充值、MiniMax Max 拼车、AI 聚合平台等 AI 服务。官方价 + 仅 $3 服务费，5 分钟到账、7×24 客服。',
} as const;

export type SiteConfig = typeof siteConfig;
