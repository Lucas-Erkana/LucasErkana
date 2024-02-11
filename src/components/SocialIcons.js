const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "1.5rem",
      padding: "10px",
    
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/Lucas-Erkana"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Lucas Erkana's GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/lucas-erkana/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Lucas Erkana's LinkedIn Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://twitter.com/Lucas_David_22"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Lucas Erkana's Twitter Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://wellfound.com/u/lucas-erkana"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa-brands fa-angellist"
          aria-hidden="true"
          title="Lucas Erkana's Wellfound Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="tel:+264811601012"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa-solid fa-mobile-screen-button"
          aria-hidden="true"
          title="Lucas Erkana's Whats app"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
