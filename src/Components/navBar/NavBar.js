import CartWidget from "../cartWidget/CartWidget";
import "../navBar/Navbar.css"
import ColorSchemesExample from "../ColorSchemesExample";


const NavBar = () =>{
    return (
        <div className="navbar-container">
        <div className="container-logo">
          <img
            className="logo-navbar"
            src= "https://res.cloudinary.com/dabjc3dh1/image/upload/v1669835427/image_processing20200511-25230-o4usyd_soginq.png" alt=""
          />
        </div>
        <ColorSchemesExample/>
        <CartWidget />
      </div>
    );
  };

export default NavBar;
 