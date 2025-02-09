import React from "react";

const Payment = () => {
  return (
    <div className="container bg-white mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
      <p className="text-gray-700 leading-6">
        We provide multiple secure payment options to make your shopping
        experience smooth and hassle-free. Choose the method that best suits you
        and enjoy a seamless checkout process.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Available Payment Methods
      </h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>
          <strong>Credit/Debit Cards:</strong> We accept all major cards,
          including Visa, MasterCard, RuPay, and American Express.
        </li>
        <li>
          <strong>UPI Payments:</strong> Make quick payments via Google Pay,
          PhonePe, Paytm, and other UPI-enabled apps.
        </li>
        <li>
          <strong>Net Banking:</strong> Secure transactions through all major
          banks with real-time processing.
        </li>
        <li>
          <strong>Cash on Delivery (COD):</strong> Pay in cash upon delivery.
          Available in select locations.
        </li>
        <li>
          <strong>Wallet Payments:</strong> Use Paytm Wallet, Amazon Pay, and
          other e-wallets for instant transactions.
        </li>
        <li>
          <strong>EMI & Buy Now, Pay Later:</strong> Flexible EMI options and
          easy financing available on select products.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Why Choose Our Payment System?
      </h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>100% secure transactions with advanced encryption.</li>
        <li>Fast and hassle-free checkout process.</li>
        <li>No hidden charges—transparent pricing.</li>
        <li>Multiple payment methods for customer convenience.</li>
      </ul>

      <p className="mt-4 text-gray-700">
        Your transactions are protected with industry-standard security
        measures. If you have any questions about payments or encounter any
        issues, feel free to{" "}
        <span className="font-semibold">contact our support team.</span>
      </p>
    </div>
  );
};

export default Payment;
