import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav className="row m-0">
        <a className="col-md-4 brand-logo d-sm-none d-md-block" href="!#">Power Drive</a>
        <div className="col-md-8 col-12 d-flex justify-content-between">
          <a className="col-2 " href="!#">About </a>
          <a className="col-2 " href="!#">Pricing</a>
          <a className="col-2 " href="!#">Offers</a>
          <a className="col-4 " href="!#">Contact Us</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
