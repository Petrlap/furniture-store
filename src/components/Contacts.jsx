import { MdOutlineWatchLater } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

const Contacts = () => {
  return (
    <div className="contacts">
      <table>
        <tbody>
          <tr className="contacts-title">
            <td>Контакты</td>
          </tr>
          <tr className="contacts-body">
            <td className="contact-body_box">
              <div>
                <AiOutlinePhone className="contacts-item" />
              </div>
              <div className="contacts-box">
                <div>Звоните по телефону</div>
                <div>+375 33 6020488</div>
              </div>
            </td>
            <td className="contact-body_box">
              <div>
                <BsEnvelope className="contacts-item" />
              </div>
              <div className="contacts-box">
                <div>Пишите нам</div>
                <a href="https://mymail@mail.by" className="contacts-link">
                  mymail@mail.by
                </a>
              </div>
            </td>
          </tr>
          <tr className="operating-mode">
            <td>Режим работы</td>
          </tr>
          <tr className="contacts-body">
            <td className="contact-body_box">
              <div>
                <MdOutlineWatchLater className="contacts-item" />
              </div>
              <div className="contacts-box">
                <div>Сall-центр</div>
                <div>ежедневно с 09:00 до 21:00</div>
              </div>
            </td>
            <td className="contact-body_box">
              <div>
                <MdOutlineWatchLater className="contacts-item" />
              </div>
              <div className="contacts-box">
                <div>Доставка заказов</div>
                <div>пн-пт: с 11:00 до 23:00 сб-вс: с 11:00 до 21:00</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
