import "./footer.css"

function Footer  ()  {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram" />
        </a>
      </div>
      <div className="contact-info">
        <p>Email: info@kitchencabinets.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Kitchen Cabinets Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;