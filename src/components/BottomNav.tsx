import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trophy, Calendar, ListOrdered, Users, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/standings', icon: Trophy, labelKey: 'nav.standings' },
  { path: '/fixtures', icon: Calendar, labelKey: 'nav.fixtures' },
  { path: '/results', icon: ListOrdered, labelKey: 'nav.results' },
  { path: '/teams', icon: Users, labelKey: 'nav.teams' },
  { path: '/stats', icon: BarChart3, labelKey: 'nav.stats' },
];

export function BottomNav() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="bottom-nav md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/' && location.pathname.startsWith(item.path));
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors min-w-[4rem]',
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{t(item.labelKey)}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
