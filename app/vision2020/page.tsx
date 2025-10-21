import ClientPage from '../client-page'
import Vision2020FormClient from './Vision2020FormClient'

export const metadata = {
  title: 'Vision 20/20 — 20 Years of Prayer Investment',
  description: 'Join the 20-year prayer investment — impart generational blessings and submit prayer requests.',
}

export default function Page() {
  return (
    <>
      <ClientPage />

      <section id="form" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-4">Prayer & Family Request</h2>
        <p className="text-center text-sm text-slate-600 mb-6">Share a request and family details — we read every submission.</p>
        <Vision2020FormClient />
      </section>
    </>
  )
}
