const Terms = () => {
  return (
    <section className="section container" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '6rem' }}>
      <h1 className="heading-h2">Terms and Conditions</h1>
      
      <div style={{ color: 'var(--text-primary)', lineHeight: '1.8', marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>1. Agreement to Terms</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          By accessing our website and using our digital marketing services, you agree to be bound by these Terms and Conditions and our Privacy Policy.
        </p>

        <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>2. Services</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          Future Edge Digital Marketing provides digital marketing services, including but not limited to SEO, paid advertising, and social media management. We strive for 2x-5x performance but results may vary based on market conditions.
        </p>

        <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>3. Intellectual Property</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          The content, organization, graphics, design, compilation, and other matters related to our Site are protected under applicable copyrights and trademarks.
        </p>
      </div>
    </section>
  );
};

export default Terms;
