import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { company } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing the use of TezzPOS Technologies' products and services.",
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="June 1, 2026"
      intro={`Welcome to our e-commerce platform. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before using our services.`}
      sections={[
        {
          heading: "1. Introduction",
          body: (
            <p>
              Welcome to our e-commerce platform. By accessing or using our website, you agree to comply with and be
              bound by these Terms and Conditions. Please read them carefully before using our services.
            </p>
          ),
        },
        {
          heading: "2. Eligibility",
          body: (
            <>
              <p>By using this website, you confirm that:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>You are at least 18 years old or accessing under the supervision of a legal guardian.</li>
                <li>You have the legal capacity to enter into a binding contract.</li>
                <li>You will use this website only for lawful purposes.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. Account Registration",
          body: (
            <>
              <p>To access certain features, you may be required to create an account.</p>
              <p className="mt-2">By registering:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>You agree to provide accurate and complete information.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You must notify us immediately of any unauthorized access or security breach.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Product Information",
          body: (
            <>
              <p>We strive to provide accurate product descriptions and images. However:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Actual colors and sizes may vary slightly due to monitor settings or manufacturing differences.</li>
                <li>Prices, availability, and descriptions are subject to change without prior notice.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "5. Orders & Payments",
          body: (
            <>
              <h3 className="font-semibold text-foreground">5.1 Order Acceptance</h3>
              <p>Your order constitutes an offer to purchase products. We reserve the right to:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Accept or reject any order at our sole discretion.</li>
                <li>Cancel an order if payment is not received or if an error occurs in pricing or availability.</li>
              </ul>
              <h3 className="mt-4 font-semibold text-foreground">5.2 Payment Terms</h3>
              <p>Payments must be made using approved payment methods listed on our website.</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>All transactions are securely processed.</li>
                <li>Prices include applicable taxes unless otherwise stated.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "6. Shipping & Delivery",
          body: (
            <>
              <p>
                We aim to deliver products in a timely manner, but delays may occur due to factors beyond our control.
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Delivery timelines are estimates and not guarantees.</li>
                <li>Risk of loss or damage passes to you upon delivery.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "7. Returns & Refunds",
          body: (
            <>
              <p>We offer a simple return and refund policy in accordance with our Return Policy page.</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Items must be returned in unused condition with original packaging.</li>
                <li>Refunds will be processed after inspection of returned items.</li>
                <li>Certain items may not be eligible for return (e.g., perishable goods or custom products).</li>
              </ul>
            </>
          ),
        },
        {
          heading: "8. Intellectual Property",
          body: (
            <p>
              All content, trademarks, and materials on this website, including text, graphics, logos, and images, are
              the property of {company.name} or its licensors. You may not reproduce, distribute, or modify any content
              without written permission.
            </p>
          ),
        },
        {
          heading: "9. Prohibited Activities",
          body: (
            <>
              <p>You agree not to:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Use the website for fraudulent or unlawful purposes.</li>
                <li>Attempt to interfere with website security or functionality.</li>
                <li>Engage in spamming, phishing, or distribution of harmful software.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "10. Limitation of Liability",
          body: (
            <>
              <p>To the fullest extent permitted by law:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  We are not liable for indirect, incidental, or consequential damages arising from the use of our
                  website or products.
                </li>
                <li>Our total liability shall not exceed the amount paid for the product in question.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "11. Indemnification",
          body: (
            <p>
              You agree to indemnify and hold harmless {company.name}, its affiliates, and employees from any claims,
              damages, or losses resulting from your violation of these terms or misuse of the website.
            </p>
          ),
        },
        {
          heading: "12. Third-Party Links",
          body: (
            <>
              <p>Our website may contain links to third-party sites.</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>We are not responsible for the content, accuracy, or policies of such websites.</li>
                <li>Accessing third-party links is at your own risk.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "13. Termination",
          body: (
            <p>
              We reserve the right to suspend or terminate your access to our website or services at any time without
              notice if you violate these Terms and Conditions.
            </p>
          ),
        },
        {
          heading: "14. Changes to Terms",
          body: (
            <p>
              We may update or modify these Terms at any time. Any changes will be effective immediately upon posting.
              Continued use of the website indicates acceptance of the revised Terms.
            </p>
          ),
        },
        {
          heading: "15. Governing Law",
          body: (
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of the courts located in Gandhinagar, Gujarat.
            </p>
          ),
        },
        {
          heading: "16. Contact Us",
          body: (
            <>
              <p>If you have any questions or concerns regarding these Terms, please contact us at:</p>
              <ul className="mt-2 list-none space-y-1 pl-0">
                <li>
                  <span className="text-foreground">Email:</span>{" "}
                  <a href={`mailto:${company.support}`} className="font-medium text-primary hover:underline">
                    {company.support}
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
