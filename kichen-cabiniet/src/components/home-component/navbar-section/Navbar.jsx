import "./navbar.css"


function Navbar() {
  return (
    <nav>
      <div className="logo">
        <a href="/">Kitchen Cabinets Inc.</a>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><input type="text" placeholder="Search" /></li>
        <li><a href="/cart"><i className="fas fa-shopping-cart"></i></a></li>
        <li><a href="/account"><i className="fas fa-user"></i></a></li>
      </ul>
      <div className="hamburger-menu">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;