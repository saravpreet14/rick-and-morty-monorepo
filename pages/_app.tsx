import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { AppProps,NextWebVitalsMetric } from "next/app";
// import { onError } from "@apollo/client/link/error";
// import { Provider } from "next-auth/client";
// import axios from 'axios';
import printReadings from '../lib/readings.js'
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
  // link: errorLink,
});

const readingsDatabse = "https://ricky-and-morty-project-default-rtdb.asia-southeast1.firebasedatabase.app/NextApp";

 export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (['FCP', 'LCP', 'CLS', 'FID', 'TTFB'].includes(metric.name)) {
    console.log(metric.name, metric.value);
    // axios.post(`${readingsDatabse}/${metric.name}.json`, metric.value).catch(() => null);
    fetch(`${readingsDatabse}/${metric.name}.json`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: `${metric.value.toFixed(6)}`
    })
    printReadings(readingsDatabse + '.json');
  }
 }
  

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
  );
}



export default MyApp;
