import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/portfolio1.png";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "90%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
      fontSize: "6rem",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      {/* <Draw /> */}
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            options={{
              strings: [
                "I'm a <span class='blue'>Full-stack developer</span>",
                "I'm a <span class='blue'>Designer</span>",
                "Bringing your ideas to life",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
              deleteChars: 5,
            }}
          />
        </div>



      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Lucas Erkana"
        />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
