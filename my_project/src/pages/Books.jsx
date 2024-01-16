import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import './books.css'

// {
//     title: 'The First Chapter',
//     cover: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
//     description: 'long description of the first chapter'
// },
// {
//     title: 'The Second Chapter',
//     cover: 'data:image/jpeg;base64,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',
//     description: 'long description of the second chapter'
// },
// {
//     title: 'The Third Chapter',
//     cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
//     description: 'long description of the third chapter'
// }    {title: 'The First Chapter',
        // cover: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
        //  description: 'long description of the first chapter'}
function Books() {
    const [books,setBooks] = useState([]);
    const [book,setBook] = useState({});
    // const booksArrayLocalStorage = JSON.parse(localStorage.getItem('books')) || [];

    const ChangeHandler=(e)=>{
        book[e.target.name]=e.target.value
        setBook({...book})
    }
    const SubmitHandler=(e)=>{
        e.preventDefault()
        book.id=Math.random()*21000
        // console.log([...books]);
        // localStorage.setItem('books',JSON.stringify(books));
        setBooks([...books, {...book}])
    }
    useEffect(()=>{
        const bookData = JSON.parse(localStorage.getItem('books')) ;
        if (bookData) {
            setBooks(bookData)
        }
        // console.log(booksArrayLocalStorage);
    },
    [])
    // localStorage.clear()
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books])
    
        // console.log(removeBook);
        // btnClass.forEach((btn,i) => {
            // btn.addEventListener('click',()=>{})
            // let popIt = books.indexOf(element.title)
            // console.log(popIt);
            // if(element.title==books[i].title){
            //     console.log(element.title);
            //     console.log(books[i].title);
                // console.log(popIt);
                // books.pop(books[i])
                // console.log(element);
            // }
            // setBooks([...books])
        // });
        const dltBook = (book)=>{
            const filteredBook = books.filter(item =>{
                return item.id !== book.id
            });
            setBooks(filteredBook)
        }
    return (
        <div >
              <form onSubmit={SubmitHandler}>
                    <input onChange={ChangeHandler} type="text"  name="title"/>
                    <input onChange={ChangeHandler} type="text"  name="description"/>
                    <input onChange={ChangeHandler} type="text"  name="cover"/>
                    <button type="submit">Add Book</button>
                </form>
        {  books.map((book, index) => {
            return<> 
            <BookCard dltBook={dltBook} book={book} key={`bk_${index}`} />
            {/* <button key={index} dltBook={dltBook} className="btnClass">remove book</button> */}
            </>
        })}
        </div>
    )
}


export default Books;