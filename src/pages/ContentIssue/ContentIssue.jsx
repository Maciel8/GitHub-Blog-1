// src/pages/ContentIssue/ContentIssue.js
import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import st from './ContentIssue.module.css';

const ContentIssue = () => {
  const { id } = useParams();
  const [issue, setIssue] = React.useState(null);

  React.useEffect(() => {
    api
      .get(`repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`)
      .then((response) => {
        setIssue(response.data);
      })
      .catch((e) => {
        console.log("Ops ocorreu um erro: " + e);
      });
  }, [id]);

  if (!issue) return <p className={st.title}>Loading...</p>;

  return (
    <div className={st.fundo}>
      <div className={st.content}>
        <h1 className={st.title}>{issue.title}</h1>
        <p className={st.body}>{issue.body}</p>
        <a href={issue.html_url} target="_blank" rel="noopener noreferrer" className={st.link}>
          Ver no GitHub
        </a>
      </div>
    </div>
  );
};

export default ContentIssue;
