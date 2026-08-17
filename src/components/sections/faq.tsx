import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// 4 色循环 — 跟 services / pricing 配色一致
const accentBar = [
  "before:bg-[#10A37F]", // green
  "before:bg-[#da7756]", // orange
  "before:bg-gradient-to-b before:from-[#FF276F] before:via-[#FF7038] before:to-[#7A27FF]", // pink-orange-purple
  "before:bg-[#7A27FF]", // purple
];

const faqs = [
  {
    q: "怎么充值？流程是怎样的？",
    a: "三步搞定：① 选择服务与套餐（ChatGPT / Claude / MiniMax 拼车 / AI 聚合）；② 提交订单并完成支付（微信 / 支付宝 / USDT）；③ 5 分钟内自动开通账号，到账即用。如需协助，联系客服 7×24 在线支持。",
  },
  {
    q: "$3 服务费是什么意思？",
    a: "$3 是 FluxA 的服务费，加在官方价之上 — 例如 ChatGPT Plus 官方 $20/月，FluxA 售价 $23/月，差额 $3 为服务费。无任何隐藏费用，转充、退款、售后都不另收费。",
  },
  {
    q: "MiniMax Max 拼车是什么？",
    a: "Anthropic Claude Max 5x ($100/账号) 官方团队账号 2-4 人拼车共享。2 人 $53/人、3 人 $36/人、4 人 $28/人，比单独订阅省 50% 以上。Sonnet 4.5 + Opus 4.1 全模型 / Opus 4 优先 / 高峰不限速等官方全部功能保留。",
  },
  {
    q: "5 分钟到账是真的吗？",
    a: "是的，下单后系统自动开通，正常情况下 5 分钟内账号到位。如遇系统延迟或需人工协助，最迟 30 分钟内处理完毕。紧急情况可联系客服优先开通。",
  },
  {
    q: "是官方账号吗？安全吗？",
    a: "100% 官方渠道 — ChatGPT / Claude 都是 OpenAI / Anthropic 官方账号，权益与官网直接购买一致，无封号风险。所有充值记录可在官方账户中查询，零封号记录。",
  },
  {
    q: "支持退款吗？",
    a: "支持。下单后未开通前可全额退款；已开通账号若在 24 小时内出现不可用情况，按未使用天数比例退款。具体见《退款政策》。",
  },
  {
    q: "支持哪些支付方式？",
    a: "支持微信、支付宝、USDT (TRC-20 / ERC-20)、银行转账。海外用户推荐 USDT，国内用户推荐微信 / 支付宝，1-5 分钟内到账。",
  },
  {
    q: "团队账号安全吗？数据会泄露吗？",
    a: "安全。团队账号彼此使用独立子账号，账号数据完全隔离；Max 5x 团队账号为 Anthropic 官方功能，FluxA 仅做拼车撮合与客服支持，不留存任何用户对话数据。",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full bg-muted/30 py-20 md:py-28 border-b border-border">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-medium">
            常见问题
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            你想知道的，这里都有
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            还有其他问题？联系 7×24 在线客服随时解答。
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full rounded-lg border border-border bg-background overflow-hidden">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={
                  "relative px-5 last:border-b-0 before:absolute before:left-0 before:top-0 before:h-full before:w-1 " +
                  accentBar[i % accentBar.length]
                }
              >
                <AccordionTrigger className="text-left text-[15px] font-medium text-foreground hover:no-underline py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
