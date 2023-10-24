import { Helmet } from "react-helmet";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import { Closing, Gallery, Hero, History, Music, Timer } from "./section";
import { BackgroundColorProvider } from "./hooks/useBackgroundColor";

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>𝓱𝓪𝓹𝓹𝔂 𝓫𝓲𝓻𝓽𝓱𝓭𝓪𝔂 𝓰𝓻𝓮𝓼</title>
      </Helmet>

    <BackgroundColorProvider>
      <Layout>
        <Navbar />
        <Hero />
        <History />
        <Timer />
        <Gallery />
        <Music />
        <Closing />
      </Layout>
    </BackgroundColorProvider>
    </>
  );
};

export default App;
