import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { AppProps,NextWebVitalsMetric } from "next/app";
import { onError } from "@apollo/client/link/error";
import { Provider } from "next-auth/client";
import axios from 'axios';
import printReadings from '../readings.js'

// const client = new ApolloClient({
//   uri: "https://48p1r2roz4.sse.codesandbox.io",
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
  // link: errorLink,
});

const readingsDatabse = "https://ricky-and-morty-project-default-rtdb.asia-southeast1.firebasedatabase.app/NextApp";

 export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (['FCP', 'LCP', 'CLS', 'FID', 'TTFB'].includes(metric.name)) {
    console.log(metric.name, metric.value);
    axios.post(`${readingsDatabse}/${metric.name}.json`, metric.value);
    printReadings(readingsDatabse + '.json');
  }
}
  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={client}>
      
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}



export default MyApp;
