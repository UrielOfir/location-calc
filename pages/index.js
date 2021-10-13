
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Firebase from '../middleware/firebase'

import { getSortedLocationsData } from '../lib/locations'
// console.log("apiKey:", process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY);

Firebase();

export async function getStaticProps() {
  const allLocationsData = getSortedLocationsData();
  return {
    props: {
      allLocationsData
    }
  }
}

export default function Home({ allLocationsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Sign-in / Log-in</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Locations</h2>
        <ul className={utilStyles.list}>
          {allLocationsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}