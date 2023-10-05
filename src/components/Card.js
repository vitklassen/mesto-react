function Card(props) {
    function handleClick() {
      props.onCardClick(props.link, props.name);
    }
    return (
        <div className="elements__element">
          <button
            className="elements__delete-button button-style"
            type="button"
          ></button>
          <img className="elements__photo" src={props.link} onClick={handleClick} alt={props.name}/>
          <div className="elements__description">
            <h2 className="elements__title">{props.name}</h2>
            <div className="elements__like">
              <button className="elements__like-button" type="button"></button>
              <p className="elements__like-count">{props.likes.length}</p>
            </div>
          </div>
        </div>
    );
}

export default Card;