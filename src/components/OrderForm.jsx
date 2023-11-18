import { useForm } from "react-hook-form";
import { onShowForm } from "../store/ordersSlice";
import { useDispatch } from "react-redux";

const OrderForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    alert(
      `Уважаемый ${JSON.stringify(
        data.firstName
      )}!Ваш заказ принят и обрабатывается, в ближайшее время с Вами свяжутся. Спасибо что Вы с нами!`
    );
    document.location.reload();
  };
  return (
    <>
      <div className="modal-container">
        <div
          className="modal-container__btn"
          onClick={() => dispatch(onShowForm())}
        />
        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-form__container">
            <label className="modal-form__label">Имя:</label>
            <input
              className="modal-form__input"
              {...register("firstName", {
                required: "Поле обязательно к заполнению!",
                minLength: {
                  value: 3,
                  message: "Минимум 3 символа!",
                },
                maxLength: {
                  value: 15,
                  message: "Максимум 15 символа!",
                },
              })}
            />
            <div>
              {errors?.firstName && (
                <p className="modal-form__error">
                  {errors?.firstName.message || "Error!"}
                </p>
              )}
            </div>
            <label className="modal-form__label">Фамилия:</label>
            <input
              className="modal-form__input"
              {...register("lastName", {
                required: "Поле обязательно к заполнению!",
                minLength: {
                  value: 3,
                  message: "Минимум 3 символа!",
                },
                maxLength: {
                  value: 15,
                  message: "Максимум 15 символа!",
                },
              })}
            />
            <div>
              {errors?.lastName && (
                <p className="modal-form__error">
                  {errors?.lastName.message || "Error!"}
                </p>
              )}
            </div>
            <label className="modal-form__label">Электронная почта:</label>
            <input
              className="modal-form__input"
              {...register("mail", {
                required: "Поле обязательно к заполнению!",
                pattern: {
                  value:
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                  message: "Введенный имейл не существует!",
                },
              })}
            />
            <div>
              {errors.mail && (
                <p className="modal-form__error">{errors.mail.message}</p>
              )}
            </div>
            <input
              className="modal-form__input modal-form__btn"
              type="submit"
              disabled={!isValid}
              value="Заказать"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
