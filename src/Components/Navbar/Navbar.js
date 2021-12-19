import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav className="row m-0">
        <a className="col-md-4 brand-logo d-sm-none d-md-block" href="!#">Power Drive</a>
        <div className="col-md-8 col-12 d-flex justify-content-between">
          <a className="col-3 " href="!#">About </a>
          <a className="col-3 " href="!#">Pricing</a>
          <a className="col-3 " href="!#">Offers</a>
          <a className="col-3 " href="!#">Contact Us</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
