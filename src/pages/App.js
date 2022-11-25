import {Header} from "../components/Header";
import {ToDos} from "../components/ToDos";
import {Footer} from "../components/Footer";
import {SharedStateProvider} from "../store";

function App() {
  return (
    <>
      <Header showButton={true} />
      <SharedStateProvider>
        <ToDos />
      </SharedStateProvider>
      <Footer />
    </>
  )
}

export default App;
