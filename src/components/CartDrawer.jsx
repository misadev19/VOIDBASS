import { useEffect, useRef } from "react";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import gsap from "gsap";
import { useCart } from "../context/CartContext";

function CartDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);

  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  // CHECKOUT
  const handleCheckout = () => {
    alert("This is a demo site.\nCheckout is not available.");
  };

  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto",
      });

      gsap.to(drawerRef.current, {
        x: "0%",
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "";

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none",
      });

      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* OVERLAY */}
      <div ref={overlayRef} className="cart-overlay" onClick={onClose} />

      {/* DRAWER */}
      <aside ref={drawerRef} className="cart-drawer" aria-hidden={!isOpen}>
        {/* HEADER */}
        <div className="cart-header">
          <h2>CART</h2>

          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>

              <button type="button" onClick={onClose} className="cart-continue">
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <>
              {/* ITEMS */}
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    {/* IMAGE */}
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    {/* INFO */}
                    <div className="cart-item-info">
                      <div className="cart-item-top">
                        <div>
                          <p className="cart-item-name">{item.name}</p>

                          <p className="cart-item-category">{item.category}</p>
                        </div>

                        {/* REMOVE */}
                        <button
                          type="button"
                          className="cart-remove"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>

                      {/* PRICE */}
                      <p className="cart-item-price">
                        ¥{item.price.toLocaleString()}
                      </p>

                      {/* BOTTOM */}
                      <div className="cart-item-bottom">
                        {/* QUANTITY */}
                        <div className="cart-quantity-control">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <FiMinus size={14} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <FiPlus size={14} />
                          </button>
                        </div>

                        {/* SUBTOTAL */}
                        <p className="cart-item-subtotal">
                          ¥{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="cart-footer">
                <div className="cart-total">
                  <span>TOTAL</span>

                  <strong>¥{cartTotal.toLocaleString()}</strong>
                </div>

                <button
                  type="button"
                  className="cart-checkout"
                  onClick={handleCheckout}
                >
                  CHECKOUT
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
