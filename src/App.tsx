import { Helmet } from "react-helmet";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import { Closing, Gallery, Hero, History, Music, Timer } from "./section";

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>𝓯𝓸𝓻 𝓰𝓻𝓮𝓼</title>
      </Helmet>

      <Layout>
        <Navbar />
        <Hero />
        <History/>
        <Timer />
        <Gallery />
        <Music />
        <Closing />
      </Layout>
    </>
  );
};

export default App;
