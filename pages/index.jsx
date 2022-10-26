

import BookACall from "../components/BookACall";
import ClientWords from "../components/ClientWords";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import client from "../sanity/client";
import Result from "../components/Result";
import Head from 'next/head'



export default function Home({ data }) {


  const hero = data.filter((i) => i._type == 'hero')[0];
  return (
    <div className="font-nunito text-white ">
      <Head>
        <title>{ hero.websitename  }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={hero.subheading}></meta>
      </Head>
      <Hero hero={data.filter((i) => i._type == 'hero')[0]} />
      <ClientWords clientword={data.filter((i) => i._type == 'clientword')[0]} />
      <Result result={data.filter((i) => i._type == 'result')[0]} />
      <BookACall connect={data.filter((i) => i._type == 'connect')[0]} />
      <Footer footer={data.filter((i) => i._type == 'footer')[0]} />


    </div>
  )
}





export async function getStaticProps(context) {

  const query = '*[_type in ["hero","result","clientword", "connect", "footer"]]';


  const resp = await client.fetch(query);

  console.log(resp);
  return {
    revalidate: 20,
    props: {
      data: resp
    }, // will be passed to the page component as props
  }
}


