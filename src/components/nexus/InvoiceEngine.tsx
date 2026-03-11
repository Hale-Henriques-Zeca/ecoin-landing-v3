"use client";

import jsPDF from "jspdf";

export default function InvoiceEngine() {

  const generateInvoice = () => {

    const data = {
      amount: "0.5 BNB",
      service: "Web3 Payment",
      hash: "0x123abc456..."
    };

    const doc = new jsPDF();

    doc.text("E-Coin Payment Invoice", 20, 20);

    doc.text(`Amount: ${data.amount}`, 20, 40);
    doc.text(`Service: ${data.service}`, 20, 50);
    doc.text(`Tx Hash: ${data.hash}`, 20, 60);

    doc.save("invoice.pdf");
  };

  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-8">

      <h2 className="text-2xl text-[#D4AF37] mb-6 text-center">
        Invoice Generator
      </h2>

      <button
        onClick={generateInvoice}
        className="px-6 py-3 bg-[#D4AF37] text-black rounded-xl w-full"
      >
        Generate Invoice
      </button>

    </div>
  );
}