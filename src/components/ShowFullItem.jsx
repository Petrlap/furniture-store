import { useDispatch, useSelector } from "react-redux";
import { onShowItem } from "../store/itemsSlice";
import { addToOrder } from "../store/ordersSlice";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowFullItem = () => {
  const addOrder = () => toast.success("Товар добавлен в корзину!");
  const item = useSelector((state) => state.items.fullItem);
  const dispatch = useDispatch();
  return (
    <div className="full-item">
      <div
        className="full-item__close-btn"
        onClick={() => dispatch(onShowItem(item))}
      />
      <div className="full-item__container">
        <img
          src={"./img/" + item.img}
          alt="Изображение отсутствует"
          className="full-item__img"
          onClick={() => dispatch(onShowItem(item))}
        />
        <h2 className="full-item__title">{item.title}</h2>
        <p className="full-item__desc">{item.desc}</p>
        <b className="full-item__price">{item.price}$</b>
        <HiMiniPlusSmall
          className="add-to-cart"
          onClick={() => {
            dispatch(addToOrder(item));
            addOrder();
          }}
        />
      </div>
    </div>
  );
};

export default ShowFullItem;
