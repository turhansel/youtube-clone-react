import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import RecommendedVideos from "./RecommendedVideos";
import { StylesProvider } from "@material-ui/core/styles";

function App() {
  return (
    <StylesProvider injectFirst>
      <div className="app">
        <Header />
        <div className="main">
          <SideBar />
          <RecommendedVideos />
        </div>
      </div>
    </StylesProvider>
  );
}

export default App;
