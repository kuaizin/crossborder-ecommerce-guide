import { useState } from 'react';
import { 
  Smartphone, MessageSquare, AlertTriangle, CheckCircle, ChevronRight, 
  Globe, Phone, Shield, ExternalLink, ArrowLeft, CreditCard
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const scenarios = [
  {
    platform: 'Amazon 卖家注册',
    needPhone: true,
    desc: '注册时需要接收短信验证码，部分站点支持中国手机号',
    note: '部分站点可用中国号',
  },
  {
    platform: 'Shopee 入驻',
    needPhone: false,
    desc: '支持中国大陆手机号直接注册',
    note: '无需国外手机号',
  },
  {
    platform: '速卖通（AliExpress）',
    needPhone: false,
    desc: '阿里巴巴旗下，完全支持中国手机号',
    note: '无需国外手机号',
  },
  {
    platform: 'TikTok Shop',
    needPhone: true,
    desc: '美区/英区店铺注册需要对应国家手机号验证',
    note: '必须国外手机号',
  },
  {
    platform: 'Google 账号 / Gmail',
    needPhone: true,
    desc: '注册 Google 账号用于 Google Trends、YouTube 等',
    note: '建议国外手机号',
  },
  {
    platform: 'Facebook / Meta 广告账户',
    needPhone: true,
    desc: '广告账户验证、双重认证需要稳定手机号',
    note: '建议国外手机号',
  },
  {
    platform: 'PayPal 国际版',
    needPhone: true,
    desc: '部分功能验证需要国外手机号',
    note: '视地区而定',
  },
  {
    platform: 'Shopify / Stripe',
    needPhone: true,
    desc: '独立站收款工具，部分需要美国/欧洲手机号',
    note: '视具体服务而定',
  },
];

const solutions = [
  {
    id: 'virtual',
    title: '虚拟手机号接码平台',
    icon: MessageSquare,
    color: 'bg-emerald-500',
    borderColor: 'border-l-emerald-500',
    description: '最快捷、最便宜的方式。购买一次性的虚拟手机号用于接收短信验证码，用完即弃或短期保留。适合注册验证场景。',
    pros: ['价格低廉', '即买即用', '支持多国家', '无需实名'],
    cons: ['号码不固定', '部分平台风控严格', '不能接电话', '有回收风险'],
    cost: '1-20 元/次',
    recommended: '新手、一次性注册验证',
    providers: [
      { name: 'SMS-Activate', url: 'https://sms-activate.org', note: '全球最大接码平台，支持 200+ 国家，价格透明' },
      { name: '5sim.net', url: 'https://5sim.net', note: '价格较低，API 友好，支持批量操作' },
      { name: 'SMSPva', url: 'https://smspva.com', note: '专注社交账号注册，Facebook/Google 成功率高' },
      { name: 'Onlinesim.io', url: 'https://onlinesim.io', note: '俄罗斯老牌平台，稳定性好' },
    ],
  },
  {
    id: 'esim',
    title: '实体 / eSIM 国外电话卡',
    icon: Smartphone,
    color: 'bg-blue-500',
    borderColor: 'border-l-blue-500',
    description: '购买可长期使用的实体 SIM 卡或 eSIM，拥有固定的国外手机号。适合需要长期稳定号码的卖家，如接收银行验证码、客户电话等。',
    pros: ['号码长期有效', '可接打电话', '稳定性高', '适合重要账户'],
    cons: ['价格较高', '需邮寄或配置 eSIM', '部分需实名', '月租费'],
    cost: '50-300 元/月',
    recommended: '长期经营、重要账户绑定',
    providers: [
      { name: '3HK（香港和记电讯）', url: 'https://www.three.com.hk', note: '香港实体卡，支持内地漫游，淘宝可购' },
      { name: 'CMHK 鸭聊佳', url: 'https://www.cmhk.com', note: '中国移动香港，内地可用，保号成本低' },
      { name: 'Ultra Mobile（美国）', url: 'https://www.ultramobile.com', note: '美国实体卡，月租 $3，可收短信，T-Mobile 网络' },
      { name: 'KnowRoaming / Airalo', url: 'https://www.airalo.com', note: 'eSIM 服务，无需实体卡，APP 直接购买激活' },
      { name: '英国 giffgaff', url: 'https://www.giffgaff.com', note: '英国 O2 网络，0 月租，免费接收短信' },
    ],
  },
  {
    id: 'voice',
    title: 'VoIP / 云电话服务',
    icon: Phone,
    color: 'bg-violet-500',
    borderColor: 'border-l-violet-500',
    description: '使用互联网电话服务获取国外号码。Google Voice 是最知名的选择，可获得美国号码用于接收短信和语音邮件。',
    pros: ['免费或低价', '可收短信语音', '管理方便', '美国号码认可度高'],
    cons: ['注册门槛高（需美国 IP）', 'Google Voice 风控严格', '需维护活跃度', '部分平台不认可 VoIP 号'],
    cost: '免费 - 50 元/月',
    recommended: '有一定技术基础、追求性价比',
    providers: [
      { name: 'Google Voice', url: 'https://voice.google.com', note: '免费美国号码，需美国 IP 注册，6个月不发短信会回收' },
      { name: 'TextNow', url: 'https://www.textnow.com', note: '免费美国/加拿大号码，需定期使用保号' },
      { name: 'Twilio', url: 'https://www.twilio.com', note: '开发者友好的云通信平台，按量计费，API 强大' },
      { name: 'OpenPhone', url: 'https://www.openphone.com', note: '商务云电话，美国号码，适合团队使用' },
    ],
  },
];

const tips = [
  {
    title: '重要账户用固定号码',
    desc: 'Amazon 卖家账户、PayPal、银行账户等核心资产，务必绑定一个你能长期控制的固定号码。不要用在接码平台买的临时号绑定重要账户！',
  },
  {
    title: '一个号码只绑一个账号',
    desc: '和 IP 一样，手机号也是平台检测账号关联的重要依据。同一个手机号绑定多个 Amazon 店铺 = 封号风险。',
  },
  {
    title: '接码平台选「租用」而非「一次性」',
    desc: 'SMS-Activate 等平台有「租用号码」选项（Rent），可以保留号码 4 小时到 4 周不等，比一次性接码更适合需要二次验证的账号。',
  },
  {
    title: 'Google Voice 需维护',
    desc: 'Google Voice 号码如果 6 个月内没有发送短信或拨打电话，会被 Google 回收。建议每月至少发一条短信保号。',
  },
  {
    title: '实体卡注意保号规则',
    desc: '不同运营商保号规则不同。例如 giffgaff 要求每 6 个月有一次消费或余额变动，Ultra Mobile 需保持月租扣费成功。',
  },
  {
    title: 'eSIM 是未来的趋势',
    desc: 'iPhone XS 及以上机型、大部分安卓旗舰都支持 eSIM。无需实体卡、APP 内即可购买激活，推荐 Airalo、Holafly 等服务商。',
  },
];

export default function PhoneGuide() {
  const [activeTab, setActiveTab] = useState('virtual');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            跨境电商国外手机号获取指南
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            注册海外平台、绑定收款账户、设置双重验证都需要国外手机号。
            这篇指南介绍 3 种获取方式，从临时接码到长期固定号码，总有一款适合你。
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Alert Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-900 text-sm mb-1">重要提醒</h3>
            <p className="text-sm text-amber-800/80 leading-relaxed">
              核心店铺账户（Amazon、PayPal 等）务必绑定长期可控的固定号码。
              临时接码平台的号码不适合绑定重要资产，一旦号码被回收，账户可能永久无法找回。
            </p>
          </div>
        </div>

        {/* Section 1: 哪些场景需要 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">哪些场景需要国外手机号？</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            不是所有平台都需要国外手机号。有些平台完全支持中国号码注册。
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {scenarios.map((s, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-3 p-4 rounded-lg border ${
                  s.needPhone ? 'bg-amber-50/50 border-amber-200' : 'bg-green-50/50 border-green-200'
                }`}
              >
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  s.needPhone ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'
                }`}>
                  {s.needPhone ? <Smartphone className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{s.platform}</span>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${s.needPhone ? 'border-amber-300 text-amber-700' : 'border-green-300 text-green-700'}`}
                    >
                      {s.note}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 解决方案对比 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">三种获取方式</h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap gap-2 mb-8">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === s.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Active Solution Detail */}
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
                      <h4 className="font-semibold text-green-800 text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        优点
                      </h4>
                      <ul className="space-y-1.5">
                        {s.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-green-800/80 flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-green-600" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 text-sm mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        缺点
                      </h4>
                      <ul className="space-y-1.5">
                        {s.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-red-800/80 flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-red-600" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-muted/50 rounded-lg p-4">
                    <div>
                      <span className="text-xs text-muted-foreground">参考价格</span>
                      <div className="font-bold text-primary">{s.cost}</div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div>
                      <span className="text-xs text-muted-foreground">适合人群</span>
                      <div className="font-medium text-sm">{s.recommended}</div>
                    </div>
                  </div>

                  {/* Providers */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3">推荐服务商</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {s.providers.map((provider, idx) => (
                        <a
                          key={idx}
                          href={provider.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start justify-between gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                        >
                          <div>
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">
                              {provider.name}
                            </div>
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

        {/* Section 3: 实操建议 */}
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
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {idx + 1}
                  </span>
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 快速决策指南 */}
        <section className="mb-16">
          <Card className="overflow-hidden gradient-primary text-white">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-6">快速选择指南</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="text-accent font-bold text-sm mb-2">只想快速注册验证</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    预算低，只需要收一次验证码 → 选择 <strong className="text-white">虚拟接码平台</strong>（SMS-Activate），
                    每次 1-5 元，即买即用。
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="text-accent font-bold text-sm mb-2">长期经营一个店铺</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    有稳定店铺，需要长期固定号码 → 选择 <strong className="text-white">实体 SIM 卡 / eSIM</strong>（如 Ultra Mobile、giffgaff），
                    月租低，号码长期可控。
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="text-accent font-bold text-sm mb-2">会折腾、追求性价比</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    有技术能力，愿意花时间维护 → 选择 <strong className="text-white">Google Voice / TextNow</strong>，
                    免费或低价获得美国号码，注意定期保号。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a href="/">
            <Button size="lg" className="gradient-accent text-white border-0 hover:opacity-90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回学习路径
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
