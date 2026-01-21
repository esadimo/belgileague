import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trophy, Calendar, ArrowRight, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MatchCard } from '@/components/MatchCard';

// Demo data for the landing page
const demoUpcomingMatches = [
  { id: 1, homeTeam: 'FC Phoenix', awayTeam: 'United Stars', status: 'confirmed' as const, scheduledDate: new Date(Date.now() + 86400000 * 2), location: 'Main Stadium', roundNumber: 5 },
  { id: 2, homeTeam: 'Blue Lions', awayTeam: 'Red Dragons', status: 'proposed' as const, roundNumber: 5 },
];

const demoRecentResults = [
  { id: 3, homeTeam: 'Thunder FC', awayTeam: 'Storm United', homeScore: 3, awayScore: 1, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000), roundNumber: 4 },
  { id: 4, homeTeam: 'Green Eagles', awayTeam: 'Golden Hawks', homeScore: 2, awayScore: 2, status: 'confirmed_result' as const, scheduledDate: new Date(Date.now() - 86400000 * 2), roundNumber: 4 },
];

const demoTopScorers = [
  { rank: 1, name: 'Alex Johnson', team: 'FC Phoenix', goals: 8 },
  { rank: 2, name: 'Marcus Silva', team: 'Thunder FC', goals: 6 },
  { rank: 3, name: 'Ryan Peters', team: 'Blue Lions', goals: 5 },
];

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur mb-6">
              <Trophy className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t('home.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/standings">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                  <Trophy className="h-4 w-4" />
                  {t('home.viewStandings')}
                </Button>
              </Link>
              <Link to="/fixtures">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-white/30 text-white hover:bg-white/10">
                  <Calendar className="h-4 w-4" />
                  {t('home.viewFixtures')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upcoming Matches */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {t('home.upcomingMatches')}
                </h2>
                <Link to="/fixtures" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {demoUpcomingMatches.map((match, i) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <MatchCard {...match} />
                  </motion.div>
                ))}
              </div>

              {/* Recent Results */}
              <div className="mt-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display font-bold flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    {t('home.recentResults')}
                  </h2>
                  <Link to="/results" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
                    View all <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {demoRecentResults.map((match, i) => (
                    <motion.div
                      key={match.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    >
                      <MatchCard {...match} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Top Scorers */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  {t('home.topScorers')}
                </h2>
                <Link to="/stats" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="stat-card">
                <div className="space-y-4">
                  {demoTopScorers.map((scorer, i) => (
                    <motion.div
                      key={scorer.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`position-badge ${i === 0 ? 'position-badge-1' : i < 3 ? 'position-badge-2' : 'bg-muted text-muted-foreground'}`}>
                        {scorer.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{scorer.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{scorer.team}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-display font-bold text-primary">{scorer.goals}</p>
                        <p className="text-xs text-muted-foreground">{t('stats.goals')}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 space-y-3">
                <Link to="/teams" className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">{t('nav.teams')}</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground" />
                </Link>
                <Link to="/standings" className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="font-medium">{t('nav.standings')}</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
