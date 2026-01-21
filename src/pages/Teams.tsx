import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { TeamBadge } from '@/components/TeamBadge';
import { FormSequence } from '@/components/FormIndicator';

// Demo teams data
const demoTeams = [
  { id: 1, name: 'FC Phoenix', captain: 'John Smith', players: 12, form: ['W', 'W', 'D', 'W', 'W'] as const, position: 1, points: 16 },
  { id: 2, name: 'Thunder FC', captain: 'Mike Johnson', players: 11, form: ['W', 'D', 'W', 'W', 'D'] as const, position: 2, points: 14 },
  { id: 3, name: 'Blue Lions', captain: 'David Brown', players: 13, form: ['L', 'W', 'W', 'D', 'W'] as const, position: 3, points: 13 },
  { id: 4, name: 'United Stars', captain: 'Chris Wilson', players: 10, form: ['W', 'D', 'L', 'W', 'D'] as const, position: 4, points: 11 },
  { id: 5, name: 'Red Dragons', captain: 'Tom Davis', players: 12, form: ['D', 'L', 'W', 'D', 'W'] as const, position: 5, points: 8 },
  { id: 6, name: 'Green Eagles', captain: 'Sam Taylor', players: 11, form: ['L', 'W', 'L', 'D', 'L'] as const, position: 6, points: 7 },
  { id: 7, name: 'Storm United', captain: 'Alex Martin', players: 10, form: ['L', 'L', 'D', 'L', 'W'] as const, position: 7, points: 4 },
  { id: 8, name: 'Golden Hawks', captain: 'Ryan Anderson', players: 12, form: ['D', 'L', 'L', 'D', 'L'] as const, position: 8, points: 2 },
];

export default function Teams() {
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
          <Users className="h-7 w-7 text-primary" />
          {t('teams.title')}
        </h1>
      </motion.div>

      {/* Teams Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {demoTeams.map((team, i) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link to={`/teams/${team.id}`}>
              <div className="stat-card hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                <div className="flex items-start gap-4 mb-4">
                  <TeamBadge name={team.name} size="lg" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg truncate">{team.name}</h3>
                    <p className="text-sm text-muted-foreground">{team.captain}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-primary">#{team.position}</p>
                    <p className="text-xs text-muted-foreground">Position</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold">{team.points}</p>
                    <p className="text-xs text-muted-foreground">Points</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold">{team.players}</p>
                    <p className="text-xs text-muted-foreground">Players</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <FormSequence form={[...team.form]} />
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
