import { BrowserRouter as Router, Route } from "react-router-dom";
import Charts from "./Components/Charts/Charts";
import Index from "./Components/Index";
import Tweets from "./Components/Tweets/Tweets";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Index}></Route>
        <Route path="/tweets" component={Tweets}></Route>
        <Route path="/charts" component={Charts}></Route>
      </Router>
    </>
  );
}

export default App;
