import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
function App() {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({visible: false, link: '', name: ''});
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const handleEditAvatarClick = () => {
    setEditAvatar(true);
  };
  const handleEditProfileClick = () => {
    setEditProfile(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlace(true);
  };
  const closeAllPopups = () => {
    setEditAvatar(false);
    setAddPlace(false);
    setEditProfile(false);
    setSelectedCard({visible: false, link: '', name: ''});
  };
  const handleCardClick = (link, name) => {
    setSelectedCard({visible: true, link: link, name: name});
  }
  const getUserInfo = () => {
    api
      .getUserInfo()
      .then((response) => {
        setUserName(response.name);
        setUserDescription(response.about);
        setUserAvatar(response.avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllCards = () => {
    api
      .getAllCards()
      .then((response) => {
        setCards(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getUserInfo();
  }, []);
  React.useEffect(() => {
    getAllCards();
  }, []);
  return (
    <>
      <Header />
      <Main
        userName={userName}
        userDescription={userDescription}
        userAvatar={userAvatar}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        allCards={cards}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        textSaveButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__form-field">
              <input
                className="popup__input popup__input_name_firstname"
                type="text"
                name="firstname"
                placeholder="Ваше имя"
                required
                minLength="2"
                maxLength="40"
                id="firstname"
              />
              <span className="popup__error firstname-error">1</span>
            </label>
            <label className="popup__form-field">
              <input
                className="popup__input popup__input_name_job"
                type="text"
                name="job"
                placeholder="О себе"
                required
                minLength="2"
                maxLength="200"
                id="job"
              />
              <span className="popup__error job-error">1</span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name="add"
        title="Новое место"
        textSaveButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__form-field">
              <input
                className="popup__input popup__input_name_name"
                type="text"
                name="name"
                placeholder="Название"
                id="name"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="popup__error name-error">1</span>
            </label>
            <label className="popup__form-field">
              <input
                className="popup__input popup__input_name_link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                id="link"
                required
              />
              <span className="popup__error link-error">1</span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        textSaveButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__form-field">
              <input
                className="popup__input popup__input_name_avatarLink"
                type="url"
                name="avatarLink"
                placeholder="Ссылка на новое фото"
                id="avatarLink"
                required
              />
              <span className="popup__error avatarLink-error">1</span>
            </label>
          </>
        }
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Footer />
      <div className="popup popup_type_delete-card">
        <div className="popup__container popup__container_type_delete-card">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_type_delete-card">
            Вы уверены?
          </h2>
          <button className="popup__save-button button-style" type="button">
            Да
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
