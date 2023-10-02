import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_edit">
        <div className="popup__container popup__container_type_edit">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_type_edit">
            Редактировать профиль
          </h2>
          <form
            className="popup__form popup__form_type_edit"
            name="userForm"
            method="post"
            novalidate
          >
            <label className="popup__form-field">
              <input
                className="popup__input popup__input_name_firstname"
                type="text"
                name="firstname"
                placeholder="Ваше имя"
                required
                minlength="2"
                maxlength="40"
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
                minlength="2"
                maxlength="200"
                id="job"
              />
              <span className="popup__error job-error">1</span>
            </label>
            <button className="popup__save-button button-style" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container popup__container_type_add">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_type_add">Новое место</h2>
          <form
            className="popup__form popup__form_type_add"
            name="userForm"
            method="post"
            novalidate
          >
            <label className="popup__form-field">
              <input
                className="popup__input popup__input_name_name"
                type="text"
                name="name"
                placeholder="Название"
                id="name"
                required
                minlength="2"
                maxlength="30"
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
            <button className="popup__save-button button-style" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_card">
        <div className="popup__container popup__container_type_card">
          <button className="popup__close-button" type="button"></button>
          <img className="popup__photo" />
          <h2 className="popup__title popup__title_type_card"></h2>
        </div>
      </div>
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
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container popup__container_type_edit-avatar">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_type_edit-avatar">
            Обновить аватар
          </h2>
          <form
            className="popup__form popup__form_type_edit-avatar"
            name="userForm"
            method="post"
            novalidate
          >
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
            <button className="popup__save-button button-style" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <template id="template-elements__element">
        <div className="elements__element">
          <button
            className="elements__delete-button button-style"
            type="button"
          ></button>
          <img className="elements__photo" />
          <div className="elements__description">
            <h2 className="elements__title"></h2>
            <div className="elements__like">
              <button className="elements__like-button" type="button"></button>
              <p className="elements__like-count"></p>
            </div>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
