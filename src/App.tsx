import Style from "./styles/app.module.scss";
import UiHeader from "./components/uiHeader";

function App() {
  return (
    <div className={Style.app}>
      <UiHeader />
    </div>
  );
}

export default App;
