
export default function TermsOfService() {
  return (
    <section className='bg-white text-black max-h-screen w-full md:max-w-3/5 mx-auto my-4 md:my-10 p-4 md:p-16 relative overflow-y-scroll'>
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Terms & Conditions
        </h1>

        <p className="font-semibold mt-2 text-xl">
          Bringing Link Ups (BLU)
        </p>

        <p className="mt-2 text-sm">
          Effective Date: February 1, 2026
        </p>

        <p className="mt-6 text-base leading-relaxed">
          These Terms and Conditions (“Terms”) govern your access to and use of the Bringing Link Ups platform,
          including the mobile application, website, and related services (collectively, the “Platform”),
          operated by Inception House LLC (“BLU,” “Company,” “we,” “us,” or “our”).
          By accessing or using BLU, you agree to be bound by these Terms.
          If you do not agree, you may not use the Platform.
        </p>
      </header>

      <div className="space-y-8 text-base leading-relaxed">

        {/* 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            1. About BLU
          </h2>

          <p className="mb-4">
            BLU is a social event platform designed to connect individuals to local, interest-based events
            and foster meaningful real-world interactions.
          </p>

          <ul className="list-disc pl-6 space-y-2 marker">
            <li>Discover events through location-based recommendations</li>
            <li>Create and host events (“Rooms”)</li>
            <li>Communicate within event-specific threads</li>
            <li>Purchase tickets</li>
            <li>Participate in public or private messaging</li>
            <li>View demographic insights</li>
            <li>Engage with Maps features</li>
            <li>Follow and connect with other users</li>
          </ul>

          <p className="mt-2">
            BLU does not organize events unless explicitly stated.
            Event hosts are solely responsible for their events.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            2. Eligibility
          </h2>

          <ul className="list-disc pl-6 space-y-2 marker">
            <li>You must be at least 16 years old (or the legal minimum age in your jurisdiction).</li>
            <li>You must have the legal capacity to enter into binding agreements.</li>
            <li>You must provide accurate and truthful information.</li>
          </ul>

          <p className="mt-2">
            We reserve the right to suspend or terminate accounts that do not meet these requirements.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            3. Account Registration
          </h2>

          <ul className="list-disc pl-6 space-y-2 marker">
            <li>Provide accurate and current information.</li>
            <li>Maintain the confidentiality of login credentials.</li>
            <li>Accept responsibility for all activity under your account.</li>
          </ul>

          <p className="mt-2">
            BLU is not liable for unauthorized account access resulting from user negligence.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            4. User Conduct
          </h2>

          <p className="mb-4">You agree not to:</p>

          <ul className="list-disc pl-6 space-y-2 marker">
            <li>Harass, threaten, or abuse other users</li>
            <li>Post illegal, harmful, or defamatory content</li>
            <li>Impersonate another person</li>
            <li>Promote unlawful activities</li>
            <li>Use bots, scrapers, or automated systems</li>
            <li>Interfere with Platform functionality</li>
            <li>Host fraudulent or deceptive events</li>
            <li>Sell counterfeit tickets</li>
          </ul>

          <p className="mt-2">
            BLU reserves the right to remove content or suspend accounts at its discretion.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            5. Events & Host Responsibilities
          </h2>

          <p>
            Event hosts are responsible for accurately describing events, complying with local laws,
            obtaining required permits, ensuring attendee safety, and delivering events as advertised.
          </p>

          <p className="mt-2">
            BLU is not responsible for event cancellations, venue issues, injuries,
            disputes between attendees and hosts, or the quality or accuracy of event content.
            Disputes are between users unless otherwise required by law.
          </p>
        </div>
          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Payments & Ticketing
            </h2>

            <p>
              BLU may process payments for tickets, premium features, or boosted events through third-party
              payment providers.
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-gray-500 mt-2">
              <li>Payments are processed through third-party providers.</li>
              <li>Refund policies are determined by the event host unless otherwise specified.</li>
              <li>Service fees may be non-refundable.</li>
            </ul>

            <p className="mt-2">
              BLU reserves the right to withhold payouts if fraud, policy violations,
              or disputes are suspected.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Content Ownership & License
            </h2>

            <p>
              You retain ownership of content you upload, including photos, videos,
              event descriptions, and messages.
            </p>

            <p className="mt-2">
              By submitting content, you grant BLU a non-exclusive, worldwide, royalty-free license
              to host, display, distribute, and promote your content for platform operation
              and marketing purposes.
            </p>

            <p className="mt-2">
              You represent and warrant that you own or have the rights necessary
              to upload and share such content.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Messaging & Communications
            </h2>

            <p>
              BLU provides private and event-based messaging features.
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-gray-500 mt-2">
              <li>Messages may be stored for moderation and safety purposes.</li>
              <li>BLU may review content if reported or legally required.</li>
              <li>
                BLU does not guarantee message confidentiality beyond reasonable
                security measures.
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Location Services
            </h2>

            <p>
              BLU uses geolocation services to recommend nearby events,
              enable Hot Zones, and display event maps.
            </p>

            <p className="mt-2">
              By using BLU, you consent to location data usage as described in our Privacy Policy.
              You may disable location permissions in your device settings,
              though certain features may not function properly.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Termination
            </h2>

            <p>
              BLU may suspend or terminate accounts for:
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-gray-500 mt-2">
              <li>Violating these Terms</li>
              <li>Fraudulent activity</li>
              <li>Repeated user complaints</li>
              <li>Illegal behavior</li>
            </ul>

            <p className="mt-2">
              Users may delete their accounts at any time through account settings.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Disclaimers
            </h2>

            <p>
              BLU is provided “AS IS” and “AS AVAILABLE.”
            </p>

            <p className="mt-2">
              We do not guarantee event attendance levels, revenue for hosts,
              continuous or uninterrupted service, or the accuracy of user-generated content.
              Use of BLU is at your own risk.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Limitation of Liability
            </h2>

            <p>
              To the maximum extent permitted by law, BLU shall not be liable for:
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-gray-500 mt-2">
              <li>Indirect or consequential damages</li>
              <li>Lost profits or lost revenue</li>
              <li>Personal injury arising from events</li>
              <li>User-to-user disputes</li>
            </ul>

            <p className="mt-2">
              Our total liability shall not exceed the amount paid by you to BLU
              in the last 12 months.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Indemnification
            </h2>

            <p>
              You agree to indemnify and hold BLU harmless from any claims,
              damages, or losses arising from:
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-gray-500 mt-2">
              <li>Your events</li>
              <li>Your content</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of laws or third-party rights</li>
            </ul>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Intellectual Property
            </h2>

            <p>
              All platform content, excluding user-generated content,
              including logos, branding, software, design, interface,
              and features such as BLU Rooms and Maps Markers,
              is the property of BLU and protected by intellectual property laws.
            </p>

            <p className="mt-2">
              You may not copy, modify, distribute, or reverse-engineer
              any part of the Platform.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              15. Governing Law
            </h2>

            <p>
              These Terms are governed by the laws of the State of Florida,
              without regard to conflict of law principles.
            </p>

            <p className="mt-2">
              Disputes shall be resolved in courts located in Florida.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              16. Changes to Terms
            </h2>

            <p>
              We may update these Terms at any time.
              Continued use of the Platform constitutes acceptance
              of any revised Terms.
            </p>
          </section>
      </div>
    </section>
  )
}
