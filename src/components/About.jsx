import { RiDoubleQuotesL } from "react-icons/ri";
import { GrNext, GrPrevious } from "react-icons/gr";
import block3 from "../img/block-3.jpg";
import block2 from "../img/block-2.jpg";
import block11 from "../img/block-1-1.jpg";
import block12 from "../img/block-1-2.jpg";
import block13 from "../img/block-1-3.jpg";

const About = () => {
  const toPrev = () => {
    let lists = document.querySelectorAll(".carousel-item");
    document.getElementById("carousel-inner").appendChild(lists[0]);
  };
  const toNext = () => {
    let lists = document.querySelectorAll(".carousel-item");
    document.getElementById("carousel-inner").prepend(lists[lists.length - 1]);
  };
  return (
    <>
      <div className="about" id="about">
        <div className="about__quotes">
          <RiDoubleQuotesL />
        </div>
        Наша цель — воплотить в жизнь ваши мечты об интерьере. Обустраивайте
        свой дом. Создавайте обстановку, которая делает будни ярче!
      </div>
      <div className="block-info">
        <h2 className="block-info__title">Обстановка со вкусом</h2>
        <div className="block-info__text">
          Мы делаем дизайнерскую мебель для реальных квартир. Мы ценим
          индивидуальный стиль и хотим помочь оформить дом так, чтобы он отражал
          ваш вкус в интерьере. Наши клиенты — сотни тысяч людей, готовых
          делиться своими решениями: планировкой, выбранной мебелью, вариантами
          стилизации. Ищите идеи и создавайте окружающую обстановку, которая
          будет вдохновлять каждый день!
        </div>
        <div className="carousel">
          <div className="carousel-inner" id="carousel-inner">
            <div className="carousel-item">
              <img src={block11} alt="Image_1" />
            </div>
            <div className="carousel-item">
              <img src={block12} alt="Image_2" />
            </div>
            <div className="carousel-item">
              <img src={block13} alt="Image_3" />
            </div>
          </div>
          <div className="carousel_buttons">
            <GrPrevious className="carousel_button" onClick={() => toPrev()} />
            <GrNext className="carousel_button" onClick={() => toNext()} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__view">
          <img
            src={block2}
            loading="lazy"
            decoding="async"
            className="section__img"
            alt="Интерьер"
          />
        </div>
        <div className="section__block">
          <div className="section__title">Объединяем все нужное</div>
          <div className="section__text">
            Актуальный ассортимент позволит легко обустроить любую комнату.
            Мягкая мебель с лаконичным европейским дизайном, коллекция кроватей
            с трендовыми обивками и товары для сна собственной марки, стильные
            системы хранения, современные решения для кухонь и студий. Все для
            дома — в одном месте!
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__block-rev">
          <div className="section__title">Изменения — это просто</div>
          <div className="section__text">
            Не подходит базовое решение? Давайте его изменим! Основные товары
            нашей витрины можно кастомизировать: выбрать обивку дивана в цвет
            штор или с легкой чисткой, спланировать наполнение шкафа для большой
            семьи так, чтобы было удобно всем, укомплектовать кровать подъемным
            механизмом для хранения самого нужного. С нашим online-конструктором
            это легко, попробуйте!
          </div>
        </div>
        <div className="section__view">
          <img
            src={block3}
            loading="lazy"
            decoding="async"
            className="section__img"
            alt="Интерьер"
          />
        </div>
      </div>
    </>
  );
};

export default About;
