import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm backdrop-blur-sm border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              2026 最新版 · 零基础友好
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              跨境电商<span className="block text-accent">新手入门指南</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed">
              从平台选择到第一笔订单，手把手带你开启全球卖货之旅。不用懂代码，不用会外语，7步搞定跨境电商！
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-accent text-white border-0 hover:opacity-90 text-base px-8" onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}>
                查看学习路径 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8" onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })}>
                直接看步骤
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-white/70"><Globe className="h-4 w-4" /><span className="text-sm">覆盖 5 大主流平台</span></div>
              <div className="flex items-center gap-2 text-white/70"><TrendingUp className="h-4 w-4" /><span className="text-sm">7 步完整路径</span></div>
              <div className="flex items-center gap-2 text-white/70"><Users className="h-4 w-4" /><span className="text-sm">新手专属</span></div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="space-y-3">
                {[{ step: 1, title: '了解基础概念', desc: '跨境电商是什么' }, { step: 2, title: '选择销售平台', desc: 'Amazon / 速卖通 / Shopify' }, { step: 3, title: '选品与市场调研', desc: '找到你的第一款爆品' }, { step: 4, title: '注册开店', desc: '资质准备与账号申请' }].map((item, index) => (
                  <div key={item.step} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-accent text-white font-bold">{item.step}</div>
                    <div>
                      <div className="text-white font-medium">{item.title}</div>
                      <div className="text-white/60 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
