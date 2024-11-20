export default function TermsPage() {
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-muted pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          <p className="text-muted-foreground mb-8">Effective Date: {effectiveDate}</p>

          <div className="prose prose-slate max-w-none">
            <p className="mb-8">
              Welcome to www.dadfitpro.com ("Website"). By accessing, browsing, or purchasing products 
              from this Website, you agree to be bound by these Terms of Use ("Terms"). If you do not 
              agree to these Terms, please do not use this Website.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. General Use of the Website</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Eligibility:</strong> By using this Website, you affirm that you are at least 18 years old or have parental/guardian consent to use it.</li>
              <li><strong>Changes to Terms:</strong> We reserve the right to update these Terms at any time. Any changes will be effective immediately upon posting to the Website.</li>
              <li><strong>Prohibited Activities:</strong> You agree not to use the Website for any unlawful purposes or activities that violate these Terms.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. Affiliate Marketing Disclosure</h2>
            <p className="mb-4">
              DadFitPro participates in affiliate marketing programs, which means the Website may include 
              links to third-party products or services. When you click on these links and make a purchase, 
              DadFitPro may earn a commission at no additional cost to you.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Transparency:</strong> We strive to provide honest opinions and recommendations about products or services we feature.</li>
              <li><strong>No Endorsement:</strong> Inclusion of affiliate links does not constitute an endorsement or guarantee of the third-party products or services.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. Disclaimer of Liability</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">No Responsibility for Misuse or Injury</h3>
            <p className="mb-4">
              The products sold or promoted by DadFitPro are designed for personal fitness purposes. 
              However, all use of the equipment is at your own risk. DadFitPro accepts no responsibility 
              for any injuries, accidents, or damages resulting from the use or misuse of the products 
              purchased from or recommended on this Website.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Assumption of Risk</h3>
            <p className="mb-4">By purchasing and using our products or products recommended through affiliate links, you agree to:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Assume full responsibility for the proper use of the equipment.</li>
              <li>Follow all instructions, warnings, and guidelines provided with the product.</li>
              <li>Consult a healthcare professional or fitness expert before starting any new exercise routine if you have health concerns or conditions.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, DadFitPro will not be liable for any direct, indirect, 
              incidental, or consequential damages resulting from:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Improper use of the Website or products.</li>
              <li>Inaccurate or incomplete information on the Website.</li>
              <li>Purchases made by third parties using your account or payment information.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Product Information and Use</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Product Descriptions</h3>
            <p className="mb-4">
              We strive to provide accurate information about our products and those linked through affiliate 
              programs. However, we do not guarantee that product descriptions, images, or other content are 
              free from errors.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Fitness Advice</h3>
            <p className="mb-8">
              Any fitness tips or content provided on the Website are for informational purposes only and 
              should not be considered medical advice. Always consult a professional before starting a 
              fitness regimen.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. Intellectual Property</h2>
            <p className="mb-8">
              All content on this Website, including text, images, logos, and designs, is the property of 
              DadFitPro and is protected by copyright and trademark laws. You may not use, reproduce, or 
              distribute our content without prior written permission.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">7. User Accounts</h2>
            <p className="mb-8">
              If you create an account on this Website, you are responsible for maintaining the confidentiality 
              of your account information and for all activities under your account. You agree to notify us 
              immediately of any unauthorized use.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">8. Governing Law</h2>
            <p className="mb-8">
              These Terms of Use and any disputes arising from your use of the Website or purchases made are 
              governed by the laws of California, without regard to its conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">9. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless DadFitPro, its affiliates, and their officers, 
              directors, employees, and agents from any claims, damages, or losses arising out of your use 
              of the Website or products, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Misuse of the products.</li>
              <li>Breach of these Terms.</li>
              <li>Violation of any third-party rights.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">10. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold">DadFitPro</p>
              <p>Email: terms@dadfitpro.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Mailing Address: 123 Fitness Street, Workout City, ST 12345</p>
            </div>

            <p className="mt-8 text-muted-foreground">
              By using this Website or purchasing products, you acknowledge that you have read, 
              understood, and agreed to these Terms of Use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}