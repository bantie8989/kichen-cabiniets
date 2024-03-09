import "./hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transform Your Kitchen with Our Custom Cabinets</h1>
        <p>We offer high-quality, custom-made kitchen cabinets that will make your dream kitchen a reality.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="assets/products/ai-generated-8507931_1280.jpg" alt="Kitchen Cabinets" />
      </div>
    </section>
  );
};

export default Hero;
