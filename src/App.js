import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useEffect, useRef, useState } from "react";

// HeaderScroll and Abc components increasing the performance. Otherwise while we are scrollin render againg and again entire tree of the App. js.

const HeaderScroll = () => {
  const [prevScrollVal, setPrevScrollVal] = useState(0);
  const visible = useRef(true);

  const handleScroll = () => {
    const currentScrollVal = window.scrollY;
    visible.current = currentScrollVal < prevScrollVal;
    setPrevScrollVal(currentScrollVal);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [prevScrollVal]);

  return (
    <div>
      <Abc data={visible.current} />
    </div>
  );
};

const Abc = (props) => {
  const data2 = props.data;

  return <div>{data2 ? <Header /> : null}</div>;
};

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <HeaderScroll />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
