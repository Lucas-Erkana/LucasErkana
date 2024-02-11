import React from 'react';
import styles from './Tech.module.css';
import { DiRuby } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';
import { SiPostgresql, SiRubyonrails } from 'react-icons/si'
import { HiOutlineColorSwatch, HiLockClosed, HiOutlineDeviceTablet } from 'react-icons/hi';
import VercelIcon from '../../components/ICONS/VercelIcon'; // Update the path based on where you are importing it.
import RenderIcon from '../../components/ICONS/RenderIcon';
import GitIcon from '../../components/ICONS/GitIcon';
import GithubIcon from '../../components/ICONS/GithubIcon';
import VscodeIcon from '../../components/ICONS/VscodeIcon';
import TerminalIcon from '../../components/ICONS/TerminalIcon';
import GitlabIcon from '../../components/ICONS/GitlabIcon';
import ReactIcon from '../../components/ICONS/ReactIcon';
import JavascriptIcon from '../../components/ICONS/JavascriptIcon';
import ReduxIcon from '../../components/ICONS/ReduxIcon';
import BootstrapIcon from '../../components/ICONS/BootstrapIcon';
import SassIcon from '../../components/ICONS/SassIcon';
import CssIcon from '../../components/ICONS/CssIcon';
import HtmlIcon from '../../components/ICONS/HtmlIcon';

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
          <li> <HtmlIcon />HTML5</li>
          <li> <CssIcon /> CSS3</li>
          <li> <JavascriptIcon /> JavaScript</li>
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
