import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

export default function Cta() {
  return (
    <section id="contact" className="w-full bg-foreground py-20 md:py-28 text-background">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            准备好开启你的 AI 服务了吗？
          </h2>
          <p className="mt-4 text-base text-background/70 sm:text-lg">
            7×24 真人客服在线 · 5 分钟到账 · 仅 $3 服务费
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-md bg-background text-foreground hover:bg-background/90"
            >
              <a href="#pricing">
                查看价格方案
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              <a href="mailto:support@fluxa.ai">
                <Mail className="h-4 w-4" />
                联系商务
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-background/60">
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              微信：fluxa_support
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              support@fluxa.ai
            </span>
            <span>· 全年无休 · 5 分钟响应</span>
          </div>
        </div>
      </div>
    </section>
  );
}
