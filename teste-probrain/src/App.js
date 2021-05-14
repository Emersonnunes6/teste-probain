import GlobalState from "./globalState/globalState";
import Router from "./routes/router";
import { Div, Footer } from "./styles";

function App() {
  return (
    <GlobalState>
      <Div>
        <Router/>
        <Footer>
          <h3>2021 - EMERSON NUNES</h3>
        </Footer>
      </Div>
    </GlobalState>
  );
}

export default App;
