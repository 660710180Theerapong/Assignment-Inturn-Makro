import "@/styles/globals.css";
import NavBar from "../src/components/NavBar";

export default function App({ Component, pageProps }) {
  return( 
    <NavBar>
      <Component {...pageProps} />;
    </NavBar>
    
)
}
