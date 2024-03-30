import UiTournirTable from "../components/uiTournirTable";
import UiSlider from "../components/uiSlider";
import axios from 'axios';
import { useState } from "react";
import { useLayoutEffect } from "react";

type Tournir = {
  name: string,
  date: string,
  status: string,
  number: number,
  id: number
}

function UiHome() {
  
  useLayoutEffect( () => {
    getData();
  }, [])

  const [data, setData] = useState<Tournir[]>([]);
  const getData = async () => {
    try {
        axios.defaults.withCredentials = true;
        const response = await axios.get('http://188.225.34.199:8000/lasttournirs');
        if (response.status === 200) {
            console.log(response.data)
            setData(response.data["tour"])
        }
    } catch (error) {
        console.log(error)
    }
};
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
