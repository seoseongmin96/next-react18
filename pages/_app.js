import {Layout} from "./common";
import { wrapper } from '../redux/store.ts'
import Head from 'next/head'
import { useEffect, useState } from "react";
const App = ({ Component, pageProps}) => {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  })
  if (!showChild) { return null }
  return (<>
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" 
      content="width=device-width, user-scalable=no, 
      initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Soccer App</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default wrapper.withRedux(App)




