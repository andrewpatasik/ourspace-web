import { Helmet } from "react-helmet";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import { Gallery, Hero, History, Music, Timer } from "./section";
import { BackgroundColorProvider } from "./hooks/useBackgroundColor";

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>𝓯𝓸𝓻 𝓰𝓻𝓮𝓼</title>
      </Helmet>

    <BackgroundColorProvider>
      <Layout>
        <Navbar />
        <Hero />
        <History />
        <Timer />
        <Gallery />
        <Music />
        {/* <Closing /> */}
      </Layout>

    </BackgroundColorProvider>
    </>
  );
};

export default App;
