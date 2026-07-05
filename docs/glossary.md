# 用語集（コード内コメントまとめ）

各ファイルの型・関数・コンポーネント・主要な変数に付けた役割コメントの一覧。
コード側のコメントが正で、このファイルはその写し。差分が出たらコードのコメントを直してから、このファイルも更新する。

## src/types/study.ts

| 識別子 | 役割 |
|---|---|
| `StudyRecord` | 1回分の学習セッションの記録 |
| `SubjectSummary` | 科目ごとに学習時間を合計した集計結果（グラフ・色分けの入力に使う） |

## src/lib/studyStats.ts

| 識別子 | 役割 |
|---|---|
| `aggregateBySubject` | 記録の配列を科目ごとに合計し、学習時間の長い順に並べる（棒グラフ・色対応表の元データ） |
| `totalMinutes` | 記録の配列から合計学習時間（分）を計算する |
| `formatMinutes` | 分数を「1時間30分」のような表示用文字列に変換する |
| `todayDateString` | 今日の日付をYYYY-MM-DD形式で返す（ローカルタイム基準。`toISOString()`だとUTCになりずれるため使わない） |

## src/lib/chartColors.ts

| 識別子 | 役割 |
|---|---|
| `CATEGORICAL_COLORS` | 固定の配色順（dataviz palette validatorで検証済み）。ランクで使い回さず、科目ごとに常に同じスロットへ固定する |
| `colorForIndex` | 科目の並び順インデックスから固定の色を返す（同じ科目には常に同じ色を割り当てるため、グラフと一覧で使う） |

## src/data/mockStudyRecords.ts

| 識別子 | 役割 |
|---|---|
| `today`（内部変数） | ダミーデータの日付を常に「今日」にするための基準値 |
| `mockStudyRecords` | 記録入力機能が実装されるまでのダミーデータ。実装後はZustand storeのデータに置き換える |

## src/components/dashboard/StudySummaryCard.tsx

| 識別子 | 役割 |
|---|---|
| `totalMinutes`（props） | 今日の合計学習時間（分） |
| `sessionCount`（props） | 今日の記録件数 |
| `StudySummaryCard` | 今日の学習時間・記録数をまとめて表示するサマリーカード（メインページ最上部） |

## src/components/dashboard/SubjectTimeChart.tsx

| 識別子 | 役割 |
|---|---|
| `data`（props） | 科目別の集計データ（`aggregateBySubject`の結果） |
| `ChartTooltip` | バーにホバーしたときに科目名と学習時間を表示するツールチップ |
| `SubjectTimeChart` | 科目別の学習時間を横棒グラフで表示するコンポーネント（今日の学習状況カード内で使用） |
| `chartHeight` | 科目数に応じてグラフの高さを可変にする（最低120px、1科目あたり48px） |

## src/components/dashboard/TodayStudyList.tsx

| 識別子 | 役割 |
|---|---|
| `records`（props） | 今日の学習記録一覧 |
| `subjectOrder`（props） | 棒グラフと同じ色を割り当てるための科目名の並び順 |
| `TodayStudyList` | 今日行った学習内容を時系列で一覧表示するコンポーネント |
| `sorted` | 開始時刻の昇順（朝→夜）に並べ替えた記録一覧 |
| `colorIndex` | この記録の科目がグラフの何番目の色スロットに対応するか |

## src/pages/DashboardPage.tsx

| 識別子 | 役割 |
|---|---|
| `DashboardPage` | アプリのメインページ。今日の学習状況（合計時間・科目別グラフ・学習内容一覧）を表示する |
| `today` | 見出し下の日付表示と、今日分の記録の絞り込みに使う基準日 |
| `todayRecords` | 全記録のうち今日の日付のものだけを抽出（ページ内の全コンポーネントの入力元） |
| `subjectSummary` | 今日の記録を科目別に集計（学習時間の長い順）。棒グラフの入力データ |
| `subjectOrder` | 科目名だけを取り出した配列。グラフと一覧で同じ科目に同じ色を対応させるための色インデックス表 |

## src/App.tsx

| 識別子 | 役割 |
|---|---|
| `App` | アプリのルートコンポーネント。現状はメインページ（`DashboardPage`）のみを表示する |
