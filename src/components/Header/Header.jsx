import React, { useState, useEffect } from 'react';
import st from './Header.module.css'
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import api from '../../services/api'

const Header = () => {
  const [user, setUSer] = useState();
  
  useEffect(() => {
    api
      .get('/users/andrebarros1')
      .then((response) => setUSer(response.data))
      .catch((e) => {
        console.log("Ops ocorreu um erro: " + e)
      })
  }, [])
  
  return (
    <div className={st.header}>
        <img src={user?.avatar_url} alt="Foto perfill" />
        <div className={st.content}>
            <div className={st.name_github}>
                <h1>{user?.login}</h1>
                <a href={user?.html_url}><IoLogoGithub />GitHub</a>
            </div>
            <p>{user?.bio}</p>
            <div className={st.links}>
                <a href={user?.html_url}><IoLogoGithub/> {user?.login}</a>
                <a href="#"><IoPeopleSharp /> {user?.followers} seguidores</a>
            </div>
        </div>
    </div>
  )
}

export default Header