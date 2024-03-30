import UiTournirTable from "../components/uiTournirTable";
import UiSlider from "../components/uiSlider";


function UiHome() {
  let data = [{
    name: "А",
    date: "12.04.2024",
    state: "В игре",
    players: 32,
    id: 512
  },{
    name: "Б",
    date: "12.04.2024",
    state: "В игре",
    players: 32,
    id: 513
  },{
    name: "В",
    date: "12.04.2024",
    state: "В игре",
    players: 32,
    id: 514
  }]
  return (
    <>
        <UiSlider />
        <UiTournirTable 
          data={data}
          more={true}
        />
    </>
  );
}

export default UiHome;
