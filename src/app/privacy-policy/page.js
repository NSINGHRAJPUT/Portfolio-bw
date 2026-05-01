import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: May 1, 2026</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          This Privacy Policy describes how NSR ("we," "us," or "our") collects, uses, and shares information about you when you use our mobile applications (the "Apps"), including but not limited to our Notes App, Expense Tracker, Realtime Chat, E-commerce App, and LinkedIn-type social networking app.
        </p>
        <p className="mb-4">
          We are committed to protecting your privacy and ensuring the security of your personal information. By using our Apps, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

        <h3 className="text-xl font-medium mb-2">Information You Provide</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Account information (name, email, phone number, profile picture)</li>
          <li>Content you create or upload (notes, messages, posts, product listings)</li>
          <li>Payment information for e-commerce transactions</li>
          <li>Communication data when you contact us</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">Information We Collect Automatically</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Device information (device type, operating system, unique device identifiers)</li>
          <li>Usage data (app usage patterns, features accessed)</li>
          <li>Location data (if location services are enabled)</li>
          <li>Log data (IP address, browser type, pages visited)</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">Information from Third Parties</h3>
        <p className="mb-4">
          We may receive information from third-party services you connect to our Apps, such as social media platforms or payment processors.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide, maintain, and improve our Apps</li>
          <li>To process transactions and send related information</li>
          <li>To send technical notices, updates, security alerts, and support messages</li>
          <li>To respond to your comments, questions, and requests</li>
          <li>To communicate with you about products, services, offers, and events</li>
          <li>To monitor and analyze trends, usage, and activities</li>
          <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          <li>To personalize your experience and provide content and features that match your interests</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>With service providers who assist us in operating our Apps</li>
          <li>To comply with legal obligations or protect our rights</li>
          <li>In connection with a merger, acquisition, or sale of assets</li>
          <li>With your consent or at your direction</li>
          <li>For social features (e.g., sharing posts in our LinkedIn-type app)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p className="mb-4">
          We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary depending on the type of data and the purpose for which it was collected.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Access to your personal information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of your personal information</li>
          <li>Restriction or objection to processing</li>
          <li>Data portability</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us using the information provided in the "Contact Us" section.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p className="mb-4">
          Our Apps are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
        <p className="mb-4">
          Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: nsinghrajput30@gmail.com</li>
          <li>Phone: 9752661779</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;