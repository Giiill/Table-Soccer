import Style from "./styles/app.module.scss";
import UiHeader from "./components/uiHeader";
import UiTournirTable from "./components/uiTournirTable";
import UiSlider from "./components/uiSlider";

function App() {
  return (
    <div className={Style.app}>
      <UiHeader />
      <UiSlider />
      <UiTournirTable />
    </div>
  );
}

export default App;
