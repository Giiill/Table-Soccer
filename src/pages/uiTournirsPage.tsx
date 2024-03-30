import UiTournirTable from "../components/uiTournirTable";
import { useLayoutEffect } from "react";

function UiTournirsPage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
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
      },{
        name: "Г",
        date: "12.04.2024",
        state: "В игре",
        players: 32,
        id: 515
      },{
        name: "Д",
        date: "12.04.2024",
        state: "В игре",
        players: 32,
        id: 516
      },{
        name: "Е",
        date: "12.04.2024",
        state: "В игре",
        players: 32,
        id: 517
      }]
  return (
    <>
    <UiTournirTable 
          data={data}
          more={false}
        />
    </>
  );
}

export default UiTournirsPage;
