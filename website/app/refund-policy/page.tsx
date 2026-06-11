import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { company } from "@/lib/site"

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: "Information about returns and refunds for TezzPOS Technologies' products and services.",
}

export default function RefundPage() {
  return (
    <LegalPage
      title="Return & Refund Policy"
      updated="June 1, 2026"
      intro="We want you to have a pleasant shopping experience. If you are not completely satisfied with your purchase, you may be eligible for a return, replacement, or refund in accordance with the terms outlined below."
      sections={[
        {
          heading: "1. Introduction",
          body: (
            <p>
              We want you to have a pleasant shopping experience. If you are not completely satisfied with your
              purchase, you may be eligible for a return, replacement, or refund in accordance with the terms outlined
              below.
            </p>
          ),
        },
        {
          heading: "2. Eligibility for Returns",
          body: (
            <>
              <p>To qualify for a return:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>The item must be unused, unworn, and in its original packaging.</li>
                <li>The return request must be made within 7–14 days of delivery (depending on product category).</li>
                <li>Proof of purchase (order number or invoice) is required.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. Non-Returnable Items",
          body: (
            <>
              <p>Certain items are not eligible for return or refund:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Perishable or consumable goods (e.g., food, beverages, supplements)</li>
                <li>Personal care, hygiene, or intimate products</li>
                <li>Customized or personalized items</li>
                <li>Digital products or gift cards</li>
                <li>Items marked as “Final Sale”</li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Return Process",
          body: (
            <>
              <h3 className="font-semibold text-foreground">4.1 Step 1: Submit a Return Request</h3>
              <p>
                Go to your account’s “Orders” section and select the item you wish to return. Fill out the return request
                form and specify the reason for return.
              </p>
              <h3 className="mt-4 font-semibold text-foreground">4.2 Step 2: Approval & Instructions</h3>
              <p>
                Once we review your request, we’ll notify you via email regarding approval status and provide return
                instructions.
              </p>
              <h3 className="mt-4 font-semibold text-foreground">4.3 Step 3: Ship the Item</h3>
              <p>
                Pack the item securely with all tags, manuals, and accessories. Use a reliable courier with tracking. You
                may be responsible for return shipping unless the return is due to a product defect or incorrect item.
              </p>
            </>
          ),
        },
        {
          heading: "5. Refunds",
          body: (
            <>
              <p>After receiving and inspecting your return:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Approved refunds will be processed to your original payment method within 5–10 business days.</li>
                <li>Shipping charges, COD fees, and gift wrapping costs are non-refundable.</li>
                <li>Refund timelines may vary depending on your payment provider.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "6. Replacements & Exchanges",
          body: (
            <>
              <p>You may request a replacement instead of a refund if:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>The product is damaged or defective on arrival.</li>
                <li>The wrong item or size was delivered.</li>
              </ul>
              <p className="mt-2">Replacements are subject to stock availability.</p>
            </>
          ),
        },
        {
          heading: "7. Damaged or Defective Items",
          body: (
            <>
              <p>If you receive a damaged, defective, or incorrect product:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Contact our support team within 48 hours of delivery.</li>
                <li>Include photos or videos showing the issue.</li>
                <li>We’ll arrange a replacement or refund as soon as possible.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "8. Return Shipping Responsibility",
          body: (
            <>
              <p>
                If the return is due to our error (wrong or defective item), we cover the return shipping cost. If you
                change your mind or order the wrong size, you’ll need to bear the return shipping fee.
              </p>
            </>
          ),
        },
        {
          heading: "9. Cancellation Policy",
          body: (
            <p>
              Orders can be canceled before shipment by contacting our support team. Once shipped, cancellations are not
              possible — you may initiate a return after receiving the product.
            </p>
          ),
        },
        {
          heading: "10. Late or Missing Refunds",
          body: (
            <>
              <p>If you haven’t received your refund yet:</p>
              <ol className="list-decimal space-y-1 pl-6">
                <li>Check your bank or payment provider again.</li>
                <li>Contact your credit card company; it may take time before your refund is officially posted.</li>
                <li>
                  If you’ve done all this and still haven’t received your refund, contact us at{" "}
                  <a href={`mailto:${company.support}`} className="font-medium text-primary hover:underline">
                    {company.support}
                  </a>
                  .
                </li>
              </ol>
            </>
          ),
        },
        {
          heading: "11. Contact Us",
          body: (
            <>
              <p>For any return or refund queries, please reach out to us:</p>
              <ul className="mt-2 list-none space-y-1 pl-0">
                <li>
                  <span className="text-foreground">Email:</span>{" "}
                  <a href={`mailto:${company.support}`} className="font-medium text-primary hover:underline">
                    {company.support}
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
