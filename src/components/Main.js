import Card from "./Card";
function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <button className="profile__edit-avatar-button" type="button" onClick={props.onEditAvatar}>
            <img className="profile__avatar" alt="Фото" src={props.userAvatar}/>
          </button>
          <div className="profile__info">
            <div className="profile__user-info">
              <h1 className="profile__name">{props.userName}</h1>
              <p className="profile__job">{props.userDescription}</p>
            </div>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {props.allCards.map((item) => {
          return <Card key={item._id} link={item.link} name={item.name} likes={item.likes} 
            onCardClick={props.onCardClick}
          />
        })}
      </section>
    </main>
  );
}

export default Main;
