import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { MatchCard } from '@/components/MatchCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Demo fixtures data
const demoFixtures = {
  round5: [
    { id: 1, homeTeam: 'FC Phoenix', awayTeam: 'United Stars', status: 'confirmed' as const, scheduledDate: new Date(Date.now() + 86400000 * 2), location: 'Main Stadium', roundNumber: 5 },
    { id: 2, homeTeam: 'Blue Lions', awayTeam: 'Red Dragons', status: 'proposed' as const, roundNumber: 5 },
    { id: 3, homeTeam: 'Thunder FC', awayTeam: 'Golden Hawks', status: 'unscheduled' as const, roundNumber: 5 },
    { id: 4, homeTeam: 'Green Eagles', awayTeam: 'Storm United', status: 'confirmed' as const, scheduledDate: new Date(Date.now() + 86400000 * 3), location: 'City Arena', roundNumber: 5 },
  ],
  round6: [
    { id: 5, homeTeam: 'United Stars', awayTeam: 'Thunder FC', status: 'unscheduled' as const, roundNumber: 6 },
    { id: 6, homeTeam: 'Red Dragons', awayTeam: 'FC Phoenix', status: 'unscheduled' as const, roundNumber: 6 },
    { id: 7, homeTeam: 'Golden Hawks', awayTeam: 'Green Eagles', status: 'unscheduled' as const, roundNumber: 6 },
    { id: 8, homeTeam: 'Storm United', awayTeam: 'Blue Lions', status: 'unscheduled' as const, roundNumber: 6 },
  ],
  round7: [
    { id: 9, homeTeam: 'FC Phoenix', awayTeam: 'Thunder FC', status: 'unscheduled' as const, roundNumber: 7 },
    { id: 10, homeTeam: 'Blue Lions', awayTeam: 'United Stars', status: 'unscheduled' as const, roundNumber: 7 },
    { id: 11, homeTeam: 'Green Eagles', awayTeam: 'Red Dragons', status: 'unscheduled' as const, roundNumber: 7 },
    { id: 12, homeTeam: 'Storm United', awayTeam: 'Golden Hawks', status: 'unscheduled' as const, roundNumber: 7 },
  ],
};

export default function Fixtures() {
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
          <Calendar className="h-7 w-7 text-primary" />
          {t('fixtures.title')}
        </h1>
      </motion.div>

      {/* Tabs by Round */}
      <Tabs defaultValue="round5" className="w-full">
        <TabsList className="mb-6 flex-wrap h-auto gap-2">
          <TabsTrigger value="all">{t('fixtures.allRounds')}</TabsTrigger>
          <TabsTrigger value="round5">{t('fixtures.round', { number: 5 })}</TabsTrigger>
          <TabsTrigger value="round6">{t('fixtures.round', { number: 6 })}</TabsTrigger>
          <TabsTrigger value="round7">{t('fixtures.round', { number: 7 })}</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-8">
            {Object.entries(demoFixtures).map(([round, matches]) => (
              <div key={round}>
                <h2 className="text-lg font-semibold mb-4">{t('fixtures.round', { number: round.replace('round', '') })}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {matches.map((match, i) => (
                    <motion.div
                      key={match.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <MatchCard {...match} />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="round5">
          <div className="grid gap-4 md:grid-cols-2">
            {demoFixtures.round5.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <MatchCard {...match} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="round6">
          <div className="grid gap-4 md:grid-cols-2">
            {demoFixtures.round6.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <MatchCard {...match} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="round7">
          <div className="grid gap-4 md:grid-cols-2">
            {demoFixtures.round7.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <MatchCard {...match} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
