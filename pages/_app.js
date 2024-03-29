import "tailwindcss/tailwind.css";
import "../styles/index.css";
import Nav from "../components/common/Nav/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
