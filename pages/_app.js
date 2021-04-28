import '../styles/globals.css'
import  AppState from '../Component/Context/AppContext/AppState'

function MyApp({ Component, pageProps }) {
  return (
  <>
<AppState>
<Component {...pageProps} />

</AppState>
  </>
  )
}

export default MyApp
