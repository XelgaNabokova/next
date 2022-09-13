import Head from 'next/head';
import Heading from "../components/Heading";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text='Hello world!'/>
    </>
  ) 
};
 
export default Home;