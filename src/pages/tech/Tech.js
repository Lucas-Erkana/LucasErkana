import React from 'react'
import styles from './Tech.module.css'
import { AiFillHtml5, AiFillGitlab, AiFillGithub } from 'react-icons/ai'
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { TbBrandJavascript, TbBrandRedux } from 'react-icons/tb'
import { DiReact, DiRuby } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { FiFramer } from 'react-icons/fi'
import {  SiPostman, SiVisualstudiocode, SiNetlify, SiPostgresql, SiRubyonrails, SiHeroku,SiAuth0 } from 'react-icons/si'
import { HiOutlineColorSwatch, HiLockClosed, HiOutlineDeviceTablet } from 'react-icons/hi'
import { BsGit, BsFillTerminalFill } from 'react-icons/bs'
import { SiSass } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'




const Tech = () => {
  return (
    <>
    <section className={styles.techHead}>
      <h1>My Skills</h1>
      <p>Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!</p>
    </section>
    <section className={styles.wrapper}>
     
      <article className={`${styles.container} ${styles.frontContainer}`}>
        <h2>Front-end</h2>
        <ul>
          <li> <AiFillHtml5 />HTML5</li>
          <li> <IoLogoCss3 /> CSS3</li>
          <li> <TbBrandJavascript /> JavaScript</li>
          <li> <DiReact /> React</li>
          <li> <SiRedux /> Redux</li>
          <li> <FaBootstrap /> Bootstrap</li>
          <li> <SiSass /> Sass</li>
          <li> <FiFramer /> Framer Motion</li>

        </ul>
      </article>

      <article className={`${styles.container} ${styles.backContainer}`}>
        <h2>Back-end</h2>
        <ul>
          <li> <DiRuby /> Ruby</li>
          <li> <SiRubyonrails /> Rails</li>
          <li> <SiPostgresql /> PostgreSQL</li>
          <li><SiAuth0/> JWT</li>
          <li><HiOutlineColorSwatch/> Rswag</li>
          <li><HiLockClosed/> CanCanCan</li>
          <li><HiOutlineDeviceTablet/> Devise</li>
          <li><IoLogoNodejs/> Node.js</li>
        </ul>
      </article>

      <article className={`${styles.container} ${styles.otherContainer}`}>
        <h2>Developer tools</h2>
        <ul>
        <li><BsGit/> Git</li>
          <li><AiFillGithub/> GitHub</li>
          <li><SiHeroku/> Heroku</li>
          <li> <SiNetlify/> Netlify</li>
          <li><SiPostman/> Postman</li>
          <li><SiVisualstudiocode />VS Code</li>
          <li><BsFillTerminalFill/> Terminal</li>
          <li><AiFillGitlab/> GitLab</li>
        </ul>
      </article>



    </section>
    </>
  );
};

export default Tech;