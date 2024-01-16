

function BookCard(props){
    return(
        <div className="product-card">
          <h2 className="product-title">{props.book.title}</h2>
          <h3 className="product-price">{props.book.description}</h3>
          <img className="product-image" src={props.book.cover} alt="" />
          <button onClick={()=>{props.dltBook(props.book)}} className="product-button">delete</button>
        </div>
    )
}

export default BookCard;