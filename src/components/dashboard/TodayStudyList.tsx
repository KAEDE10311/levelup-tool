import type { StudyRecord } from '../../types/study'
import { colorForIndex } from '../../lib/chartColors'
import { formatMinutes } from '../../lib/studyStats'

interface TodayStudyListProps {
  records: StudyRecord[] // 今日の学習記録一覧
  subjectOrder: string[] // 棒グラフと同じ色を割り当てるための科目名の並び順
}

// 今日行った学習内容を時系列で一覧表示するコンポーネント
export function TodayStudyList({ records, subjectOrder }: TodayStudyListProps) {
  if (records.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-neutral-500">
        今日の学習記録はまだありません
      </p>
    )
  }

  // 開始時刻の昇順（朝→夜）に並べ替える
  const sorted = [...records].sort((a, b) => a.startTime.localeCompare(b.startTime))

  return (
    <ul className="divide-y divide-neutral-200">
      {sorted.map((record) => {
        // この記録の科目がグラフの何番目の色スロットに対応するか
        const colorIndex = subjectOrder.indexOf(record.subject)
        return (
          <li key={record.id} className="flex items-start gap-3 py-3">
            <span
              className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: colorForIndex(colorIndex) }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-medium text-neutral-900">{record.subject}</p>
                <p className="shrink-0 text-sm text-neutral-500">
                  {formatMinutes(record.minutes)}
                </p>
              </div>
              {record.memo && (
                <p className="truncate text-sm text-neutral-600">{record.memo}</p>
              )}
            </div>
            <span className="shrink-0 pt-0.5 text-xs text-neutral-400">
              {record.startTime}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
