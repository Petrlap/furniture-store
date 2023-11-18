import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "../store/ordersSlice";

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  return (
    <>
      {orders.map((e) => (
        <div className="order" key={e.id}>
          <img
            src={"./img/" + e.img}
            className="order__img"
            alt="Изображение отсутствует"
          />
          <h2 className="order__title">{e.title}</h2>
          <b className="order__price">{e.price}$</b>
          <FaTrash
            className="order__delete-icon"
            onClick={() => dispatch(deleteOrder(e))}
          />
        </div>
      ))}
    </>
  );
};

export default Orders;
