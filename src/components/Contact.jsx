import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // This is a demo-only form. Wire it to your backend or a service later.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Let’s work together</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-center">Tell me about your project and timeline. I’ll reply within 24 hours.</p>
        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <input name="name" placeholder="Your name" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md px-4 py-3" />
          <input type="email" name="email" placeholder="Email" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md px-4 py-3" />
          <textarea name="message" placeholder="Project details" rows="5" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md px-4 py-3" />
          <button type="submit" className="inline-flex justify-center rounded-xl bg-neutral-900 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-neutral-800 transition-colors">Send message</button>
          {!!status && <p className="text-sm text-center">{status}</p>}
        </form>
      </div>
    </section>
  )
}
