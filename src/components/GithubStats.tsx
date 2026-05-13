import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'motion/react';
import { Github, Trophy, Activity, GitCommit } from 'lucide-react';
import { Badge } from './ui';

export function GithubStats() {
  const username = "alamayub";

  const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div id="github-activity" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-sm"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <Github size={20} className="text-indigo-500" />
              </div>
              <h2 className="text-2xl font-black text-neutral-900 dark:text-white uppercase tracking-tight">
                Open Source Activity
              </h2>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 font-medium">
              Real-time contribution data from my GitHub profile.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <Trophy size={16} className="text-amber-500" />
              <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">700+ Contribs</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <Activity size={16} className="text-emerald-500" />
              <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">Daily Committer</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] flex justify-center">
            <GitHubCalendar 
              username={username}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={theme}
              showWeekdayLabels
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 border-t border-neutral-100 dark:border-neutral-800 pt-10">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-500/10 rounded-2xl">
              <GitCommit size={24} className="text-indigo-500" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Consistency</p>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">Built multiple open-source ecosystems</h4>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl">
              <Badge variant="indigo" className="p-1.5"><Activity size={24} /></Badge>
            </div>
            <div className="ml-[-12px]"> {/* Adjust for Badge sizing */}
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Impact</p>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">Scaling distributed architectures</h4>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-2xl">
              <Trophy size={24} className="text-emerald-500" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Recognition</p>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">Top contributor across media SDKs</h4>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
