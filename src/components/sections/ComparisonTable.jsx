import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { comparisonData } from '../../data/comparison';
import { ScrollReveal } from '../ui/ScrollReveal';

const stats = [
  { value: '150mg', label: 'Dual-Source Caffeine' },
  { value: '0', label: 'Artificial Ingredients' },
  { value: '4-6hrs', label: 'Sustained Energy' },
  { value: '100%', label: 'Raw Honey' },
];

export const ComparisonTable = () => {
  return (
    <section className="relative py-20 md:py-32 bg-deep">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-4">
            The Difference Is Clear
          </h2>
          <p className="text-text-dim text-lg max-w-xl mx-auto">
            See how CODE NECTAR stacks up against conventional pre-workouts.
          </p>
        </ScrollReveal>

        {/* Table */}
        <ScrollReveal delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-text-dim font-body text-sm">
                    {comparisonData.headers[0]}
                  </th>
                  <th className="text-center py-4 px-4 bg-honey/20 rounded-t-lg">
                    <span className="text-honey font-display text-lg font-semibold">
                      {comparisonData.headers[1]}
                    </span>
                  </th>
                  <th className="text-center py-4 px-4 bg-dark-mid rounded-t-lg">
                    <span className="text-red-400 font-display text-lg font-semibold">
                      {comparisonData.headers[2]}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-honey/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4 px-4 text-text-warm font-medium">
                      {row[0]}
                    </td>
                    <td className="py-4 px-4 text-center bg-honey/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-honey flex-shrink-0" />
                        <span className="text-text-warm text-sm">{row[1]}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center bg-dark-mid/50">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-text-dim text-sm">{row[2]}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="bg-dark-card rounded-2xl p-6 md:p-8 border border-honey/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-honey mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-dim text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
