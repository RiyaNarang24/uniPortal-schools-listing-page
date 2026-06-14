export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
  <h3 className="text-2xl font-bold">
    UniPortal
  </h3>

  <p className="mt-3 text-gray-400">
    Helping parents discover and compare schools across India.
  </p>
</div>
<div>
  <h4 className="font-semibold text-lg mb-3">
    Quick Links
  </h4>

  <ul className="space-y-2 text-gray-400">
    <li><a href="#home">Home</a></li>
    <li><a href="#schools" >Schools</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
</div><div>
  <h4 className="font-semibold text-lg mb-3">
    Contact
  </h4>

  <p className="text-gray-400">
    support@uniportal.in
  </p>

  <p className="text-gray-400 mt-2">
    +91 9876543210
  </p>
</div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
  © 2026 UniPortal. All rights reserved.
</div>
      </div>
    </footer>
  );
}