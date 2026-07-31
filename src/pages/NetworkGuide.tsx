import { useState } from 'react';
import { 
  Globe, Wifi, AlertTriangle, CheckCircle, ChevronRight, 
  Server, Cloud, Shield, ExternalLink, ArrowLeft
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const scenarios = [
  { platform: 'Amazon 卖家后台', needNetwork: false, desc: 'sellercentral.amazon.com 在国内可直接访问', note: '无需特殊网络' },
  { platform: 'Shopee 卖家中心', needNetwork: false, desc: 'seller.shopee.cn 为国内域名，直接访问', note: '无需特殊网络' },
  { platform: '速卖通卖家后台', needNetwork: false, desc: '国内服务器，直接访问', note: '无需特殊网络' },
  { platform: 'TikTok Shop', needNetwork: true, desc: '部分后台功能和创作者工具需要稳定国际网络', note: '建议配置' },
  { platform: 'Google Trends', needNetwork: true, desc: '谷歌趋势是选品必备工具，需要国际网络', note: '强烈建议配置' },
  { platform: 'Facebook 广告管理', needNetwork: true, desc: '投放 Facebook/Instagram 广告必须访问', note: '必须配置' },
  { platform: '竞品调研（国外网站）', needNetwork: true, desc: '查看国外竞品 Listing、社交媒体趋势', note: '建议配置' },
  { platform: 'Shopify 后台', needNetwork: false, desc: 'admin.shopify.com 在国内通常可访问', note: '一般无需特殊网络' },
];

const solutions = [
  {
    id: 'enterprise', title: '企业级国际专线', icon: Shield, color: 'bg-blue-500', borderColor: 'border-l-blue-500',
    description: '最稳定、最合规的方案，适合已有公司或计划规模化的卖家。通过正规电信渠道申请国际商务专线。',
    pros: ['合法合规', '稳定高速', '有售后支持', '适合团队'],
    cons: ['价格较高', '需要企业资质', '申请周期长'],
    cost: '500-3000 元/月', recommended: '有公司的卖家',
    providers: [
      { name: '中国电信政企国际专线', url: 'https://www.ctyun.cn', note: '联系当地电信政企客户经理' },
      { name: '中国移动国际企业宽带', url: 'https://cloud.10086.cn', note: '需企业资质申请' },
    ],
  },
  {
    id: 'cloud', title: '国际云服务器自建', icon: Cloud, color: 'bg-indigo-500', borderColor: 'border-l-indigo-500',
    description: '租用国外云服务器（VPS），自行搭建网络环境。技术门槛稍高，但灵活可控，成本适中。',
    pros: ['灵活可控', '成本适中', '多地区可选', '适合技术型用户'],
    cons: ['需要一定技术能力', '需自行维护', 'IP可能被风控'],
    cost: '30-200 元/月', recommended: '有一定技术能力的个人卖家',
    providers: [
      { name: 'Vultr', url: 'https://www.vultr.com', note: '按小时计费，日本/新加坡节点速度快' },
      { name: 'BandwagonHost（搬瓦工）', url: 'https://bandwagonhost.com', note: 'CN2 GIA线路，国内访问速度快' },
      { name: 'DigitalOcean', url: 'https://www.digitalocean.com', note: '新加坡节点对国内友好' },
      { name: 'Linode', url: 'https://www.linode.com', note: '老牌云服务商，稳定性好' },
    ],
  },
  {
    id: 'proxy', title: '商业代理/加速服务', icon: Server, color: 'bg-violet-500', borderColor: 'border-l-violet-500',
    description: '购买现成的商业代理服务，即开即用。适合不想折腾技术、快速上手的卖家。',
    pros: ['即开即用', '无需技术', '价格便宜', '客户端简单易用'],
    cons: ['稳定性参差不齐', '需注意合规性', '部分机场跑路风险'],
    cost: '20-100 元/月', recommended: '新手个人卖家、快速上手',
    providers: [
      { name: 'Nexitally（奶昔）', url: 'https://nexitally.com', note: '老牌机场，稳定性好，价格偏高' },
      { name: 'TAG VPN', url: 'https://tagvpn.com', note: '按流量计费，适合轻度使用' },
      { name: 'GLaDOS', url: 'https://glados.one', note: '教育优惠，学生党友好' },
      { name: 'AmyTelecom', url: 'https://amytele.com', note: 'IEPL专线，稳定性不错' },
    ],
  },
];

const tips = [
  { title: '先确认是否真的需要', desc: '很多平台（Shopee、速卖通）的卖家后台在国内完全可以正常访问。不要花冤枉钱。' },
  { title: '不要买太便宜的', desc: '几块钱一个月的服务基本不靠谱，经常断线或跑路。建议至少选择 30 元/月以上的服务。' },
  { title: '注意 IP 纯净度', desc: 'Amazon、TikTok 等平台会检测 IP 地址。如果 IP 被大量人共用，可能导致账号风控。尽量选择独立 IP 或专线。' },
  { title: '一个 IP 只登一个账号', desc: '绝对不要用一个网络环境登录多个店铺账号！这是封号的最大原因之一。每个店铺配独立的网络环境。' },
  { title: '备用方案很重要', desc: '至少准备两个不同的网络方案，一个主用一个备用。关键时刻不能掉链子。' },
  { title: '不要在公司网络登录店铺', desc: '公司内网可能有很多人共用同一个出口 IP，容易导致账号关联。店铺操作请使用独立的网络环境。' },
];

export default function NetworkGuide() {
  const [activeTab, setActiveTab] = useState('cloud');

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-primary pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">跨境电商网络环境配置指南</h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            做跨境电商，哪些操作需要国际网络？如何合法、稳定、安全地配置网络环境？这篇指南帮你一次搞清楚。
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-900 text-sm mb-1">重要提醒</h3>
            <p className="text-sm text-amber-800/80 leading-relaxed">
              本文仅讨论跨境电商业务所需的正常国际网络访问需求。请遵守当地法律法规，使用合法合规的网络服务。一个店铺必须使用独立的网络环境，切勿多账号共用同一 IP。
            </p>
          </div>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">哪些操作需要国际网络？</h2>
          </div>
          <p className="text-muted-foreground mb-6">不是所有跨境电商操作都需要特殊网络。先搞清楚哪些场景需要，避免花冤枉钱。</p>
          <div className="grid md:grid-cols-2 gap-3">
            {scenarios.map((s, idx) => (
              <div key={idx} className={`flex items-start gap-3 p-4 rounded-lg border ${s.needNetwork ? 'bg-amber-50/50 border-amber-200' : 'bg-green-50/50 border-green-200'}`}>
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${s.needNetwork ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                  {s.needNetwork ? <Wifi className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{s.platform}</span>
                    <Badge variant="outline" className={`text-xs ${s.needNetwork ? 'border-amber-300 text-amber-700' : 'border-green-300 text-green-700'}`}>{s.note}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Server className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">三种解决方案</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <button key={s.id} onClick={() => setActiveTab(s.id)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === s.id ? 'bg-primary text-white shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>
                  <Icon className="h-4 w-4" />
                  {s.title}
                </button>
              );
            })}
          </div>
          {solutions.map((s) => {
            if (s.id !== activeTab) return null;
            const Icon = s.icon;
            return (
              <Card key={s.id} className={`border-l-4 ${s.borderColor} overflow-hidden`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.color} text-white`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{s.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-0.5">{s.recommended}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">{s.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 text-sm mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4" />优点</h4>
                      <ul className="space-y-1.5">
                        {s.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-green-800/80 flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-green-600" />{pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 text-sm mb-2 flex items-center gap-2"><AlertTriangle className="h-4 w-4" />缺点</h4>
                      <ul className="space-y-1.5">
                        {s.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-red-800/80 flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-red-600" />{con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-muted/50 rounded-lg p-4">
                    <div><span className="text-xs text-muted-foreground">参考价格</span><div className="font-bold text-primary">{s.cost}</div></div>
                    <div className="h-8 w-px bg-border" />
                    <div><span className="text-xs text-muted-foreground">适合人群</span><div className="font-medium text-sm">{s.recommended}</div></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-3">推荐服务商</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {s.providers.map((provider, idx) => (
                        <a key={idx} href={provider.url} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group">
                          <div>
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">{provider.name}</div>
                            <p className="text-xs text-muted-foreground mt-1">{provider.note}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">新手必看的实操建议</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-primary text-sm mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">{idx + 1}</span>
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="overflow-hidden gradient-primary text-white">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-6">快速选择指南</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="text-accent font-bold text-sm mb-2">完全新手</div>
                  <p className="text-white/80 text-sm leading-relaxed">预算有限，不想折腾技术 → 选择 <strong className="text-white">商业代理服务</strong>，即开即用，月费 30-50 元足够。先用免费/低价套餐测试稳定性。</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="text-accent font-bold text-sm mb-2">有一定经验</div>
                  <p className="text-white/80 text-sm leading-relaxed">懂一点技术，想省钱又可控 → 选择 <strong className="text-white">云服务器自建</strong>，月费 50-100 元，自己搭建，IP 独享更安心。</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="text-accent font-bold text-sm mb-2">团队/公司</div>
                  <p className="text-white/80 text-sm leading-relaxed">多人使用，追求稳定合规 → 选择 <strong className="text-white">企业级国际专线</strong>，月费 500+，但稳定、合法、可开票，适合长期经营。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <a href="/"><Button size="lg" className="gradient-accent text-white border-0 hover:opacity-90"><ArrowLeft className="mr-2 h-4 w-4" />返回学习路径</Button></a>
        </div>
      </div>
    </div>
  );
}
