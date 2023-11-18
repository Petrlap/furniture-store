import { useSelector, useDispatch } from "react-redux";
import { addToOrder } from "../store/ordersSlice";
import { onShowItem } from "../store/itemsSlice";
import ShowFullItem from "./ShowFullItem";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Items = () => {
  const addOrder = () => toast.success("Товар добавлен в корзину!");
  const items = useSelector((state) => state.items.currentItems);
  const showFullItem = useSelector((state) => state.items.showFullItem);
  const dispatch = useDispatch();

  return (
    <main className="main">
      {items.map((e) => (
        <div key={e.id} className="item">
          <img
            src={"./img/" + e.img}
            alt="Изображение отсутствует"
            className="item__img"
            onClick={() => dispatch(onShowItem(e))}
          />
          <h2 className="item__title">{e.title}</h2>
          <p className="item__desc">{e.desc}</p>
          <b className="item__price">{e.price}$</b>
          <HiMiniPlusSmall
            className="add-to-cart"
            onClick={() => {
              dispatch(addToOrder(e));
              addOrder();
            }}
          />
          <ToastContainer
            position="bottom-left"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </div>
      ))}
      {showFullItem && <ShowFullItem />}
    </main>
  );
};

export default Items;
