import React from "react";

const FAQs = () => {
  return (
    <div className="container bg-white mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {/* Order Tracking */}
        <div>
          <h2 className="text-lg font-semibold">
            1. How can I track my order?
          </h2>
          <p className="text-gray-700">
            You will receive an email/SMS with tracking details once your order
            is shipped. You can also track your order in the{" "}
            <span className="font-semibold">"My Orders"</span> section of your
            account.
          </p>
        </div>

        {/* Payment Methods */}
        <div>
          <h2 className="text-lg font-semibold">
            2. What payment methods are accepted?
          </h2>
          <p className="text-gray-700">
            We accept multiple payment methods including:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Credit/Debit Cards (Visa, MasterCard, RuPay, etc.)</li>
            <li>UPI Payments (Google Pay, PhonePe, Paytm, etc.)</li>
            <li>Net Banking (All major banks supported)</li>
            <li>Cash on Delivery (Available in select locations)</li>
          </ul>
        </div>

        {/* Address Change */}
        <div>
          <h2 className="text-lg font-semibold">
            3. Can I change my delivery address after placing an order?
          </h2>
          <p className="text-gray-700">
            Address changes are possible within <strong>12 hours</strong> of
            placing the order. Please contact our customer support team as soon
            as possible.
          </p>
        </div>

        {/* Return & Refunds */}
        <div>
          <h2 className="text-lg font-semibold">
            4. What is the return and refund policy?
          </h2>
          <p className="text-gray-700">
            You can return products within <strong>7 days</strong> of delivery
            if they are unused and in original packaging. Refunds are processed
            within <strong>5-7 business days</strong> after verification.
          </p>
        </div>

        {/* Shipping Charges */}
        <div>
          <h2 className="text-lg font-semibold">
            5. Do you charge for shipping?
          </h2>
          <p className="text-gray-700">
            We offer <strong>free shipping</strong> on orders above ₹1000. A
            nominal shipping charge applies to orders below ₹1000.
          </p>
        </div>

        {/* International Shipping */}
        <div>
          <h2 className="text-lg font-semibold">
            6. Do you offer international shipping?
          </h2>
          <p className="text-gray-700">
            Yes, we do offer international shipping. Extra shipping charges may
            apply based on the destination.
          </p>
        </div>

        {/* Order Cancellation */}
        <div>
          <h2 className="text-lg font-semibold">7. Can I cancel my order?</h2>
          <p className="text-gray-700">
            Yes, you can cancel your order within <strong>24 hours</strong> of
            purchase. Once the order is shipped, cancellations are not possible.
          </p>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-lg font-semibold">
            8. How can I contact customer support?
          </h2>
          <p className="text-gray-700">
            You can reach us via email at{" "}
            <span className="font-semibold">support@yourshop.com</span> or call
            our helpline at{" "}
            <span className="font-semibold">+91 1234567890</span>. Our support
            team is available from 9 AM - 6 PM (Monday to Saturday).
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
