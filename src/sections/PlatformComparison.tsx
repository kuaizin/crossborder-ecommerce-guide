import { Check, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const platforms = [
  { name: 'Amazon', logo: 'AMZ', color: 'bg-orange-500', market: '美国、欧洲、日本', fee: '月租 $39.99 + 佣金 8-15%', pros: ['流量最大', '客单价高', 'FBA 省心'], difficulty: '中等', startupCost: '3-10 万', bestFor: '有资金、想做品牌的卖家', registerUrl: 'https://gs.amazon.com', registerLabel: 'Amazon 全球开店' },
  { name: '速卖通', logo: 'AE', color: 'bg-red-500', market: '俄罗斯、拉美、中东', fee: '保证金 1-5 万 + 佣金 5-8%', pros: ['阿里巴巴系', '中文后台', '入驻简单'], difficulty: '简单', startupCost: '1-3 万', bestFor: '工厂型卖家、价格敏感型产品', registerUrl: 'https://sell.aliexpress.com', registerLabel: '速卖通卖家入驻' },
  { name: 'Shopee', logo: 'SH', color: 'bg-orange-400', market: '东南亚、拉美', fee: '佣金 2-5% + 交易费', pros: ['门槛低', '入驻免费', '中文支持好'], difficulty: '简单', startupCost: '0.5-2 万', bestFor: '新手起步、轻小件、快消品', registerUrl: 'https://seller.shopee.cn', registerLabel: 'Shopee 卖家入驻' },
  { name: 'TikTok Shop', logo: 'TT', color: 'bg-black', market: '美国、英国、东南亚', fee: '佣金 2-8%', pros: ['流量红利', '内容电商', '转化高'], difficulty: '中等', startupCost: '1-5 万', bestFor: '有短视频/直播能力的卖家', registerUrl: 'https://seller.tiktok.com', registerLabel: 'TikTok Shop 入驻' },
  { name: 'Shopify', logo: 'SF', color: 'bg-green-600', market: '全球（自建站）', fee: '月租 $29-299 + 交易费', pros: ['完全自主', '品牌化', '无平台抽成'], difficulty: '较难', startupCost: '3-10 万', bestFor: '有品牌意识、有引流能力的卖家', registerUrl: 'https://www.shopify.com', registerLabel: 'Shopify 免费试用' },
  { name: 'eBay', logo: 'EB', color: 'bg-blue-600', market: '美国、欧洲、澳洲', fee: '刊登费 + 成交佣金 10-15%', pros: ['老牌平台', '拍卖特色', '汽配强'], difficulty: '中等', startupCost: '1-3 万', bestFor: '二手、收藏品、汽配、特色商品', registerUrl: 'https://www.ebay.com/sell', registerLabel: 'eBay 卖家注册' },
];

export default function PlatformComparison() {
  return (
    <section id="platforms" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">平台选择</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">主流跨境电商平台对比</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">不同平台适合不同的人，根据你的情况选择最适合的起点，点击即可直达注册</p>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-4 px-4 font-semibold text-primary">平台</th>
                <th className="text-left py-4 px-4 font-semibold text-primary">主要市场</th>
                <th className="text-left py-4 px-4 font-semibold text-primary">费用结构</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">入门难度</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">启动资金</th>
                <th className="text-left py-4 px-4 font-semibold text-primary">适合人群</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">注册入口</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((p, idx) => (
                <tr key={p.name} className={`border-b border-border hover:bg-muted/30 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-muted/10'}`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${p.color} text-white text-xs font-bold`}>{p.logo}</div>
                      <span className="font-semibold text-primary">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{p.market}</td>
                  <td className="py-4 px-4 text-muted-foreground">{p.fee}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${p.difficulty === '简单' ? 'bg-green-100 text-green-800' : p.difficulty === '中等' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{p.difficulty}</span>
                  </td>
                  <td className="py-4 px-4 text-center font-medium">{p.startupCost}</td>
                  <td className="py-4 px-4 text-muted-foreground">{p.bestFor}</td>
                  <td className="py-4 px-4 text-center">
                    <a href={p.registerUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="text-xs gap-1 hover:bg-primary hover:text-white">注册 <ExternalLink className="h-3 w-3" /></Button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden grid gap-4">
          {platforms.map((p) => (
            <Card key={p.name} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${p.color} text-white text-xs font-bold`}>{p.logo}</div>
                    <div><CardTitle className="text-lg">{p.name}</CardTitle></div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${p.difficulty === '简单' ? 'bg-green-100 text-green-800' : p.difficulty === '中等' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{p.difficulty}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-muted-foreground">市场：</span><span className="text-foreground">{p.market}</span></div>
                  <div><span className="text-muted-foreground">启动资金：</span><span className="text-foreground font-medium">{p.startupCost}</span></div>
                </div>
                <div className="text-sm text-muted-foreground"><span className="text-muted-foreground">费用：</span>{p.fee}</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.pros.map((pro) => (
                    <span key={pro} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-50 text-green-700"><Check className="h-3 w-3" />{pro}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">适合：</span>{p.bestFor}</p>
                <a href={p.registerUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="sm" variant="outline" className="w-full gap-1 text-xs hover:bg-primary hover:text-white">{p.registerLabel} <ExternalLink className="h-3 w-3" /></Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
