export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  type: 'youtube' | 'instagram' | 'direct';
  duration?: string;
  tag?: string;
}

export interface ServiceSubOption {
  id: string;
  title: string;
  description: string;
  tag: string;
  targetAudience: string;
  linkUrl: string;
  deliverables?: {
    title: string;
    description: string;
  }[];
}

export interface ServiceCardItem {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  badge?: string;
  targetAudienceText?: string;
  category: 'atendimento' | 'capacitacao' | 'mapa' | 'palestra' | 'comunidade';
  iconName: string;
  primaryActionLabel: string;
  primaryActionUrl: string;
  accentColor: string;
  imageUrl?: string;
  features?: string[];
  schedule?: string[];
  idealFor?: string[];
  subOptions?: ServiceSubOption[];
}

export interface ActiveModalData {
  type: 'service' | 'video' | 'about' | 'recommendation' | 'share';
  data?: any;
}

