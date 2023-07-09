import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Lucas Erkana",
    location: "Walvis Bay, Namibia",
    email: "lderkana21x@gmail.com",
    availability: "Open for work",
    brand:
      "I have a solid foundation as a computer science teacher, specializing in HTML/CSS, Python, PHP, and JavaScript, which grants me a distinctive advantage in crafting user-centered experiences as a full stack developer.",
    CTA: "I firmly believe that my technical expertise, creative thinking, and innate eye for design converge harmoniously, allowing me to deliver innovative solutions that deeply resonate with users. Collaborating with me means breathing life into your digital projects and witnessing them flourish beyond your expectations. Let's join forces and embark on a journey of transforming ideas into extraordinary digital experiences!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
