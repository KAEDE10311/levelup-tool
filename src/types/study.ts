// 1回分の学習セッションの記録
export interface StudyRecord {
  id: string
  date: string // YYYY-MM-DD
  subject: string
  minutes: number
  startTime: string // HH:mm
  memo?: string
}

// 科目ごとに学習時間を合計した集計結果（グラフ・色分けの入力に使う）
export interface SubjectSummary {
  subject: string
  minutes: number
}