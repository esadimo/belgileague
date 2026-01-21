import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ListOrdered } from 'lucide-react';
import { MatchCard } from '@/components/MatchCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Demo results data
const demoResults = {
  round4: [
    { id: 1, homeTeam: 'Thunder FC', awayTeam: 'Storm United', homeScore: 3, awayScore: 1, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000), location: 'Main Stadium', roundNumber: 4 },
    { id: 2, homeTeam: 'Green Eagles', awayTeam: 'Golden Hawks', homeScore: 2, awayScore: 2, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000 * 2), location: 'City Arena', roundNumber: 4 },
    { id: 3, homeTeam: 'FC Phoenix', awayTeam: 'Blue Lions', homeScore: 2, awayScore: 1, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000 * 3), location: 'Main Stadium', roundNumber: 4 },
    { id: 4, homeTeam: 'United Stars', awayTeam: 'Red Dragons', homeScore: 1, awayScore: 1, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000 * 4), location: 'Sports Park', roundNumber: 4 },
  ],
  round3: [
    { id: 5, homeTeam: 'Blue Lions', awayTeam: 'Thunder FC', homeScore: 0, awayScore: 2, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000 * 7), location: 'City Arena', roundNumber: 3 },
    { id: 6, homeTeam: 'Red Dragons', awayTeam: 'Green Eagles', homeScore: 3, awayScore: 0, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000 * 8), location: 'Main Stadium', roundNumber: 3 },
    { id: 7, homeTeam: 'Storm United', awayTeam: 'FC Phoenix', homeScore: 1, awayScore: 4, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000 * 8), location: 'Sports Park', roundNumber: 3 },
    { id: 8, homeTeam: 'Golden Hawks', awayTeam: 'United Stars', homeScore: 0, awayScore: 2, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000 * 9), location: 'City Arena', roundNumber: 3 },
  ],
};

export default function Results() {
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
          <ListOrdered className="h-7 w-7 text-primary" />
          {t('results.title')}
        </h1>
      </motion.div>

      {/* Tabs by Round */}
      <Tabs defaultValue="round4" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">{t('fixtures.allRounds')}</TabsTrigger>
          <TabsTrigger value="round4">{t('fixtures.round', { number: 4 })}</TabsTrigger>
          <TabsTrigger value="round3">{t('fixtures.round', { number: 3 })}</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-8">
            {Object.entries(demoResults).map(([round, matches]) => (
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

        <TabsContent value="round4">
          <div className="grid gap-4 md:grid-cols-2">
            {demoResults.round4.map((match, i) => (
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

        <TabsContent value="round3">
          <div className="grid gap-4 md:grid-cols-2">
            {demoResults.round3.map((match, i) => (
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
