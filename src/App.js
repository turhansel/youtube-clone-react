import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import SearchPage from "./components/SearchPage/SearchPage";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search/:searchTerm">
          <StylesProvider injectFirst>
            <div className="main">
              <SideBar />
              <SearchPage />
            </div>
          </StylesProvider>
        </Route>
        <Route path="/">
          <StylesProvider injectFirst>
            <div className="main">
              <SideBar />
              <RecommendedVideos />
            </div>
          </StylesProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
