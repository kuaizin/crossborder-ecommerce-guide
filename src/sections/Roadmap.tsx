import { useState } from 'react';
import { BookOpen, Store, Search, FileText, Package, Truck, Wallet, ChevronRight } from 'lucide-react';

const steps = [
  { id: 1, icon: BookOpen, title: '了解基础概念', desc: '什么是跨境电商、B2B vs B2C、常见模式', color: 'bg-blue-500' },
  { id: 2, icon: Store, title: '选择销售平台', desc: 'Amazon、eBay、速卖通、Shopee、Shopify 怎么选', color: 'bg-indigo-500' },
  { id: 3, icon: Search, title: '选品与市场调研', desc: '找到有需求、竞争小的产品切入点', color: 'bg-violet-500' },
  { id: 4, icon: FileText, title: '注册开店与资质', desc: '营业执照、品牌商标、平台入驻流程', color: 'bg-purple-500' },
  { id: 5, icon: Package, title: '商品上架优化', desc: 'Listing 撰写、图片拍摄、关键词优化', color: 'bg-pink-500' },
  { id: 6, icon: Truck, title: '物流与仓储', desc: 'FBA、海外仓、自发货，选对物流方案', color: 'bg-rose-500' },
  { id: 7, icon: Wallet, title: '收款与合规', desc: '跨境收款、税务申报、知识产权保护', color: 'bg-orange-500' },
];

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">7 步入门学习路径</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">按照这条路径学习，从完全不懂到成功出单，每一步都有明确的目标和操作方法</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-orange-200 -translate-y-1/2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center" onMouseEnter={() => setActiveStep(step.id)} onMouseLeave={() => setActiveStep(null)}>
                  <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 cursor-pointer ${step.color} ${activeStep === step.id ? 'scale-110 ring-4 ring-offset-2 ring-blue-200' : ''}`} onClick={() => document.getElementById(`step-${step.id}`)?.scrollIntoView({ behavior: 'smooth' })}>
                    <Icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">{step.id}</span>
                  </div>
                  <div className={`mt-4 text-center transition-all duration-300 ${activeStep === step.id ? 'transform -translate-y-1' : ''}`}>
                    <h3 className="font-semibold text-primary text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed hidden sm:block">{step.desc}</p>
                  </div>
                  {index < steps.length - 1 && <ChevronRight className="lg:hidden h-5 w-5 text-muted-foreground/50 rotate-90 sm:rotate-0 mt-2 sm:mt-0" />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">💡 点击上方任意步骤，可直接跳转到详细教程</p>
        </div>
      </div>
    </section>
  );
}
