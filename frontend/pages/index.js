import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="text-black bg-black">

      <Head>
        <title>HOME</title>
        <link rel="icon" href="https://toppng.com/uploads/preview/experience-the-discussion-online-library-book-logo-11562996058ru4peza6zq.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}