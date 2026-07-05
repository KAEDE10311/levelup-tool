import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { SubjectSummary } from '../../types/study'
import { colorForIndex } from '../../lib/chartColors'
import { formatMinutes } from '../../lib/studyStats'

interface SubjectTimeChartProps {
  data: SubjectSummary[] // 科目別の集計データ（aggregateBySubjectの結果）
}

// バーにホバーしたときに科目名と学習時間を表示するツールチップ
function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: { payload: SubjectSummary }[]
}) {
  if (!active || !payload?.length) return null
  const { subject, minutes } = payload[0].payload
  return (
    <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm shadow-md">
      <p className="font-medium text-neutral-900">{subject}</p>
      <p className="text-neutral-600">{formatMinutes(minutes)}</p>
    </div>
  )
}

// 科目別の学習時間を横棒グラフで表示するコンポーネント（今日の学習状況カード内で使用）
export function SubjectTimeChart({ data }: SubjectTimeChartProps) {
  if (data.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-neutral-500">
        今日の学習記録はまだありません
      </p>
    )
  }

  // 科目数に応じてグラフの高さを可変にする（最低120px、1科目あたり48px）
  const chartHeight = Math.max(data.length * 48, 120)

  return (
    <div style={{ width: '100%', height: chartHeight }}>
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 48, left: 4, bottom: 4 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="subject"
            width={88}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#0b0b0b', fontSize: 13 }}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: '#f9f9f7' }} />
          <Bar dataKey="minutes" radius={[0, 4, 4, 0]} maxBarSize={28}>
            {data.map((entry, index) => (
              <Cell key={entry.subject} fill={colorForIndex(index)} />
            ))}
            <LabelList
              dataKey="minutes"
              position="right"
              formatter={(value) => formatMinutes(Number(value))}
              style={{ fill: '#0b0b0b', fontSize: 13 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
