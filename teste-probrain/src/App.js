import GlobalState from "./globalState/globalState";
import HomePage from "./pages/homePage/homePage";
import { Div, Footer } from "./styles";

function App() {
  return (
    <GlobalState>
      <Div>
        <HomePage/>
        <Footer/>
      </Div>
    </GlobalState>
  );
}

export default App;
