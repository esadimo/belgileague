import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trophy, Calendar, ListOrdered, Users, BarChart3, Settings, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navItems = [
  { path: '/standings', icon: Trophy, labelKey: 'nav.standings' },
  { path: '/fixtures', icon: Calendar, labelKey: 'nav.fixtures' },
  { path: '/results', icon: ListOrdered, labelKey: 'nav.results' },
  { path: '/teams', icon: Users, labelKey: 'nav.teams' },
  { path: '/stats', icon: BarChart3, labelKey: 'nav.stats' },
];

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
            <Trophy className="h-5 w-5" />
          </div>
          <span className="font-display font-bold text-lg hidden sm:inline">
            {t('home.title')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== '/' && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
              >
                <Icon className="h-4 w-4" />
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          
          <Link to="/login" className="hidden md:block">
            <Button variant="outline" size="sm">
              {t('nav.login')}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      {t(item.labelKey)}
                    </Link>
                  );
                })}
                <hr className="my-2" />
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors"
                >
                  <Settings className="h-5 w-5" />
                  {t('nav.login')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
