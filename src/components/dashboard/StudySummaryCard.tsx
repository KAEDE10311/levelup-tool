import { formatMinutes } from '../../lib/studyStats'

interface StudySummaryCardProps {
  totalMinutes: number // 今日の合計学習時間（分）
  sessionCount: number // 今日の記録件数
}

// 今日の学習時間・記録数をまとめて表示するサマリーカード（メインページ最上部）
export function StudySummaryCard({ totalMinutes, sessionCount }: StudySummaryCardProps) {
  return (
    <div className="flex items-baseline gap-6">
      <div>
        <p className="text-sm text-neutral-500">今日の合計学習時間</p>
        <p className="text-4xl font-semibold tabular-nums text-neutral-900">
          {formatMinutes(totalMinutes)}
        </p>
      </div>
      <div>
        <p className="text-sm text-neutral-500">記録数</p>
        <p className="text-4xl font-semibold tabular-nums text-neutral-900">{sessionCount}</p>
      </div>
    </div>
  )
}
