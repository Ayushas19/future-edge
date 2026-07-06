const Courses = () => {
  return (
    <section className="section container">
      <div className="heading-center-wrapper" style={{ marginTop: '4rem' }}>
        <span className="text-overline">Education</span>
        <h1 className="heading-h2">Digital Marketing Courses</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Learn from industry experts with our comprehensive digital marketing courses. Master SEO, SMM, and Performance Marketing.
        </p>
      </div>
      
      <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--accent-yellow)', marginBottom: '1rem' }}>Coming Soon</h3>
        <p style={{ color: 'var(--text-secondary)' }}>We are currently updating our course catalog. Please check back later.</p>
        <br />
        <a href="tel:+916393213527" className="btn btn-primary">Contact Us for Details</a>
      </div>
    </section>
  );
};

export default Courses;
