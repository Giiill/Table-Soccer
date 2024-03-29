import Style from "./styles/app.module.scss";
import UiHeader from "./components/uiHeader";
import UiTournirTable from "./components/uiTournirTable";

function App() {
  return (
    <div className={Style.app}>
      <UiHeader />
      <UiTournirTable />
    </div>
  );
}

export default App;
