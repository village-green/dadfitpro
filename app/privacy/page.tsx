export default function PrivacyPage() {
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-muted pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Notice</h1>
          <p className="text-muted-foreground mb-8">Effective Date: {effectiveDate}</p>

          <div className="prose prose-slate max-w-none">
            <p className="mb-8">
              DadFitPro ("we," "us," or "our") values your privacy. This Privacy Notice explains how we collect, use, disclose, 
              and protect your information when you visit our website, www.dadfitpro.com ("Website"). Please read this notice 
              carefully to understand our practices regarding your information.
            </p>

            <p className="mb-8">
              By using our Website, you agree to the terms of this Privacy Notice. If you do not agree, please do not use the Website.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect personal and non-personal information to provide and improve our services. This includes:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">(a) Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Account Information:</strong> Name, email address, password, phone number, and mailing address when you register or make a purchase.</li>
              <li><strong>Payment Information:</strong> Billing address and payment card details (processed securely via a third-party payment processor).</li>
              <li><strong>Communications:</strong> Details you share when contacting us, such as inquiries or feedback.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">(b) Information Automatically Collected</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system.</li>
              <li><strong>Usage Data:</strong> Pages viewed, time spent on the Website, and navigation paths.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> Information collected via cookies and similar technologies. (See Section 7 for details.)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Process and fulfill orders.</li>
              <li>Communicate with you regarding your purchases, inquiries, or updates.</li>
              <li>Provide personalized content and recommendations.</li>
              <li>Improve our Website, products, and services.</li>
              <li>Comply with legal obligations and prevent fraud.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. How We Share Your Information</h2>
            <p className="mb-4">We do not sell or rent your personal information. However, we may share your information with:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Service Providers:</strong> For payment processing, shipping, marketing, or IT support.</li>
              <li><strong>Compliance Purposes:</strong> When required by law, such as responding to legal requests or protecting against fraudulent activities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, sale, or other business reorganization.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Your Choices and Rights</h2>
            <p className="mb-4">Depending on your state of residence, you may have specific rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Access and Correction:</strong> Request access to or correction of your personal data.</li>
              <li><strong>Opt-Out:</strong> Limit the use of cookies or unsubscribe from marketing communications.</li>
              <li><strong>Deletion:</strong> Request deletion of your data, subject to legal or contractual obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Data Security</h2>
            <p className="mb-8">
              We implement reasonable technical and organizational measures to protect your personal information. 
              However, no method of transmission over the internet or electronic storage is completely secure, 
              and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. Third-Party Links</h2>
            <p className="mb-8">
              Our Website may include links to third-party websites. We are not responsible for their privacy practices. 
              Please review the privacy policies of these third-party sites before providing personal information.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Enhance user experience.</li>
              <li>Analyze site performance.</li>
              <li>Provide targeted advertisements.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">8. Children's Privacy</h2>
            <p className="mb-8">
              Our Website is not intended for individuals under 13 years old. We do not knowingly collect personal 
              information from children. If we discover that we have inadvertently collected such information, 
              we will delete it.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">9. Changes to This Privacy Notice</h2>
            <p className="mb-8">
              We may update this Privacy Notice periodically to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. Updates will be posted on this page with a revised 
              "Effective Date."
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">10. Contact Us</h2>
            <p className="mb-4">If you have questions or concerns about this Privacy Notice or our data practices, please contact us at:</p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold">DadFitPro</p>
              <p>Email: privacy@dadfitpro.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Mailing Address: 123 Fitness Street, Workout City, ST 12345</p>
            </div>

            <p className="mt-8 text-muted-foreground">
              Thank you for trusting DadFitPro with your personal information. We are committed to protecting 
              your privacy and ensuring a safe shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}