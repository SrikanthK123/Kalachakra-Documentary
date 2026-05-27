export type ChapterArtType =
  | 'mandala'
  | 'researcher'
  | 'temple'
  | 'night'
  | 'cave'
  | 'compass'
  | 'asteroid'
  | 'news'
  | 'shiftedCity'
  | 'phases'
  | 'descent'
  | 'otherWorld'
  | 'otherVara'
  | 'balanceWarning'

export type Chapter = {
  id: string
  number: string
  title: string
  body: string[]
  highlight?: string | null
  artType: ChapterArtType
  layout: 'left' | 'right'
  atmosphere?: 'normal' | 'fire' | 'cosmic' | 'danger'
  image?: string
  hoverImage?: string
  extraImages?: string[]
  
  // Multilingual translations
  translations?: {
    hindi: {
      number?: string
      title: string
      body: string[]
      highlight?: string | null
    }
    telugu: {
      number?: string
      title: string
      body: string[]
      highlight?: string | null
    }
  }
}
