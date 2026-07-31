import { useState, useEffect } from 'react';
import { Menu, X, Anchor, Wifi, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: '学习路径', href: '#roadmap' },
  { label: '入门步骤', href: '#steps' },
  { label: '平台对比', href: '#platforms' },
  { label: '常见问题', href: '#faq' },
  { label: '工具资源', href: '#tools' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Anchor className="h-4 w-4 text-white" />
            </div>
            <span className={`text-lg font-bold transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              跨境电商新手村
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/network"
              className="ml-1 px-3 py-2 text-sm font-medium text-accent hover:text-accent/80 rounded-md transition-colors flex items-center gap-1.5"
            >
              <Wifi className="h-3.5 w-3.5" />
              网络配置
            </a>
            <a
              href="/phone"
              className="ml-1 px-3 py-2 text-sm font-medium text-accent hover:text-accent/80 rounded-md transition-colors flex items-center gap-1.5"
            >
              <Smartphone className="h-3.5 w-3.5" />
              手机号
            </a>
            <Button size="sm" className="ml-4 gradient-accent text-white border-0 hover:opacity-90">
              开始入门
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/network"
              className="block px-3 py-2 text-sm font-medium text-accent hover:text-accent/80 hover:bg-accent/5 rounded-md flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Wifi className="h-4 w-4" />
              网络配置指南
            </a>
            <a
              href="/phone"
              className="block px-3 py-2 text-sm font-medium text-accent hover:text-accent/80 hover:bg-accent/5 rounded-md flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Smartphone className="h-4 w-4" />
              国外手机号指南
            </a>
            <Button size="sm" className="w-full mt-2 gradient-accent text-white border-0">
              开始入门
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
