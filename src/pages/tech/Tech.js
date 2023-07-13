import React from 'react'
import styles from './Tech.module.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { DiRuby } from 'react-icons/di'
import { SiPostgresql, SiRubyonrails } from 'react-icons/si'
import { HiOutlineColorSwatch, HiLockClosed, HiOutlineDeviceTablet } from 'react-icons/hi'
import VercelIcon from '../../components/ICONS/VercelIcon'; // Update the path based on where you are importing it.
import RenderIcon from '../../components/ICONS/RenderIcon';
import GitIcon from '../../components/ICONS/GitIcon';
import GithubIcon from '../../components/ICONS/GithubIcon';
import VscodeIcon from '../../components/ICONS/VscodeIcon';
import TerminalIcon from '../../components/ICONS/TerminalIcon';
import GitlabIcon from '../../components/ICONS/GitlabIcon';
import ReactIcon from '../../components/ICONS/ReactIcon';
import JSIcon from '../../components/ICONS/JSIcon';
import ReduxIcon from '../../components/ICONS/ReduxIcon';
import BootstrapIcon from '../../components/ICONS/BootstrapIcon';
import SassIcon from '../../components/ICONS/SassIcon'

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
          <li> <JSIcon /> JavaScript</li>
          <li> <ReactIcon /> React</li>
          <li> <ReduxIcon /> Redux</li>
          <li> <BootstrapIcon /> Bootstrap</li>
          <li> <SassIcon /> Sass</li>
        </ul>
      </article>

      <article className={`${styles.container} ${styles.backContainer}`}>
        <h2>Back-end</h2>
        <ul>
          <li> <DiRuby /> Ruby</li>
          <li> <SiRubyonrails /> Rails</li>
          <li> <SiPostgresql /> PostgreSQL</li>
          <li><HiOutlineColorSwatch/> Rswag</li>
          <li><HiLockClosed/> CanCanCan</li>
          <li><HiOutlineDeviceTablet/> Devise</li>
          <li><IoLogoNodejs/> Node.js</li>
        </ul>
      </article>

      <article className={`${styles.container} ${styles.otherContainer}`}>
        <h2>Developer tools</h2>
        <ul>
          <li><GitIcon/> Git</li>
          <li><GithubIcon/> GitHub</li>
          <li><RenderIcon /> Render</li>
          <li><VercelIcon />Vercel</li>
          <li><VscodeIcon />VS Code</li>
          <li><TerminalIcon/> Terminal</li>
          <li><GitlabIcon/> GitLab</li>
        </ul>
      </article>

    </section>
    </>
  );
};

export default Tech;
