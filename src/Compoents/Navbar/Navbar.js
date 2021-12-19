import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="!#">Power Drive gyms</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="!#">About </a>
            <a className="nav-item nav-link" href="!#">Who we are</a>
            <a className="nav-item nav-link" href="!#">Pricing</a>
            <a className="nav-item nav-link " href="!#">Offers</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
