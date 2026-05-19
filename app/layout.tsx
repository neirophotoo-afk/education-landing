import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Онлайн-обучение профессиям — Екатерина Трегубова',
  description: 'Современный лендинг для онлайн-обучения востребованным профессиям с поддержкой куратора.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
