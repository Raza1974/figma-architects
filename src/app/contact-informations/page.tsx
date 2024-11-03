

// pages/contact.js
export default function Contact() {
  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-2">Contact Information</h1>
    <p className="text-lg mb-4">
      This is the contact information page.
    </p>
    <img
        src="/contact.jpg" // Adjust the image path if needed
        className="w-25 h-40 object-cover mb-4" // Added mb-4 for spacing
        alt="Contact Us"
      />

      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <p className="text-lg text-center mb-4">
        This is a simple Next.js application with Tailwind CSS for styling and Geist UI for components.
      </p>

      <div className="flex flex-col space-y-4">
        {/* WhatsApp Contact Option */}
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition"
        >
          Message us on WhatsApp
        </a>

        {/* Email Contact Option */}
        <a
          href="mailto:your-email@example.com?subject=Contact Us&body=Hello, I would like to get in touch."
          className="bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition"
        >
          Email us
        </a>
      </div>
    </div>
  );
}
