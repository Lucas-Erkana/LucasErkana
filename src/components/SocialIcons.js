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
        href="https://github.com/Lucash2022"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Lucas Erkana' GitHub Profile"
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
          title="Lucas Erkana' LinkedIn Profile"
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
          title="Lucas Erkana' Twitter Profile"
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
          title="Lucas Erkana' Wellfound Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
