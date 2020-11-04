import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Prompt,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { useState } from 'react';

function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={props} />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props} />
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={props} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

function Header() {
  return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
        <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
        <li><NavLink activeClassName="active" to="/find-book">Find Book</NavLink></li>
        <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
      </ul>

    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Products({ bookFacade }) {
  const books = bookFacade.bookFacade.getBooks();
  let { path, url } = useRouteMatch();
  const listBooks = books.map((book, index) => {
    return <li key={index}>{book.title} - <NavLink to={`${url}/${book.id}`}>details</NavLink></li>;
  })
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {listBooks}
      </ul>
      <Route path={`${path}/:bookId`}>
        <Details bookFacade={bookFacade} />
      </Route>
    </div>
  )
}

function Details({ bookFacade }) {
  let { bookId } = useParams();
  const book = bookFacade.bookFacade.findBook(bookId);
  return (
    <div>
      <p>Title: {book.title}</p>
      <p>ID: {book.id}</p>
      <p>Info: {book.info}</p>
    </div>
  )
}

function AddBook({ bookFacade }) {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  let [isBlocking, setIsBlocking] = useState(false);

  const book = {
    title,
    info
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    setIsBlocking(false);
    bookFacade.bookFacade.addBook(book);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add title" onChange={event => {
          setTitle(event.target.value)
          setIsBlocking(event.target.value.length > 0);
        }} /> <br />
        <input type="text" placeholder="Add info" onChange={event => {
          setInfo(event.target.value)
          setIsBlocking(event.target.value.length > 0);
        }} /> <br />
        <button type="submit">Save</button>
      </form>

      <Prompt
        when={isBlocking}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
    </div>
  )
}

function FindBook({ bookFacade }) {

  const [bookId, setBookId] = useState(101);
  const [book, setBook] = useState({
    id: 0,
    title: "",
    info: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    setBook(bookFacade.bookFacade.findBook(bookId))
  }

  function deleteBook() {
    bookFacade.bookFacade.deleteBook(bookId);
  }
  return (
    <div>
      <h3>Her kan du finde din bog</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter book ID" onChange={event => setBookId(event.target.value)} />
        <button type="submit">Find Book</button>
      </form>

      <p>ID: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Info: {book.info}</p>
      <button type="button" onClick={deleteBook}>Delete</button>
    </div>
  )
}

function Company() {
  return (
    <div>
      <h2>Company</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Couldn't find path</h2>
    </div>
  )
}

export default App;
