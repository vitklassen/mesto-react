function Main() {

  function handleEditAvatarClick() {
    
  }
  function handleEditProfileClick() {

  }
  function handleAddPlaceClick() {

  }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <button className="profile__edit-avatar-button" type="button">
            <img className="profile__avatar" alt="Фото" />
          </button>
          <div className="profile__info">
            <div className="profile__user-info">
              <h1 className="profile__name"></h1>
              <p className="profile__job"></p>
            </div>
            <button className="profile__edit-button" type="button"></button>
          </div>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
