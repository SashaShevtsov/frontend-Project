import './style.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink
} from "react-router-dom";
import {
  NavListItems,
  AsideRateBookList,
  AsideNewsList
} from './constants.js'
import { Icon, InlineIcon } from '@iconify/react';
import bookIcon from '@iconify-icons/icomoon-free/book';
import searchIcon from '@iconify-icons/ant-design/search-outlined';
import starFillIcon from '@iconify-icons/bi/star-fill';

export default function App() {
  return (
    <body>
      <Header /> 
      <Aside />
      <Content />
    </body>
  );
}

function Header() {
  return (
    <header>
      <div className="rectangle1">
        <BookLogo />
        <NavList />
        <SearchForm />
      </div>
    </header>
  );
}

function BookLogo() {
  return (
    <div className="rectangle2">
      <Icon icon={bookIcon} className="booklogo"></Icon>
      <p className="bookspace">BOOK SPACE</p>
    </div>
  );
}

function NavList() {
  let match = useRouteMatch();

  return (
    <nav>
      { NavListItems.map((NavListItem) => (match.url == NavListItem.path) ?
      <NavLink className="menu-item menu-main-item-color" to={NavListItem.path}>{NavListItem.menuItemName}</NavLink> :
      <NavLink className="menu-item" to={NavListItem.path}>{NavListItem.menuItemName}</NavLink> 
      )}
    </nav>
  );
}

function SearchForm() {
  return (
    <form className="search-form">
      <Icon icon={searchIcon} className="searchlogo"></Icon>
      <input className="search-input" id="search" name="search" placeholder="Поиск"></input>
    </form>
  );
}

function Aside() {
  return (
    <aside>
      <AsideRateBox headtext="Рейтинг книг" headto="/rate" />
      <AsideNewsBox headtext="Новости" headto="/news" />
    </aside>
  );
}

const AsideRateBox = (props) => {
  return (
    <div className="rectangle4">
      <AsideHeaderBox headtext={props.headtext} headto={props.headto} />
      { AsideRateBookList.map((rateBook) => 
      <AsideRateBook name={rateBook.name} author={rateBook.author} rate={rateBook.rate} path={rateBook.path} />
      )}
    </div>
  );
}

const AsideNewsBox = (props) => {
  return (
    <div className="rectangle4">
      <AsideHeaderBox headtext={props.headtext} headto={props.headto} />
      { AsideNewsList.map((newsItem) => (
      <AsideNewsItem date={newsItem.date} text={newsItem.text} />
      ))}
    </div>
  );
}

const AsideHeaderBox = (props) => {
  return (
    <div className="rectangle6">
      <Link className="standard-text aside-header" to={props.headto}>{props.headtext}</Link>
    </div>
  );
}

const AsideRateBook = (props) => {
  return (
    <div className="rating-item">
      <Link className="aside-book" to={props.path}>{props.name}<br/>{props.author}</Link>
      <AsideRateValue rate={props.rate} />
    </div>
  );
}

const AsideRateValue = (props) => {
  return (
    <div class="rating-value-container">
      <Icon icon={starFillIcon} className="starlogo"></Icon>
      <p class="rating-value">{props.rate}</p>
    </div>
  );
}

const AsideNewsItem = (props) => {
  return (
    <p className="aside-news">{props.date}<br/>{props.text}</p>
  );
}

function Content() {
  return (
    <main>

    </main>
  );
}
