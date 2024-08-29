// src/pages/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import st from "./Home.module.css";
import api from '../../services/api';

function Home() {
  const [listCards, setListCards] = React.useState([]);

  React.useEffect(() => {
    api
      .get('search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge')
      .then((response) => {
        setListCards(response.data.items);
      })
      .catch((e) => {
        console.log("Ops ocorreu um erro: " + e);
      });
  }, []);

  return (
    <div className={st.fundo}>
      <div className={st.content}>
        <Header />
        <div className={st.cards}>
          {listCards.length > 0 ? (
            listCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                time="a 2 horinha"
                description={card.body}
                link={`/issue/${card.number}`}
              />
            ))
          ) : (
            <p>No cards available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
