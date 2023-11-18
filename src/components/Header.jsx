import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineArrowUp, AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Orders from "./Orders";
import { Link } from "react-scroll";
import OrderForm from "./OrderForm";
import { onShowForm } from "../store/ordersSlice";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((e) => {
    sum += Number.parseFloat(e.price);
  });
  return (
    <>
      {<Orders />}
      <div className="orders-footer">
        <p className="orders-footer__summa">
          Сумма: {new Intl.NumberFormat().format(sum)}$
        </p>
        <button
          className="orders-footer__button"
          onClick={() => props.dispatch(onShowForm())}
        >
          Оформить заказ
        </button>
      </div>
    </>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2 className="empty__title">Товаров нет</h2>
    </div>
  );
};

const Header = () => {
  let [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const showForm = useSelector((state) => state.orders.showForm);
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  return (
    <>
      <header className="header" id="header">
        <span className="header__navbar-brand">House Staff</span>
        <div className="basket">
          <FaShoppingCart
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shop-cart-button ${cartOpen && "active"}`}
          />

          {cartOpen && (
            <div className="shop-cart">
              {orders.length > 0
                ? showOrders({ orders, dispatch })
                : showNothing()}
            </div>
          )}
          <div className="menu-bar">
            <AiOutlineMenu
              className="menu-bar__icon"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <nav className={`navbar ${menuOpen ? "active" : ""}`}>
            <Link
              to="categories"
              spy={true}
              smooth={true}
              offset={-25}
              duration={500}
              className="navbar__link"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Каталог
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="navbar__link"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              О нас
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="navbar__link"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Контакты
            </Link>
          </nav>
        </div>
      </header>
      <Link
        className="go-top"
        to="header"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <AiOutlineArrowUp />
      </Link>
      {showForm && <OrderForm />}
    </>
  );
};

export default Header;
