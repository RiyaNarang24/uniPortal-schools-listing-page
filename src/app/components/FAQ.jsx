"use client"
import {useState} from "react";
export default function FAQ(){
    const faqs = [
  {
    question: "How can I compare schools?",
    answer: "Use the search and filter options to compare schools by board, rating, city, and fees."
  },
  {
    question: "Are school ratings verified?",
    answer: "Ratings are based on publicly available information and parent reviews."
  },
  {
    question: "How often is the school information updated?",
    answer: "School information is updated periodically to maintain accuracy."
  },
  {
    question: "Can I contact schools directly?",
    answer: "Yes, you can visit the school's official website for admission inquiries."
  }
];
const [openIndex, setOpenIndex] = useState(null);
    return (
  <section id="faq" className="max-w-4xl mx-auto px-4 py-20 pt-24">
  <h2 className="text-4xl font-bold text-center mb-12">
    Frequently Asked Questions
  </h2>
 {faqs.map((faq, index) => (
  <div
    key={index}
    onClick={() =>
      setOpenIndex(
        openIndex === index ? null : index
      )
    }
    className="bg-white rounded-xl shadow-md p-5 mb-4 cursor-pointer hover:shadow-lg transition"
  >
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-lg">
        {faq.question}
      </h3>

      <span className="text-2xl">
        {openIndex === index ? "−" : "+"}
      </span>
    </div>

    {openIndex === index && (
      <p className="mt-3 text-gray-600">
        {faq.answer}
      </p>
    )}
  </div>
))}

    

  </section>
);

}