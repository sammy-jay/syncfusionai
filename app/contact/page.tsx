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
            Our Commitment to Service
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            At SyncspaceHQ, we are committed to providing comprehensive IT solutions
            that empower businesses to thrive in the digital age. Our team of experts is
            ready to assist you with all your technology needs, from infrastructure setup
            to ongoing support.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            With a wide array of suppliers and partners worldwide, we bring specialized
            services tailored to meet your specific requirements, ensuring the most efficient
            value for money and great customer satisfaction.
          </p>
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  )
} 