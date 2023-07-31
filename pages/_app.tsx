//pages\_app.tsx
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {


  useEffect(() => {
    
    function handleOffline() {
      alert('You are offline');
    };

    function handleOnline () {
      alert('You are online');
    };

    window.addEventListener('online',  handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online',  handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);   



  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
