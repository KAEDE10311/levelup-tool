import { mockStudyRecords } from '../data/mockStudyRecords'
import { StudySummaryCard } from '../components/dashboard/StudySummaryCard'
import { SubjectTimeChart } from '../components/dashboard/SubjectTimeChart'
import { TodayStudyList } from '../components/dashboard/TodayStudyList'
import { aggregateBySubject, todayDateString, totalMinutes } from '../lib/studyStats'

// アプリのメインページ。今日の学習状況（合計時間・科目別グラフ・学習内容一覧）を表示する
export function DashboardPage() {
  // 見出し下の日付表示と、今日分の記録の絞り込みに使う基準日
  const today = todayDateString()
  // 全記録のうち今日の日付のものだけを抽出（ページ内の全コンポーネントの入力元）
  const todayRecords = mockStudyRecords.filter((record) => record.date === today)
  // 今日の記録を科目別に集計（学習時間の長い順）。棒グラフの入力データ
  const subjectSummary = aggregateBySubject(todayRecords)
  // 科目名だけを取り出した配列。グラフと一覧で同じ科目に同じ色を対応させるための色インデックス表
  const subjectOrder = subjectSummary.map((s) => s.subject)

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-semibold text-neutral-900">今日の学習状況</h1>
        <p className="mt-1 text-sm text-neutral-500">{today}</p>

        <section className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <StudySummaryCard
            totalMinutes={totalMinutes(todayRecords)}
            sessionCount={todayRecords.length}
          />
        </section>

        <section className="mt-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-neutral-900">科目別の学習時間</h2>
          <div className="mt-4">
            <SubjectTimeChart data={subjectSummary} />
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-neutral-900">今日の学習内容</h2>
          <div className="mt-2">
            <TodayStudyList records={todayRecords} subjectOrder={subjectOrder} />
          </div>
        </section>
      </div>
    </div>
  )
}
