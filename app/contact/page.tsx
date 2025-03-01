import { ContactForm } from '../components/ContactForm'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'

export default function Contact() {
  return (
    <>
      <main className="min-h-screen">
        <ContactForm />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-3xlfont-medium mb-8">
            Stop Leaving Revenue on the Table. Claim Your Unfair Advantage Now.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Ready to unleash the full power of AI for your B2B business? Our AI-powered systems are engineered to generate qualified leads, automate your sales process, and transform your customer support.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Don't wait. Dominate your market and outpace your competition. Contact us today to schedule your free strategy session.
          </p>
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  )
}