import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav className="row m-0">
        <a className="col-4" href="!#">Power Drive</a>
        <div className="col-8 d-flex justify-content-between">
          <a className="col-2 " href="!#">About </a>
          <a className="col-2 " href="!#">Pricing</a>
          <a className="col-2 " href="!#">Offers</a>
          <a className="col-3 " href="!#">Our trainers</a>
          <a className="col-3 " href="!#">Contact Us</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
