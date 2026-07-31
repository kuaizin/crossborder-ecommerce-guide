import { Anchor, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = [
  {
    title: '学习内容',
    links: [
      { label: '7步入门路径', href: '#roadmap' },
      { label: '平台对比', href: '#platforms' },
      { label: '常见问题', href: '#faq' },
      { label: '工具资源', href: '#tools' },
    ],
  },
  {
    title: '主流平台',
    links: [
      { label: 'Amazon', href: '#platforms' },
      { label: 'Shopee', href: '#platforms' },
      { label: '速卖通', href: '#platforms' },
      { label: 'TikTok Shop', href: '#platforms' },
    ],
  },
  {
    title: '新手必读',
    links: [
      { label: '选品指南', href: '#step-3' },
      { label: '开店准备', href: '#step-4' },
      { label: 'Listing优化', href: '#step-5' },
      { label: '物流方案', href: '#step-6' },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Anchor className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">跨境电商新手村</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-4">
              专为跨境电商新手打造的一站式入门指南。从平台选择到第一笔订单，
              每一步都有清晰的操作方法。
            </p>
            <p className="text-white/50 text-xs">
              本网站内容仅供参考，具体操作请以各平台官方规则为准。
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-accent fill-accent" /> for 跨境电商新手
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4 mr-1" />
            回到顶部
          </Button>
        </div>
      </div>
    </footer>
  );
}
