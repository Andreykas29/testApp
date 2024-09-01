import Header from "./components/Header";
import Banner from "./components/Banner";
import Values from "./components/Values/Values";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer";
import LatestPosts from './components/posts/LatestPosts';
import { AuthContextProvider } from "./components/modal/ModalContext";




function App() {
  return (
    <>
    <AuthContextProvider>
      <Header/>
    </AuthContextProvider>
    <Banner/>
    <LatestPosts/>
    <Values/>
    <Slider/>
    <Footer/>
    </>
  );
}

export default App;
