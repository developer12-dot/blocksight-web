import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlockSight — Engagent: AI-Powered User Engagement for On-Chain Economies',
  description: 'Behavioral intelligence and commerce infrastructure for Web3. See your users. Predict their next move. Engage autonomously.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-heading font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
