type CardPriority = 'null' | 'low' | 'normal' | 'high' | 'critical';

export interface ICardPriority {
  color: string;
  text: string;
}

export const CARD_PRIORITY: Record<CardPriority, ICardPriority> = {
  null: { color: '#B0BEC5', text: '—' },
  low: { color: '#4CAF50', text: 'Low' },
  normal: { color: '#4F46E5', text: 'Normal' },
  high: { color: '#FF5722', text: 'High' },
  critical: { color: '#D32F2F', text: 'Critical' },
};
