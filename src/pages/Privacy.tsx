const Privacy = () => {
  return (
    <section className="section container" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '6rem' }}>
      <h1 className="heading-h2">Privacy Policy</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Last updated: July 2026</p>
      
      <div style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>
        <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>1. Introduction</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          Welcome to Future Edge Digital Marketing. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
        </p>

        <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>2. Data We Collect</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          We may collect, use, store and transfer different kinds of personal data about you, including Identity Data, Contact Data, and Technical Data.
        </p>

        <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>3. How We Use Your Data</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our digital marketing services, manage our relationship with you, and improve our website.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
