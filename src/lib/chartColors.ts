// Fixed categorical order — validated with the dataviz palette validator.
// Never cycle or reassign by rank; a subject always maps to the same slot.
export const CATEGORICAL_COLORS = [
  '#2a78d6', // blue
  '#1baf7a', // aqua
  '#eda100', // yellow
  '#008300', // green
  '#4a3aa7', // violet
  '#e34948', // red
  '#e87ba4', // magenta
  '#eb6834', // orange
] as const

// 科目の並び順インデックスから固定の色を返す（同じ科目には常に同じ色を割り当てるため、グラフと一覧で使う）
export function colorForIndex(index: number): string {
  return CATEGORICAL_COLORS[index % CATEGORICAL_COLORS.length]
}
