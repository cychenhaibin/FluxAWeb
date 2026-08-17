import { siteConfig } from "@/lib/site-config";

const linkGroups = [
  {
    title: "服务",
    links: [
      { label: "ChatGPT 充值", href: "#chatgpt" },
      { label: "Claude 充值", href: "#claude" },
      { label: "MiniMax Max 拼车", href: "#minimax" },
      { label: "AI 聚合平台", href: "#fluxa" },
    ],
  },
  {
    title: "产品",
    links: [
      { label: "价格方案", href: "#pricing" },
      { label: "API 文档", href: "#developers" },
      { label: "AI 聚合", href: "https://fluxa.camila.qzz.io" },
      { label: "常见问题", href: "#faq" },
    ],
  },
  {
    title: "公司",
    links: [
      { label: "关于我们", href: "#about" },
      { label: "联系我们", href: "mailto:support@fluxa.ai" },
      { label: "客服微信：fluxa_support", href: "#contact" },
      { label: "support@fluxa.ai", href: "mailto:support@fluxa.ai" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container-fluid py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          {/* 左：品牌 + 简介 */}
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="FluxA 首页"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
                F
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                {siteConfig.brand.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.brand.slogan}。ChatGPT / Claude 官方代充、MiniMax Max 拼车、AI 聚合平台 — 官方价 + 仅 $3 服务费，5 分钟到账。
            </p>
          </div>

          {/* 右：3 列链接组 */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 底部：版权 + 备案 */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {siteConfig.icp}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.contact.ticket.url}
              className="hover:text-foreground transition-colors"
            >
              FluxA 平台
            </a>
            <a
              href={`mailto:${siteConfig.contact.email.address}`}
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
