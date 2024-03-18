import bg from "../img/bg.jpg";

const Presentation = () => {
  return (
    <>
      <img src={bg} alt="Изображение отсутствует" className="presentation" />
      <h2>
        <span className="description">Лучшие товары для вашего дома</span>
      </h2>
    </>
  );
};

export default Presentation;
