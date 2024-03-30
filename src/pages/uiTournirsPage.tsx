import UiTournirTable from "../components/uiTournirTable";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

type Tournir = {
  name: string,
  date: string,
  status: string,
  number: number,
  id: number
}

function UiTournirsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
        getData();
    },[]);
  
    const [data, setData] = useState<Tournir[]>([]);
    const getData = async () => {
      try {
          axios.defaults.withCredentials = true;
          const response = await axios.get('http://188.225.34.199:8000/tournirs');
          if (response.status === 200) {
              console.log(response.data)
              setData(response.data["tour"])
          }
      } catch (error) {
          console.log(error)
      }
  }
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
