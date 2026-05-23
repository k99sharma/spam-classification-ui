import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ContentBox from "./components/ContentBox";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Info
        text={
          "Cold Start Notice: The backend may take up to 1 minute to respond after inactivity."
        }
      />

      <div className="app p-3 bg-zinc-100 h-screen">
        <div className="app__navbar">
          <Navbar />
        </div>

        <div className="app__layout my-10">
          <div className="app__layout__header mb-10">
            <Header />
          </div>

          <div className="app_layout__input flex flex-col items-center justify-center">
            <ContentBox />
          </div>
        </div>

        <div className="app__footer mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
