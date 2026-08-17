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
  brand: { name: 'FluxA', slogan: 'AI 服务专家' },
  /**
   * Header 主导航（shadcn v4 SaaS 简洁风）
   * - 服务：下拉菜单（ChatGPT充值 / Claude充值 / MiniMax Max 拼车 / AI 聚合平台）
   * - 价格：直链 #pricing
   * - API：直链 #developers
   * - 关于我们：直链 #about
   * Right: 登录 link + "立即咨询" Button
   */
  nav: [
    {
      label: '服务',
      subMenu: [
        {
          category: 'AI 模型充值',
          items: [
            { label: 'ChatGPT 充值', href: '#chatgpt' },
            { label: 'Claude 充值', href: '#claude' },
          ],
        },
        {
          category: '其他服务',
          items: [
            { label: 'MiniMax Max 拼车', href: '#minimax' },
            { label: 'AI 聚合平台', href: '#fluxa' },
          ],
        },
      ],
    },
    { label: '价格', href: '#pricing' },
    { label: 'API', href: '#developers' },
    { label: '关于', href: '#about' },
  ] as NavItem[],
  contact: {
    wechat: { name: '客服微信', qrPlaceholder: '/wechat-qr.jpg' },
    email: { name: '客服邮箱', address: 'support@fluxa.ai' },
    ticket: { name: '在线咨询', url: 'https://fluxa.camila.qzz.io' },
  },
  icp: '粤ICP备 XXXXXXXX 号-1',
  title: 'FluxA - AI 服务专家 | ChatGPT 充值 Claude 充值 MiniMax Max 拼车',
  description:
    'FluxA 提供 ChatGPT 充值、Claude 充值、MiniMax Max 拼车与 AI 聚合平台服务。官方价透明，充值仅 $3 服务费，4 人拼车 ¥119 / 月 无服务费，5 分钟到账，7×24 客服。',
} as const;

export type SiteConfig = typeof siteConfig;
