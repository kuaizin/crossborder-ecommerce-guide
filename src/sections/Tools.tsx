import { Wrench, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const tools = [
  {
    category: '选品调研',
    items: [
      { name: '卖家精灵', desc: 'Amazon 竞品分析、关键词工具', type: '付费' },
      { name: 'Google Trends', desc: '查看产品搜索热度趋势', type: '免费' },
      { name: 'Jungle Scout', desc: '选品数据库、销量估算', type: '付费' },
      { name: 'TikTok Creative Center', desc: '查看 TikTok 热门商品和广告', type: '免费' },
    ],
  },
  {
    category: 'Listing 优化',
    items: [
      { name: 'ChatGPT / Claude', desc: 'AI 撰写 Listing 文案', type: '免费/付费' },
      { name: 'DeepL 翻译', desc: '高质量多语言翻译', type: '免费' },
      { name: 'Grammarly', desc: '英文语法检查和润色', type: '免费/付费' },
      { name: 'Canva', desc: '设计产品图、A+ 页面素材', type: '免费/付费' },
    ],
  },
  {
    category: '运营管理',
    items: [
      { name: '店小秘 / 马帮 ERP', desc: '多平台订单、库存统一管理', type: '付费' },
      { name: '连连支付', desc: '跨境收款，费率低', type: '免费开户' },
      { name: 'PingPong', desc: '跨境收款与付款', type: '免费开户' },
      { name: '鸥鹭 / 数派', desc: 'Amazon 数据分析与选品', type: '付费' },
    ],
  },
  {
    category: '物流仓储',
    items: [
      { name: '4PX 递四方', desc: '跨境物流与海外仓', type: '付费' },
      { name: '云途物流', desc: '专线小包，性价比高', type: '付费' },
      { name: '菜鸟国际', desc: '阿里系跨境物流', type: '付费' },
      { name: '出口易', desc: 'FBA 头程与海外仓', type: '付费' },
    ],
  },
];

const resources = [
  { title: 'Amazon 卖家大学', desc: '官方免费教程，最权威的 Amazon 运营知识', tag: '官方' },
  { title: 'Shopee 卖家学习中心', desc: 'Shopee 官方入门教程和运营技巧', tag: '官方' },
  { title: '知无不言论坛', desc: '跨境电商卖家交流社区，干货很多', tag: '社区' },
  { title: '雨果网', desc: '跨境电商行业媒体和资讯平台', tag: '媒体' },
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">装备库</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            推荐工具与资源
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            工欲善其事，必先利其器。这些工具能帮你大幅提升效率
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tools.map((category) => (
            <Card key={category.category} className="overflow-hidden">
              <CardHeader className="pb-3 bg-muted/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        {item.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            <Star className="h-5 w-5 text-accent" />
            学习资源推荐
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <Card key={resource.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{resource.tag}</Badge>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{resource.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{resource.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
