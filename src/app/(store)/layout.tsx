import { Header } from '@/components/header'
import type { ReactNode } from 'react'

interface StoreLayoutProps {
  children: ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
