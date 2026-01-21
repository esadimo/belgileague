import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { FormSequence } from '@/components/FormIndicator';
import { TeamBadge } from '@/components/TeamBadge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Demo standings data
const demoStandings = [
  { position: 1, team: 'FC Phoenix', played: 6, won: 5, drawn: 1, lost: 0, gf: 18, ga: 5, gd: 13, points: 16, form: ['W', 'W', 'D', 'W', 'W'] as const },
  { position: 2, team: 'Thunder FC', played: 6, won: 4, drawn: 2, lost: 0, gf: 14, ga: 6, gd: 8, points: 14, form: ['W', 'D', 'W', 'W', 'D'] as const },
  { position: 3, team: 'Blue Lions', played: 6, won: 4, drawn: 1, lost: 1, gf: 12, ga: 7, gd: 5, points: 13, form: ['L', 'W', 'W', 'D', 'W'] as const },
  { position: 4, team: 'United Stars', played: 6, won: 3, drawn: 2, lost: 1, gf: 11, ga: 8, gd: 3, points: 11, form: ['W', 'D', 'L', 'W', 'D'] as const },
  { position: 5, team: 'Red Dragons', played: 6, won: 2, drawn: 2, lost: 2, gf: 9, ga: 9, gd: 0, points: 8, form: ['D', 'L', 'W', 'D', 'W'] as const },
  { position: 6, team: 'Green Eagles', played: 6, won: 2, drawn: 1, lost: 3, gf: 8, ga: 11, gd: -3, points: 7, form: ['L', 'W', 'L', 'D', 'L'] as const },
  { position: 7, team: 'Storm United', played: 6, won: 1, drawn: 1, lost: 4, gf: 6, ga: 13, gd: -7, points: 4, form: ['L', 'L', 'D', 'L', 'W'] as const },
  { position: 8, team: 'Golden Hawks', played: 6, won: 0, drawn: 2, lost: 4, gf: 4, ga: 15, gd: -11, points: 2, form: ['D', 'L', 'L', 'D', 'L'] as const },
];

export default function Standings() {
  const { t } = useTranslation();

  return (
    <div className="container py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-display font-bold flex items-center gap-3">
          <Trophy className="h-7 w-7 text-primary" />
          {t('standings.title')}
        </h1>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="overall" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overall">{t('standings.overall')}</TabsTrigger>
          <TabsTrigger value="home">{t('standings.home')}</TabsTrigger>
          <TabsTrigger value="away">{t('standings.away')}</TabsTrigger>
        </TabsList>

        <TabsContent value="overall">
          <StandingsTable standings={demoStandings} />
        </TabsContent>
        <TabsContent value="home">
          <StandingsTable standings={demoStandings} />
        </TabsContent>
        <TabsContent value="away">
          <StandingsTable standings={demoStandings} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface StandingsTableProps {
  standings: typeof demoStandings;
}

function StandingsTable({ standings }: StandingsTableProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-card rounded-2xl border border-border overflow-hidden"
    >
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left py-4 px-4 font-semibold text-sm text-muted-foreground w-12">{t('standings.position')}</th>
              <th className="text-left py-4 px-4 font-semibold text-sm text-muted-foreground">{t('standings.team')}</th>
              <th className="text-center py-4 px-2 font-semibold text-sm text-muted-foreground w-12">{t('standings.played')}</th>
              <th className="text-center py-4 px-2 font-semibold text-sm text-muted-foreground w-12">{t('standings.won')}</th>
              <th className="text-center py-4 px-2 font-semibold text-sm text-muted-foreground w-12">{t('standings.drawn')}</th>
              <th className="text-center py-4 px-2 font-semibold text-sm text-muted-foreground w-12">{t('standings.lost')}</th>
              <th className="text-center py-4 px-2 font-semibold text-sm text-muted-foreground w-12">{t('standings.goalsFor')}</th>
              <th className="text-center py-4 px-2 font-semibold text-sm text-muted-foreground w-12">{t('standings.goalsAgainst')}</th>
              <th className="text-center py-4 px-2 font-semibold text-sm text-muted-foreground w-12">{t('standings.goalDifference')}</th>
              <th className="text-center py-4 px-4 font-semibold text-sm text-muted-foreground w-16">{t('standings.points')}</th>
              <th className="text-center py-4 px-4 font-semibold text-sm text-muted-foreground">{t('standings.form')}</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row, i) => (
              <motion.tr
                key={row.team}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
              >
                <td className="py-4 px-4">
                  <div className={cn(
                    'position-badge',
                    row.position === 1 && 'position-badge-1',
                    (row.position === 2 || row.position === 3) && 'position-badge-2',
                    row.position > 3 && 'bg-muted text-muted-foreground'
                  )}>
                    {row.position}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <TeamBadge name={row.team} size="sm" />
                    <span className="font-semibold">{row.team}</span>
                  </div>
                </td>
                <td className="text-center py-4 px-2">{row.played}</td>
                <td className="text-center py-4 px-2 text-success font-medium">{row.won}</td>
                <td className="text-center py-4 px-2 text-warning font-medium">{row.drawn}</td>
                <td className="text-center py-4 px-2 text-destructive font-medium">{row.lost}</td>
                <td className="text-center py-4 px-2">{row.gf}</td>
                <td className="text-center py-4 px-2">{row.ga}</td>
                <td className="text-center py-4 px-2">
                  <span className={cn(
                    'font-medium',
                    row.gd > 0 && 'text-success',
                    row.gd < 0 && 'text-destructive'
                  )}>
                    {row.gd > 0 ? '+' : ''}{row.gd}
                  </span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="font-display font-bold text-lg">{row.points}</span>
                </td>
                <td className="py-4 px-4">
                  <FormSequence form={[...row.form]} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-border">
        {standings.map((row, i) => (
          <motion.div
            key={row.team}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-4"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className={cn(
                'position-badge',
                row.position === 1 && 'position-badge-1',
                (row.position === 2 || row.position === 3) && 'position-badge-2',
                row.position > 3 && 'bg-muted text-muted-foreground'
              )}>
                {row.position}
              </div>
              <div className="flex items-center gap-3 flex-1">
                <TeamBadge name={row.team} size="sm" />
                <span className="font-semibold">{row.team}</span>
              </div>
              <div className="text-right">
                <span className="font-display font-bold text-2xl">{row.points}</span>
                <span className="text-xs text-muted-foreground ml-1">{t('standings.points')}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{row.played} {t('standings.played')}</span>
                <span className="text-success">{row.won}W</span>
                <span className="text-warning">{row.drawn}D</span>
                <span className="text-destructive">{row.lost}L</span>
              </div>
              <FormSequence form={[...row.form]} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
