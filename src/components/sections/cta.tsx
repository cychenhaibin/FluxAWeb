import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

export default function Cta() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-20 md:py-28 text-background"
      style={{
        background:
          "linear-gradient(135deg, #181E25 0%, #2a1745 45%, #4a1245 75%, #6b1245 100%)",
      }}
    >
      {/* 装饰渐变光斑 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF276F 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #7A27FF 0%, transparent 70%)" }}
      />

      <div className="container-fluid relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-background/80 backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF276F] animate-pulse" />
            7×24 在线客服 · 5 分钟响应
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            准备好开启你的{" "}
            <span className="bg-gradient-to-r from-[#FF276F] via-[#FF7038] to-[#7A27FF] bg-clip-text text-transparent">
              AI 服务
            </span>{" "}
            了吗？
          </h2>
          <p className="mt-4 text-base text-background/70 sm:text-lg">
            官方价 + 仅 $3 服务费 · 5 分钟到账 · 真人客服在线
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
