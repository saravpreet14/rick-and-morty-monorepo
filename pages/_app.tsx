import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { onError } from "@apollo/client/link/error";
import { Provider } from "next-auth/client";

// const client = new ApolloClient({
//   uri: "https://48p1r2roz4.sse.codesandbox.io",
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
  // link: errorLink,
});

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':
      console.log("FCP",metric);
      break
    case 'LCP':
      // handle LCP results
      console.log("LCP",metric);
      break
    case 'CLS':
      // handle CLS results
      console.log("CLS",metric);
      break
    case 'FID':
      // handle FID results
      console.log("FID",metric);
      break
    case 'TTFB':
      // handle TTFB results
      console.log("TTFB",metric);
      break
    default:
      break
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
