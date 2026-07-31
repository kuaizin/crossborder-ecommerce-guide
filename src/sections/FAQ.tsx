import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: '没有国外手机号，怎么注册海外平台？',
    answer: '这是很多新手的痛点！其实大部分平台（Shopee、速卖通）可以直接用中国手机号注册。只有 TikTok Shop 美区/英区、Facebook 广告账户等才需要国外手机号。获取国外手机号有三种方式：① 虚拟接码平台（SMS-Activate 等，1-5元/次，适合一次性验证）；② 实体 SIM 卡/eSIM（Ultra Mobile、giffgaff 等，50-300元/月，长期稳定）；③ 免费 VoIP（Google Voice、TextNow，需维护保号）。',
    hasLink: true, linkUrl: '/phone', linkText: '查看手机号获取指南',
  },
  {
    question: '国内无法访问国外网络，还能做跨境电商吗？',
    answer: '完全可以！首先要明确：不是所有跨境电商操作都需要"特殊网络"。Shopee、速卖通、Amazon 卖家后台在国内都能正常访问。只有在使用 Google Trends、Facebook 广告、TikTok Shop 部分功能时才需要。我们有专门的《跨境电商网络环境配置指南》，详细介绍了三种可行方案（企业专线、云服务器自建、商业代理）和具体服务商推荐，点击查看 →',
    hasLink: true, linkUrl: '/network', linkText: '查看网络配置指南',
  },
  {
    question: '做跨境电商需要会英语吗？',
    answer: '不需要！现在主流平台都有中文后台（如速卖通、Shopee），Amazon 虽然后台是英文但可以用浏览器翻译插件。Listing 撰写可以用 ChatGPT、DeepL 等 AI 翻译工具，客服也可以用翻译软件辅助。当然，如果你能懂一些基础英语会更有优势。',
  },
  {
    question: '启动资金大概需要多少？',
    answer: '这取决于平台和模式。最低可以从 5000 元起步（Shopee 无货源模式），一般的起步资金在 2-5 万元（包含首批备货、物流、广告费）。Amazon 需要 5-10 万起步。建议先用小资金测试，验证产品可行后再加大投入。',
  },
  {
    question: '一个人能做跨境电商吗？',
    answer: '完全可以！很多卖家最初都是一个人做起来的。建议前期一个人负责选品、上架、客服，等有了稳定出单后再考虑雇人。一个人起步时，优先选择 Shopee 或速卖通这种运营相对简单的平台。',
  },
  {
    question: '多久能开始盈利？',
    answer: '因人而异。快的话 1-2 个月就有第一单，3-6 个月实现盈利。但也有可能需要更长时间来测试产品和优化运营。关键是不要急于求成，先跑通一个产品的完整流程，再批量复制。',
  },
  {
    question: '需要注册公司吗？个体户可以吗？',
    answer: '大部分平台接受个体户入驻（如 Shopee、速卖通），但 Amazon 欧洲站等需要公司资质。长远来看，建议注册公司（有限责任公司），这样更专业，也方便做出口退税和开设香港账户。',
  },
  {
    question: '怎么收款？资金安全吗？',
    answer: '常用的收款工具有连连支付、PingPong、万里汇（WorldFirst）等，都是持牌正规机构，资金安全有保障。平台销售额会打到这些第三方账户，你再提现到国内银行卡，整个过程 1-3 个工作日。',
  },
  {
    question: '会被封号吗？怎么避免？',
    answer: '封号风险确实存在，特别是 Amazon。避免方法：严格遵守平台规则（不刷单、不侵权、不卖假货）、保持好账户健康度（及时回复买家、控制退货率）、不要使用多个账户关联操作。建议先花时间学习平台规则再动手。',
  },
  {
    question: '选品没有方向怎么办？',
    answer: '几个方向供参考：① 从你自己熟悉的领域入手；② 刷 TikTok/Pinterest 看 trending；③ 看 Amazon Best Sellers 榜单找灵感；④ 用工具（卖家精灵、Jungle Scout）分析数据。关键是先动起来，不要一直在"想"。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">常见问题</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            新手最常问的问题
          </h2>
          <p className="text-lg text-muted-foreground">
            你疑惑的，这里都有答案
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'ring-1 ring-primary/20' : ''}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3 pr-4">
                  <HelpCircle className={`h-5 w-5 shrink-0 ${openIndex === index ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={`font-medium ${openIndex === index ? 'text-primary' : 'text-foreground'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pl-[3.25rem]">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  {(faq as any).hasLink && (
                    <a
                      href={(faq as any).linkUrl}
                      className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {(faq as any).linkText}
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
