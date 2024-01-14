
function BookCard(props){
    return(
        <div>
          <h2>{props.book.title}</h2>
          <h3>{props.book.description}</h3>
          <img src={props.book.cover} alt="" />
        </div>
    )
}

export default BookCard;