import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Header({ onCartOpen }) {
  const { cartCount } = useCart();

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
  };

  return (
    <>
      {/* ========================================
          DESKTOP HEADER
      ======================================== */}

      <header className="header">
        <Link to="/" className="header-logo">
          VOIDBASS
        </Link>

        <nav className="header-nav">
          <Link to="/products">SHOP</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        <button
          className="header-cart"
          type="button"
          onClick={onCartOpen}
          aria-label="Open cart"
        >
          <FiShoppingBag size={20} />

          {cartCount > 0 && (
            <span className="header-cart-count">{cartCount}</span>
          )}
        </button>
      </header>

      {/* ========================================
          MOBILE HEADER
      ======================================== */}

      <nav className="mobile-nav">
        {/* MENU */}
        <button
          className="mobile-menu-button"
          aria-label="Open menu"
          onClick={() => {
            document.body.classList.toggle("menu-open");
          }}
        >
          <span></span>
          <span></span>
        </button>

        {/* LOGO */}
        <Link to="/" className="mobile-nav-logo">
          VOIDBASS
        </Link>

        {/* CART */}
        <button
          className="mobile-nav-cart"
          type="button"
          onClick={onCartOpen}
          aria-label="Open cart"
        >
          <FiShoppingBag size={19} />

          {cartCount > 0 && (
            <span className="mobile-nav-cart-count">{cartCount}</span>
          )}
        </button>
      </nav>

      {/* ========================================
          MOBILE MENU
      ======================================== */}

      <div className="mobile-menu">
        <div className="mobile-menu-inner">
          <div className="mobile-menu-label">MENU / VOIDBASS</div>

          <div className="mobile-menu-links">
            <Link to="/" onClick={closeMenu}>
              HOME
              <span>01</span>
            </Link>

            <Link to="/about" onClick={closeMenu}>
              ABOUT
              <span>02</span>
            </Link>

            <Link to="/products" onClick={closeMenu}>
              PRODUCTS
              <span>03</span>
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              CONTACT
              <span>04</span>
            </Link>
          </div>

          <div className="mobile-menu-footer">
            <span>PRECISION AUDIO</span>
            <span>© VOIDBASS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
