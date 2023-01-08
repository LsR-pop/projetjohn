import "@/globals.css"
import ContextProvider from "@/components/contextprovider"

export default function App({Component, pageProps }) {
  return (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
  )
}
