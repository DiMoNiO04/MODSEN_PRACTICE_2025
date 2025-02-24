import { IOption } from './interfaces';

type CardPriority = 'null' | 'low' | 'normal' | 'high' | 'critical';

export const CARD_PRIORITY: Record<CardPriority, IOption> = {
  null: { color: '#B0BEC5', value: '—' },
  low: { color: '#4CAF50', value: 'Low' },
  normal: { color: '#4F46E5', value: 'Normal' },
  high: { color: '#FF5722', value: 'High' },
  critical: { color: '#D32F2F', value: 'Critical' },
};
