import Style from "./styles/app.module.scss";
import UiHeader from "./components/uiHeader";
import UiHome from "./pages/uihome";
import UiTournirPage from "./pages/uiTournirPage";
import UiTournirsPage from "./pages/uiTournirsPage";
import UiFooter from "./components/uiFooter";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";



function App() {
  return (
    <div className={Style.app}>
      <Router>
          <UiHeader />
        <Routes>
          <Route path="/" element={<UiHome/>} /> 
          <Route path="/tournir/:id" element={<UiTournirPage/>} /> 
          <Route path="/tournirs" element={<UiTournirsPage/>} /> 
        </Routes>
      </Router>
    <UiFooter />
    </div>
  );
}

export default App;
