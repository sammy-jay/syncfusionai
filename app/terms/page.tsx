import { Footer } from '../components/Footer'

export default function Terms() {
  return (
    <>
      <main className="min-h-screen bg-black pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xlmd: text-5xl lg:text-5xlfont-medium mb-6">
              Term & Conditions
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Welcome to Syncfusion AI! These terms and conditions outline the rules
              and regulations for the use of our website and services.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                1. Overview
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Syncfusion AI our is an innovative agency amplified with AI, offering a range of creative and digital services.
                These Terms apply to all visitors, users, and others who access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                2. Services
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We provide a variety of services, including but not limited to branding, web development, digital marketing,
                and AI-driven solutions. Each service is subject to its own specific agreement, which outlines the scope,
                timeline, and payment terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                3. User Responsibilities
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Users are responsible for maintaining the confidentiality of their account information and for all activities
                under their account. Users must provide accurate and complete information when interacting with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                4. Intellectual Property
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                All content, including but not limited to logos, designs, text, graphics, and software, is the property
                of Syncfusion AI and is protected by intellectual property laws. Users may not use, reproduce, or distribute
                our content without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                5. Privacy Policy
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our Privacy Policy outlines how we collect, use, and protect user information. By using our services,
                users agree to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                6. Payment Terms
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Payment terms, including fees, billing cycles, and refund policies, are specified in individual service
                agreements. Users agree to pay all charges associated with their use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Syncfusion AI is not liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of our services. Our liability is limited to the amount paid for the specific
                service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                8. Modifications
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes.
                Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                9. Contact Information
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                For questions about these terms, please contact us at support@Syncfusion AI.com or through our contact form.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 