// src/components/Card/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import st from './Card.module.css';
import { FaArrowCircleDown } from 'react-icons/fa';

const Card = (props) => {
  return (
    <div className={st.card}>
      <div className={st.content}>
        <div className={st.title_header}>
          <h1 className={st.title}>{props.title}</h1>
          <p className={st.time}>{props.time}</p>
        </div>
        <p className={st.text}>{props.description}</p>
        <Link className={st.see_more} to={props.link}>
          <FaArrowCircleDown /> Veja mais
        </Link>
      </div>
    </div>
  );
};

export default Card;
