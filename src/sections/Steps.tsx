import { 
  BookOpen, Store, Search, FileText, Package, Truck, Wallet,
  CheckCircle, Lightbulb, ChevronRight, ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const stepDetails = [
  {
    id: 1, icon: BookOpen, title: '了解基础概念', subtitle: '先搞清楚你在做什么',
    color: 'border-l-blue-500', bgIcon: 'bg-blue-500',
    content: {
      concept: '跨境电商是指通过互联网将商品从一个国家销售到另一个国家的商业活动。简单来说，就是"把中国的货卖到国外去"。',
      models: [
        { name: 'B2C（企业对个人）', desc: '最典型的模式，如 Amazon、速卖通，你开店，海外消费者买单' },
        { name: 'B2B（企业对企业）', desc: '阿里巴巴国际站，批量卖给海外商家或批发商' },
        { name: '独立站（DTC）', desc: '自建网站（Shopify），不依赖平台，自己引流卖货' },
        { name: '社交电商', desc: 'TikTok Shop、Facebook 商城，通过短视频/直播带货' },
      ],
      tips: [
        '跨境电商和国内电商最大的区别：要处理汇率、关税、国际物流',
        '新手建议从 B2C 平台起步（如 Amazon），成熟后再考虑独立站',
        '不需要会外语！翻译工具和中文后台已经很成熟',
      ],
    },
  },
  {
    id: 2, icon: Store, title: '选择销售平台', subtitle: '选对平台，成功一半',
    color: 'border-l-indigo-500', bgIcon: 'bg-indigo-500',
    content: {
      concept: '不同平台有不同的市场、规则和费用。选平台要考虑你的资金、产品类型和目标市场。',
      models: [
        { name: 'Amazon（亚马逊）', desc: '全球最大电商平台，欧美市场，客单价高，但竞争激烈，需要较多启动资金', registerUrl: 'https://gs.amazon.com', registerLabel: 'Amazon 全球开店' },
        { name: '速卖通（AliExpress）', desc: '阿里巴巴旗下，主打俄罗斯、拉美、中东，适合价格敏感型产品', registerUrl: 'https://sell.aliexpress.com', registerLabel: '速卖通卖家入驻' },
        { name: 'Shopee（虾皮）', desc: '东南亚市场王者，入驻门槛低，适合中小卖家和轻小件商品', registerUrl: 'https://seller.shopee.cn', registerLabel: 'Shopee 卖家入驻' },
        { name: 'TikTok Shop', desc: '兴趣电商新模式，短视频+直播带货，流量红利期，适合有内容能力的卖家', registerUrl: 'https://seller.tiktok.com', registerLabel: 'TikTok Shop 入驻' },
        { name: 'eBay', desc: '老牌拍卖+固定价平台，欧美市场，适合二手、收藏品、汽配等', registerUrl: 'https://www.ebay.com/sell', registerLabel: 'eBay 卖家注册' },
        { name: 'Shopify 独立站', desc: '自建品牌官网，完全自主，但需要自己引流，适合有一定经验的卖家', registerUrl: 'https://www.shopify.com', registerLabel: 'Shopify 免费试用' },
      ],
      tips: [
        '资金少 + 没经验 → 选 Shopee 或速卖通',
        '资金充足 + 想做品牌 → 选 Amazon',
        '有内容创作能力 → 考虑 TikTok Shop',
        '同一产品可以在多个平台同时销售',
      ],
    },
  },
  {
    id: 3, icon: Search, title: '选品与市场调研', subtitle: '找到你的第一款爆品',
    color: 'border-l-violet-500', bgIcon: 'bg-violet-500',
    content: {
      concept: '选品是跨境电商最核心的环节。好的产品能解决痛点，差的产品连广告费都赚不回来。',
      models: [
        { name: '选品核心原则', desc: '体积小、重量轻、不易碎、非季节性、利润率高（>30%）、没有品牌垄断' },
        { name: '调研工具 - 卖家精灵', desc: '查看 Amazon 热销榜单、竞品销量、关键词搜索量（付费工具，有试用）' },
        { name: '调研工具 - Google Trends', desc: '免费！查看产品搜索趋势，判断需求是否在上升期还是下降期' },
        { name: '调研方法 - 差评分析法', desc: '看竞品差评，找到用户痛点，改进后就是你的差异化卖点' },
        { name: '调研方法 - 社交媒体挖掘', desc: '刷 TikTok、Pinterest、Instagram，看哪些产品在"病毒式传播"' },
      ],
      tips: [
        '不要选带电/带磁/液体/粉末类产品，物流太麻烦',
        '避开已经有很多大卖家垄断的品类（如手机壳）',
        '季节性产品（如圣诞装饰）要提前 3-6 个月备货',
        '先从自己熟悉或感兴趣的领域入手',
      ],
    },
  },
  {
    id: 4, icon: FileText, title: '注册开店与资质准备', subtitle: '合法合规，正式入行',
    color: 'border-l-purple-500', bgIcon: 'bg-purple-500',
    content: {
      concept: '开店前需要准备一些基本资质。不同平台要求不同，但核心材料大同小异。',
      models: [
        { name: '必备资质 - 营业执照', desc: '个体户或公司执照都可以。推荐注册公司（有限责任公司），看起来更专业' },
        { name: '必备资质 - 法人身份证', desc: '营业执照上法人的身份证正反面，需清晰可辨' },
        { name: '必备资质 - 双币信用卡', desc: 'Visa 或 Mastercard，用于支付平台月租费和广告费' },
        { name: 'Amazon 特殊要求', desc: '需要银行账户对账单、可能需要二审（水电煤账单验证地址）' },
        { name: '品牌商标（可选但推荐）', desc: '注册自己的品牌商标，防止跟卖，可以做品牌备案获得更多功能' },
      ],
      tips: [
        '一套资料只能注册一个店铺，多店铺需要不同的营业执照和法人',
        '地址要真实有效，因为平台可能会寄验证码',
        '找靠谱的代理记账公司处理税务，别自己折腾',
        '如果做 Amazon，建议先学习平台规则，避免一开始就违规被封',
      ],
    },
  },
  {
    id: 5, icon: Package, title: '商品上架与 Listing 优化', subtitle: '让产品自己卖出去',
    color: 'border-l-pink-500', bgIcon: 'bg-pink-500',
    content: {
      concept: 'Listing 就是你的"产品页面"。好的 Listing 能让买家一见钟情，差的 Listing 再投广告也没用。',
      models: [
        { name: '标题优化', desc: '核心关键词放前面，格式：品牌+核心词+属性词+卖点词。控制在 80 字符以内' },
        { name: '图片要求', desc: '主图白底、1000x1000 像素以上、占图 85%。建议 6-8 张图：场景图+细节图+对比图+使用图' },
        { name: '五点描述（Bullet Points）', desc: '每个卖点一行，突出功能+好处。用买家语言，不要堆砌参数' },
        { name: '关键词埋词', desc: '在标题、搜索词、描述中自然融入关键词，但别堆砌。用工具查竞品关键词' },
        { name: '定价策略', desc: '参考竞品价格，留出 30%+ 的利润空间。初期可以略低获取评价，再慢慢提价' },
      ],
      tips: [
        '图片是最大的转化率因素，花点钱请专业摄影师绝对值',
        '标题不要全大写，不要特殊符号，看起来不专业',
        'Review（评价）很重要，前期可以通过 Vine 计划或站外送测获取首批评价',
        'A+ 页面（图文版详情）能大幅提升转化率，有条件一定要做',
      ],
    },
  },
  {
    id: 6, icon: Truck, title: '物流与仓储方案', subtitle: '货怎么运到买家手里',
    color: 'border-l-rose-500', bgIcon: 'bg-rose-500',
    content: {
      concept: '物流成本和时效直接影响利润和买家满意度。选对物流方式能省一大笔钱。',
      models: [
        { name: 'FBA（亚马逊物流）', desc: '把货发到亚马逊仓库，买家下单后亚马逊负责配送。省心但费用较高，有仓储限制' },
        { name: '海外仓', desc: '第三方海外仓库，比 FBA 灵活便宜，但需要自己管理库存。适合多平台销售' },
        { name: '自发货（FBM）', desc: '自己找物流发货。初期测试产品可以用，但不利于获得 Prime 标志' },
        { name: ' Dropshipping（一件代发）', desc: '不备货，出单后供应商直接发货给买家。风险最低但利润也最低' },
        { name: '头程物流', desc: '货从中国运到海外仓/FBA。海运便宜但慢（30-40天），空运快但贵（5-10天）' },
      ],
      tips: [
        '新品测试期：自发货或小批量海运，降低风险',
        '产品验证后：转 FBA 或海外仓，提升配送时效和转化率',
        '关注物流淡旺季，旺季（11-12月）运费会涨、仓库会爆满',
        '打包要结实！国际运输很暴力，破损退货成本很高',
      ],
    },
  },
  {
    id: 7, icon: Wallet, title: '收款、税务与合规', subtitle: '把钱安全地拿回来',
    color: 'border-l-orange-500', bgIcon: 'bg-orange-500',
    content: {
      concept: '卖出货只是第一步，把钱收回来、合法纳税、保护知识产权，才能长久做生意。',
      models: [
        { name: '跨境收款工具', desc: '连连支付、PingPong、万里汇（WorldFirst）、Payoneer 都可以。费率约 0.5%-1%' },
        { name: '汇率管理', desc: '美元结算后可以随时提现，也可以等汇率好的时候再提。关注汇率走势' },
        { name: '出口退税', desc: '以公司名义出口可以申请退税（约 13%），是一笔不小的收入，找代理处理' },
        { name: 'VAT/销售税', desc: '欧洲需要 VAT 税号，美国部分州要缴销售税。可以找税务代理处理' },
        { name: '知识产权保护', desc: '注册商标、申请专利、品牌备案。防止别人跟卖你的 Listing' },
      ],
      tips: [
        '注册香港公司可以简化收款和税务流程，很多卖家这么做',
        '保留所有交易记录和发票，税务稽查时能拿出证据',
        '不要侵权！卖仿品、假货会被平台封店甚至法律追责',
        '购买商业保险（如 Amazon 要求的产品责任险），保护自己',
      ],
    },
  },
];

export default function Steps() {
  return (
    <section id="steps" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">详细教程</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            每一步详细拆解
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            每个步骤都包含概念解释、操作方法和实用技巧
          </p>
        </div>

        <div className="space-y-8">
          {stepDetails.map((step) => {
            const Icon = step.icon;
            const isPlatformStep = step.id === 2;
            return (
              <Card
                key={step.id}
                id={`step-${step.id}`}
                className={`border-l-4 ${step.color} overflow-hidden scroll-mt-24`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.bgIcon} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">步骤 {step.id}</span>
                      </div>
                      <CardTitle className="text-xl mt-0.5">{step.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2 ml-16">{step.subtitle}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground/80 mb-6 ml-16 leading-relaxed">
                    {step.content.concept}
                  </p>

                  <div className="ml-16 grid md:grid-cols-2 gap-4 mb-6">
                    {step.content.models.map((model: any, idx: number) => (
                      <div key={idx} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-primary text-sm mb-1 flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-accent shrink-0" />
                            {model.name}
                          </h4>
                          {isPlatformStep && model.registerUrl && (
                            <a href={model.registerUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
                              <Button size="sm" variant="outline" className="h-7 text-xs gap-1 hover:bg-primary hover:text-white">
                                注册
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="ml-16 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 text-sm mb-3 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      新手小贴士
                    </h4>
                    <ul className="space-y-2">
                      {step.content.tips.map((tip: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-amber-900/80">
                          <CheckCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
