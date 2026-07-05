import type { StudyRecord } from '../types/study'
import { todayDateString } from '../lib/studyStats'

// ダミーデータの日付を常に「今日」にするための基準値
const today = todayDateString()

// 記録入力機能が実装されるまでのダミーデータ。実装後はZustand storeのデータに置き換える
export const mockStudyRecords: StudyRecord[] = [
  {
    id: '1',
    date: today,
    subject: '英語',
    minutes: 45,
    startTime: '07:30',
    memo: '単語帳 Unit 12〜15',
  },
  {
    id: '2',
    date: today,
    subject: '数学',
    minutes: 60,
    startTime: '09:00',
    memo: '二次関数の演習問題',
  },
  {
    id: '3',
    date: today,
    subject: 'プログラミング',
    minutes: 90,
    startTime: '13:00',
    memo: 'React Hooksの復習',
  },
  {
    id: '4',
    date: today,
    subject: '英語',
    minutes: 30,
    startTime: '20:00',
    memo: 'リスニング教材',
  },
]
