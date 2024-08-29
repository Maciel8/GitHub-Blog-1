// src/pages/ContentIssue/ContentIssue.js
import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const ContentIssue = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const [issue, setIssue] = React.useState(null);

  React.useEffect(() => {
    api
      .get(`/issues/${id}`)
      .then((response) => {
        setIssue(response.data);
      })
      .catch((e) => {
        console.log("Ops ocorreu um erro: " + e);
      });
  }, [id]);

  if (!issue) return <p>Loading...</p>;

  return (
    <div>
      <h1>{issue.title}</h1>
      <p>{issue.body}</p>
      <a href={issue.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
    </div>
  );
};

export default ContentIssue;
