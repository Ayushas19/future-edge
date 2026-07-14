
const Privacy = () => {
  return (
    <div className="section" style={{ background: 'var(--bg-primary)', paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="heading-h2 text-high-contrast mb-4">Privacy Policy</h1>
        <p className="text-secondary mb-5"><strong>Effective Date:</strong> July 9, 2026</p>
        
        <div className="policy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p className="mb-4">
            At Future Edge Digital Marketing ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.
          </p>

          <h3 className="heading-h4 text-primary mt-5 mb-3" style={{color: 'var(--text-primary)'}}>1. Information We Collect</h3>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and business details when you fill out a contact form, request a proposal, or subscribe to our newsletter.
          </p>

          <h3 className="heading-h4 text-primary mt-5 mb-3" style={{color: 'var(--text-primary)'}}>2. How We Use Your Information</h3>
          <p className="mb-3">We use the information collected to:</p>
          <ul className="mb-4" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li className="mb-2">Provide and improve our digital marketing services.</li>
            <li className="mb-2">Communicate with you regarding your project, inquiries, or account.</li>
            <li className="mb-2">Send promotional materials (you may opt-out at any time).</li>
            <li className="mb-2">Analyze website usage to enhance user experience.</li>
          </ul>

          <h3 className="heading-h4 text-primary mt-5 mb-3" style={{color: 'var(--text-primary)'}}>3. Sharing Your Information</h3>
          <p className="mb-4">
            We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting our business, provided those parties agree to keep this information confidential.
          </p>

          <h3 className="heading-h4 text-primary mt-5 mb-3" style={{color: 'var(--text-primary)'}}>4. Data Security</h3>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 className="heading-h4 text-primary mt-5 mb-3" style={{color: 'var(--text-primary)'}}>5. Your Rights</h3>
          <p className="mb-4">
            You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at <a href="mailto:contact@futureedge.in" style={{color: 'var(--accent-yellow)'}}>contact@futureedge.in</a>.
          </p>

          <h3 className="heading-h4 text-primary mt-5 mb-3" style={{color: 'var(--text-primary)'}}>6. Changes to This Policy</h3>
          <p className="mb-4">
            We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated "Effective Date."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
