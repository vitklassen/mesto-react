import React from "react";
import PopupWithForm from "./PopupWithForm";
function AddPlacePopup(props) {
    const name = React.useRef();
    const link = React.useRef();
    function handleSubmit(e) {
      e.preventDefault();
      props.onAddPlace({
      name: name.current.value,
      link: link.current.value
    });
    }
    React.useEffect(() => {
      name.current.value = '';
      link.current.value = '';
    }, [props.isOpen]);
    return (
        <PopupWithForm
          name="add"
          title="Новое место"
          textSaveButton="Создать"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
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
                  ref={name}
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
                  ref={link}
                />
                <span className="popup__error link-error">1</span>
              </label>
            </>
          }
        />
    )
}

export default AddPlacePopup;