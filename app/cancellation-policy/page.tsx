import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { company } from "@/lib/site"

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "How to cancel your orders and what to expect from TezzPOS Technologies.",
}

export default function CancellationPage() {
  return (
    <LegalPage
      title="Cancellation Policy"
      updated="June 1, 2026"
      intro="We understand that sometimes plans change. This Cancellation Policy explains how you can cancel your orders and under what conditions a cancellation or refund may apply."
      sections={[
        {
          heading: "1. Introduction",
          body: (
            <p>
              We understand that sometimes plans change. This Cancellation Policy explains how you can cancel your orders
              and under what conditions a cancellation or refund may apply.
            </p>
          ),
        },
        {
          heading: "2. Order Cancellation Before Shipment",
          body: (
            <>
              <p>
                You can cancel your order before it has been shipped by contacting our customer support team.
              </p>
              <p className="mt-2">Once your cancellation request is approved:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>A full refund will be issued to your original payment method.</li>
                <li>You will receive a confirmation email once the cancellation is processed.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. Order Cancellation After Shipment",
          body: (
            <>
              <p>Once an order has been shipped, it can no longer be canceled.</p>
              <p className="mt-2">However, you may:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Refuse delivery at the time of arrival, or</li>
                <li>Initiate a return after receiving the package (as per our Return Policy).</li>
              </ul>
              <p className="mt-2">In such cases, shipping charges will not be refunded.</p>
            </>
          ),
        },
        {
          heading: "4. Cancellation for Cash on Delivery (COD) Orders",
          body: (
            <>
              <p>If you placed a Cash on Delivery (COD) order:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>You can cancel it before it is shipped by contacting customer support.</li>
                <li>Repeated COD order cancellations may lead to restrictions on future COD purchases.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "5. Automatic Cancellation",
          body: (
            <>
              <p>Your order may be automatically canceled under the following conditions:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Payment not received within the required timeframe.</li>
                <li>The item becomes unavailable or out of stock.</li>
                <li>Order flagged for fraudulent or suspicious activity.</li>
              </ul>
              <p className="mt-2">If canceled by us, any payment made will be fully refunded.</p>
            </>
          ),
        },
        {
          heading: "6. Partial Order Cancellation",
          body: (
            <>
              <p>If you wish to cancel a specific item within a multi-item order:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Contact support before shipment.</li>
                <li>The refund will apply only to the canceled item.</li>
                <li>Shipping costs may be adjusted based on the remaining order value.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "7. Refund Process After Cancellation",
          body: (
            <>
              <p>Once a cancellation is confirmed:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Refunds for prepaid orders are issued within 5–10 business days.</li>
                <li>Refunds are processed through the same payment method used for purchase.</li>
                <li>Bank or card processing times may affect when funds appear in your account.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "8. Non-Cancellable Items",
          body: (
            <>
              <p>Certain products cannot be canceled once the order is placed:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Personalized, made-to-order, or custom items</li>
                <li>Perishable goods (e.g., food, flowers, cosmetics)</li>
                <li>Items marked “Final Sale” or “Non-Returnable”</li>
              </ul>
            </>
          ),
        },
        {
          heading: "9. Cancellation Fees (if applicable)",
          body: (
            <>
              <p>In rare cases, a small cancellation fee may apply if:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>The order has already been packed or labeled for shipment.</li>
                <li>Third-party logistics or handling costs have been incurred.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "10. How to Request a Cancellation",
          body: (
            <>
              <p>To cancel an order:</p>
              <ol className="list-decimal space-y-1 pl-6">
                <li>Log in to your account and visit the “Orders” section.</li>
                <li>Select the order you wish to cancel and click “Request Cancellation”.</li>
                <li>Alternatively, contact our support team directly with your order number.</li>
              </ol>
            </>
          ),
        },
        {
          heading: "11. Delayed or Failed Cancellation Requests",
          body: (
            <>
              <p>If your cancellation request is received after the order has shipped:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>The order will proceed with delivery.</li>
                <li>You can return the product after delivery under our Return Policy.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "12. Policy Changes",
          body: (
            <p>
              We may update this Cancellation Policy from time to time. Any changes will be posted on this page, and
              continued use of our services indicates acceptance of the updated policy.
            </p>
          ),
        },
        {
          heading: "13. Contact Us",
          body: (
            <>
              <p>For order cancellations or related assistance, please contact us:</p>
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
