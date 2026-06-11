import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { company } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TezzPOS Technologies collects, uses, and protects your personal and business data.",
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 1, 2026"
      intro="Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from our store."
      sections={[
        {
          heading: "1. Introduction",
          body: (
            <p>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or make a purchase from our store.
            </p>
          ),
        },
        {
          heading: "2. Information We Collect",
          body: (
            <>
              <h3 className="font-semibold text-foreground">2.1 Personal Information</h3>
              <p>We may collect personal details such as:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Name, email address, phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely via third-party gateways)</li>
                <li>Account login credentials (if you register an account)</li>
              </ul>
              <h3 className="mt-4 font-semibold text-foreground">2.2 Non-Personal Information</h3>
              <p>We may also collect non-identifiable data including:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Browser type, operating system, and device information</li>
                <li>Referring URLs and site interactions</li>
                <li>IP address and general location data</li>
              </ul>
              <h3 className="mt-4 font-semibold text-foreground">2.3 Cookies and Tracking</h3>
              <p>
                Our website uses cookies and similar tracking technologies to improve user experience, analyze traffic,
                and personalize content. You can choose to disable cookies through your browser settings.
              </p>
            </>
          ),
        },
        {
          heading: "3. How We Use Your Information",
          body: (
            <>
              <p>We use your information to:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you regarding purchases or support</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Improve our website, services, and product offerings</li>
                <li>Prevent fraud and ensure data security</li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Data Sharing & Disclosure",
          body: (
            <>
              <p>We do not sell your personal information.</p>
              <p className="mt-2">However, we may share your data with:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Service providers (payment processors, couriers, analytics tools)</li>
                <li>Legal authorities, when required by law</li>
                <li>Business partners, if necessary for fulfilling your order</li>
              </ul>
              <p className="mt-2">
                All third parties are required to maintain confidentiality and comply with applicable data protection
                laws.
              </p>
            </>
          ),
        },
        {
          heading: "5. Data Security",
          body: (
            <p>
              We use appropriate administrative, technical, and physical safeguards to protect your data from
              unauthorized access, disclosure, or alteration. However, no internet transmission is 100% secure — you
              share information at your own risk.
            </p>
          ),
        },
        {
          heading: "6. User Rights",
          body: (
            <>
              <p>Depending on your jurisdiction, you may have rights to:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Access, correct, or delete your personal data</li>
                <li>Withdraw consent to marketing communications</li>
                <li>Request data portability or restriction of processing</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact us at{" "}
                <a href={`mailto:${company.email}`} className="font-medium text-primary hover:underline">
                  {company.email}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: "7. Data Retention",
          body: (
            <>
              <p>We retain your personal information only for as long as necessary:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>To complete transactions and fulfill legal obligations</li>
                <li>To resolve disputes and enforce our agreements</li>
              </ul>
              <p className="mt-2">After that, we securely delete or anonymize your data.</p>
            </>
          ),
        },
        {
          heading: "8. Third-Party Links",
          body: (
            <p>
              Our website may contain links to third-party sites. We are not responsible for their privacy practices or
              content. Please review the privacy policies of those websites before providing any personal data.
            </p>
          ),
        },
        {
          heading: "9. Children’s Privacy",
          body: (
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal
              information from minors. If you believe your child has provided us information, please contact us for
              deletion.
            </p>
          ),
        },
        {
          heading: "10. International Data Transfers",
          body: (
            <p>
              If you access our website from outside our operating country, your data may be transferred and processed in
              countries with different data protection laws. By using our services, you consent to such transfers.
            </p>
          ),
        },
        {
          heading: "11. Changes to This Policy",
          body: (
            <p>
              We may update this Privacy Policy periodically. The updated version will be posted on this page with the
              revised effective date. Continued use of our website constitutes acceptance of any modifications.
            </p>
          ),
        },
        {
          heading: "12. Contact Us",
          body: (
            <>
              <p>If you have questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:</p>
              <ul className="mt-2 list-none space-y-1 pl-0">
                <li>
                  <span className="text-foreground">Email:</span>{" "}
                  <a href={`mailto:${company.email}`} className="font-medium text-primary hover:underline">
                    {company.email}
                  </a>
                </li>
                <li>
                  <span className="text-foreground">Phone:</span>{" "}
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="font-medium text-primary hover:underline">
                    {company.phone}
                  </a>
                </li>
                <li>
                  <span className="text-foreground">Address:</span> {company.address}
                </li>
              </ul>
            </>
          ),
        },
      ]}
    />
  )
}
