import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BarChart3, Trophy, Footprints, AlertTriangle, Award, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TeamBadge } from '@/components/TeamBadge';

// Demo stats data
const demoTopScorers = [
  { rank: 1, name: 'Alex Johnson', team: 'FC Phoenix', value: 8 },
  { rank: 2, name: 'Marcus Silva', team: 'Thunder FC', value: 6 },
  { rank: 3, name: 'Ryan Peters', team: 'Blue Lions', value: 5 },
  { rank: 4, name: 'Chris Evans', team: 'United Stars', value: 4 },
  { rank: 5, name: 'Tom Hardy', team: 'Red Dragons', value: 4 },
  { rank: 6, name: 'James Wilson', team: 'FC Phoenix', value: 3 },
  { rank: 7, name: 'Mike Ross', team: 'Thunder FC', value: 3 },
  { rank: 8, name: 'David Chen', team: 'Green Eagles', value: 2 },
];

const demoTopAssisters = [
  { rank: 1, name: 'Jake Thompson', team: 'FC Phoenix', value: 7 },
  { rank: 2, name: 'Sam Williams', team: 'Thunder FC', value: 5 },
  { rank: 3, name: 'Oliver Brown', team: 'Blue Lions', value: 4 },
  { rank: 4, name: 'Lucas Martin', team: 'United Stars', value: 4 },
  { rank: 5, name: 'Noah Davis', team: 'Red Dragons', value: 3 },
];

const demoMostCards = [
  { rank: 1, name: 'Peter Jackson', team: 'Storm United', yellow: 4, red: 1 },
  { rank: 2, name: 'Frank Miller', team: 'Golden Hawks', yellow: 5, red: 0 },
  { rank: 3, name: 'Bob Taylor', team: 'Red Dragons', yellow: 3, red: 1 },
  { rank: 4, name: 'Gary Wilson', team: 'Green Eagles', yellow: 4, red: 0 },
  { rank: 5, name: 'Rick Adams', team: 'Blue Lions', yellow: 3, red: 0 },
];

const demoMVPLeaders = [
  { rank: 1, name: 'Alex Johnson', team: 'FC Phoenix', value: 4 },
  { rank: 2, name: 'Marcus Silva', team: 'Thunder FC', value: 3 },
  { rank: 3, name: 'Jake Thompson', team: 'FC Phoenix', value: 2 },
  { rank: 4, name: 'Ryan Peters', team: 'Blue Lions', value: 2 },
  { rank: 5, name: 'Sam Williams', team: 'Thunder FC', value: 1 },
];

const demoCleanSheets = [
  { rank: 1, name: 'Manuel Torres', team: 'FC Phoenix', value: 4 },
  { rank: 2, name: 'David De Gea', team: 'Thunder FC', value: 3 },
  { rank: 3, name: 'Hugo Lloris', team: 'Blue Lions', value: 2 },
  { rank: 4, name: 'Ederson Moraes', team: 'United Stars', value: 2 },
  { rank: 5, name: 'Alisson Becker', team: 'Red Dragons', value: 1 },
];

export default function Stats() {
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
          <BarChart3 className="h-7 w-7 text-primary" />
          {t('stats.title')}
        </h1>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="goals" className="w-full">
        <TabsList className="mb-6 flex-wrap h-auto gap-2">
          <TabsTrigger value="goals" className="gap-2">
            <Trophy className="h-4 w-4" />
            <span className="hidden sm:inline">{t('stats.goals')}</span>
          </TabsTrigger>
          <TabsTrigger value="assists" className="gap-2">
            <Footprints className="h-4 w-4" />
            <span className="hidden sm:inline">{t('stats.assists')}</span>
          </TabsTrigger>
          <TabsTrigger value="cards" className="gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="hidden sm:inline">{t('stats.yellowCards')}</span>
          </TabsTrigger>
          <TabsTrigger value="mvp" className="gap-2">
            <Award className="h-4 w-4" />
            <span className="hidden sm:inline">{t('stats.mvpAwards')}</span>
          </TabsTrigger>
          <TabsTrigger value="cleansheets" className="gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">{t('stats.cleanSheets')}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="goals">
          <StatsTable 
            title={t('stats.topScorers')} 
            data={demoTopScorers} 
            valueLabel={t('stats.goals')} 
            icon={Trophy}
          />
        </TabsContent>

        <TabsContent value="assists">
          <StatsTable 
            title={t('stats.topAssisters')} 
            data={demoTopAssisters} 
            valueLabel={t('stats.assists')} 
            icon={Footprints}
          />
        </TabsContent>

        <TabsContent value="cards">
          <CardsTable title={t('stats.mostCards')} data={demoMostCards} />
        </TabsContent>

        <TabsContent value="mvp">
          <StatsTable 
            title={t('stats.mvpLeaders')} 
            data={demoMVPLeaders} 
            valueLabel={t('stats.mvpAwards')} 
            icon={Award}
          />
        </TabsContent>

        <TabsContent value="cleansheets">
          <StatsTable 
            title={t('stats.cleanSheetLeaders')} 
            data={demoCleanSheets} 
            valueLabel={t('stats.cleanSheets')} 
            icon={Shield}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface StatsTableProps {
  title: string;
  data: { rank: number; name: string; team: string; value: number }[];
  valueLabel: string;
  icon: React.ElementType;
}

function StatsTable({ title, data, valueLabel, icon: Icon }: StatsTableProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-card rounded-2xl border border-border overflow-hidden"
    >
      <div className="p-4 border-b border-border flex items-center gap-3">
        <Icon className="h-5 w-5 text-primary" />
        <h2 className="font-display font-bold text-lg">{title}</h2>
      </div>
      
      <div className="divide-y divide-border">
        {data.map((player, i) => (
          <motion.div
            key={player.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors"
          >
            <div className={`position-badge ${
              player.rank === 1 ? 'position-badge-1' : 
              player.rank <= 3 ? 'position-badge-2' : 
              'bg-muted text-muted-foreground'
            }`}>
              {player.rank}
            </div>
            <TeamBadge name={player.team} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{player.name}</p>
              <p className="text-sm text-muted-foreground truncate">{player.team}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-display font-bold text-primary">{player.value}</p>
              <p className="text-xs text-muted-foreground">{valueLabel}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

interface CardsTableProps {
  title: string;
  data: { rank: number; name: string; team: string; yellow: number; red: number }[];
}

function CardsTable({ title, data }: CardsTableProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-card rounded-2xl border border-border overflow-hidden"
    >
      <div className="p-4 border-b border-border flex items-center gap-3">
        <AlertTriangle className="h-5 w-5 text-primary" />
        <h2 className="font-display font-bold text-lg">{title}</h2>
      </div>
      
      <div className="divide-y divide-border">
        {data.map((player, i) => (
          <motion.div
            key={player.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors"
          >
            <div className={`position-badge ${
              player.rank === 1 ? 'position-badge-1' : 
              player.rank <= 3 ? 'position-badge-2' : 
              'bg-muted text-muted-foreground'
            }`}>
              {player.rank}
            </div>
            <TeamBadge name={player.team} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{player.name}</p>
              <p className="text-sm text-muted-foreground truncate">{player.team}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="w-6 h-8 bg-warning rounded-sm flex items-center justify-center font-bold text-warning-foreground">
                  {player.yellow}
                </div>
              </div>
              <div className="text-center">
                <div className="w-6 h-8 bg-destructive rounded-sm flex items-center justify-center font-bold text-destructive-foreground">
                  {player.red}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
