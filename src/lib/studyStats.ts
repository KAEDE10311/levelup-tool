import type { StudyRecord, SubjectSummary } from '../types/study'

// 記録の配列を科目ごとに合計し、学習時間の長い順に並べる（棒グラフ・色対応表の元データ）
export function aggregateBySubject(records: StudyRecord[]): SubjectSummary[] {
  const totals = new Map<string, number>()
  for (const record of records) {
    totals.set(record.subject, (totals.get(record.subject) ?? 0) + record.minutes)
  }
  return Array.from(totals, ([subject, minutes]) => ({ subject, minutes })).sort(
    (a, b) => b.minutes - a.minutes,
  )
}

// 記録の配列から合計学習時間（分）を計算する
export function totalMinutes(records: StudyRecord[]): number {
  return records.reduce((sum, record) => sum + record.minutes, 0)
}

// 分数を「1時間30分」のような表示用文字列に変換する
export function formatMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hours === 0) return `${mins}分`
  if (mins === 0) return `${hours}時間`
  return `${hours}時間${mins}分`
}

// 今日の日付をYYYY-MM-DD形式で返す（ローカルタイム基準。toISOString()だとUTCになりずれるため使わない）
export function todayDateString(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}