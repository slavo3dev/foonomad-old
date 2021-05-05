import '../styles/globals.css'
import { LayoutComponent } from "../componets"

function MyApp({Component,pageProps}) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent >
  )
  }

export default MyApp
