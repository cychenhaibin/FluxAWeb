import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Layers,
  Sparkles,
  Globe,
  ArrowRight,
  Copy,
} from "lucide-react";

const codePython = `from openai import OpenAI

client = OpenAI(
    base_url="https://api.fluxa.example.com/v1",
    api_key="YOUR_FLUXA_KEY",
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "你好，FluxA!"}],
)
print(response.choices[0].message.content)`;

const codeCurl = `curl -X POST "https://api.fluxa.example.com/v1/chat/completions" \\
  -H "Authorization: Bearer YOUR_FLUXA_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "你好"}]
  }'`;

const codeNode = `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.fluxa.example.com/v1",
  apiKey: process.env.FLUXA_KEY,
});

const completion = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "你好，FluxA!" }],
});
console.log(completion.choices[0].message.content);`;

const integrations = [
  { icon: Layers, title: "OpenAI SDK", desc: "一行 base_url 切换到 FluxA" },
  { icon: Sparkles, title: "Anthropic SDK", desc: "Claude 系列原生支持" },
  { icon: Code2, title: "REST API", desc: "标准 HTTP + 流式响应" },
  { icon: Globe, title: "Web UI", desc: "AI 聚合平台统一界面" },
];

const tools = [
  "Python", "Node.js", "Go", "Rust", "Java",
  "TypeScript", "Ruby", "PHP", "cURL", "Postman",
];

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-foreground text-background">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2 text-xs text-background/60">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-background/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-background/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-background/20" />
          </div>
          <span className="ml-2 font-mono uppercase tracking-wider text-[10px]">
            {language}
          </span>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="h-7 px-2 text-background/70 hover:bg-white/10 hover:text-background"
          onClick={() => {
            if (typeof navigator !== "undefined" && navigator.clipboard) {
              navigator.clipboard.writeText(code);
            }
          }}
        >
          <Copy className="h-3.5 w-3.5" />
          <span className="text-xs">复制</span>
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}

export default function Developers() {
  return (
    <section id="developers" className="w-full bg-background py-20 md:py-28 border-b border-border">
      <div className="container-fluid">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-medium">
            <Code2 className="h-3 w-3" />
            开发者友好
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            5 分钟完成对接
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            10 种开发工具 · 4 种接入方式 · OpenAI / Anthropic SDK 原生兼容
          </p>
        </div>

        {/* 工具 chips — 统一单色 */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Code Tabs */}
        <div className="mt-10">
          <Tabs defaultValue="python" className="w-full">
            <div className="flex justify-center">
              <TabsList className="inline-flex h-auto rounded-lg bg-muted p-1">
                <TabsTrigger value="python" className="rounded-md px-4 py-1.5 text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                  Python
                </TabsTrigger>
                <TabsTrigger value="node" className="rounded-md px-4 py-1.5 text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                  Node.js
                </TabsTrigger>
                <TabsTrigger value="curl" className="rounded-md px-4 py-1.5 text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                  cURL
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="python" className="mt-6 outline-none">
              <CodeBlock code={codePython} language="python" />
            </TabsContent>
            <TabsContent value="node" className="mt-6 outline-none">
              <CodeBlock code={codeNode} language="typescript" />
            </TabsContent>
            <TabsContent value="curl" className="mt-6 outline-none">
              <CodeBlock code={codeCurl} language="bash" />
            </TabsContent>
          </Tabs>
        </div>

        {/* 4 接入方式 — icon 统一前景色 */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((it, i) => {
            const Icon = it.icon;
            return (
              <Card
                key={i}
                className="h-full transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                <CardHeader className="gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-base font-semibold tracking-tight">
                    {it.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {it.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* 底部 CTA */}
        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline">
            <a href="#contact">
              查看完整 API 文档
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
