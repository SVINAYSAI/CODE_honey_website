import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const chartData = {
  nectar: [
    { x: 0, y: 20 },
    { x: 0.5, y: 45 },
    { x: 1, y: 70 },
    { x: 2, y: 95 },
    { x: 3, y: 85 },
    { x: 4, y: 70 },
    { x: 5, y: 55 },
    { x: 6, y: 45 },
  ],
  regular: [
    { x: 0, y: 20 },
    { x: 0.5, y: 95 },
    { x: 1, y: 80 },
    { x: 1.5, y: 60 },
    { x: 2, y: 40 },
    { x: 2.5, y: 20 },
    { x: 3, y: 10 },
    { x: 4, y: 15 },
    { x: 5, y: 20 },
    { x: 6, y: 25 },
  ],
};

const stats = [
  { value: '150mg', label: 'Dual-Source Caffeine' },
  { value: '0', label: 'Artificial Ingredients' },
  { value: '4-6hr', label: 'Sustained Energy' },
];

export const EnergyChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setDrawn(true), 300);
    }
  }, [isInView]);

  const width = 600;
  const height = 300;
  const padding = { top: 20, right: 30, bottom: 50, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const scaleX = (x) => padding.left + (x / 6) * chartWidth;
  const scaleY = (y) => padding.top + chartHeight - (y / 100) * chartHeight;

  const createPath = (data) => {
    return data.map((point, i) => {
      const x = scaleX(point.x);
      const y = scaleY(point.y);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  const nectarPath = createPath(chartData.nectar);
  const regularPath = createPath(chartData.regular);

  return (
    <section className="relative py-20 md:py-32 bg-dark-mid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-honey font-accent tracking-widest text-sm mb-4 block">
            SUSTAINED ENERGY VS. THE CRASH
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-4">
            Smooth Energy. No Crash.
          </h2>
          <p className="text-text-dim text-lg max-w-2xl mx-auto">
            Nectar uses a dual-source caffeine system to support a smoother,
            longer, more controlled energy curve.
          </p>
        </ScrollReveal>

        {/* Chart */}
        <ScrollReveal delay={0.2}>
          <div ref={ref} className="relative max-w-3xl mx-auto mb-12">
            <div className="bg-dark-card rounded-2xl p-6 md:p-8 border border-honey/10">
              <svg 
                viewBox={`0 0 ${width} ${height}`} 
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((tick) => (
                  <line
                    key={tick}
                    x1={padding.left}
                    y1={scaleY(tick)}
                    x2={width - padding.right}
                    y2={scaleY(tick)}
                    stroke="rgba(232,160,32,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Y-Axis Labels */}
                <text x={padding.left - 10} y={scaleY(100)} textAnchor="end" fill="#9A8E78" fontSize="12">High</text>
                <text x={padding.left - 10} y={scaleY(50)} textAnchor="end" fill="#9A8E78" fontSize="12">Med</text>
                <text x={padding.left - 10} y={scaleY(0)} textAnchor="end" fill="#9A8E78" fontSize="12">Low</text>

                {/* X-Axis Labels */}
                {[0, 1, 2, 3, 4, 5, 6].map((hour) => (
                  <text
                    key={hour}
                    x={scaleX(hour)}
                    y={height - 15}
                    textAnchor="middle"
                    fill="#9A8E78"
                    fontSize="12"
                  >
                    {hour}hr
                  </text>
                ))}

                {/* Regular Pre-Workout Line */}
                <motion.path
                  d={regularPath}
                  fill="none"
                  stroke="#8B4513"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: drawn ? 1 : 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />

                {/* CODE NECTAR Line */}
                <motion.path
                  d={nectarPath}
                  fill="none"
                  stroke="#E8A020"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: drawn ? 1 : 0 }}
                  transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
                />

                {/* Data Points for Nectar */}
                {drawn && chartData.nectar.map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={scaleX(point.x)}
                    cy={scaleY(point.y)}
                    r="5"
                    fill="#E8A020"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                ))}
              </svg>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-honey rounded-full" />
                  <span className="text-text-warm text-sm font-medium">CODE NECTAR</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-[#8B4513] rounded-full" />
                  <span className="text-text-dim text-sm">Regular Pre-Workout</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-honey mb-1">
                  {stat.value}
                </div>
                <div className="text-text-dim text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
