import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="!#">Power Drive</a>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="!#">About </a>
          <a className="nav-item nav-link" href="!#">Pricing</a>
          <a className="nav-item nav-link " href="!#">Offers</a>
          <a className="nav-item nav-link " href="!#">Our trainers</a>
          <a className="nav-item nav-link " href="!#">Contact Us</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
