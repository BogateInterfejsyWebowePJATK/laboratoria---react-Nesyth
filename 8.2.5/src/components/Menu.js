import React from "react";
import Article from "./Article";
import '../styles/Menu.scss';

function Menu({ articles }) {
  return (
    <article>
      <nav>
        <p>
          Navigation bar
        </p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header>
        <h1>Popular web browsers</h1>
      </header>
      <div className="articles">
        {articles.map((article, i) => (
          <Article key={i} {...article} />
        ))}
      </div>
      <footer>
        <p>Copyright by Bogate Interfejsy Webowe.</p>
      </footer>
    </article>
  );
}

export default Menu;
