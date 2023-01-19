import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>

      <Component {...pageProps} />
      
    </ApolloProvider>
  )
};

export default App;