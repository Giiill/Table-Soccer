import { useParams } from 'react-router-dom';
import Standings from '../components/Standings';
import { useLayoutEffect } from "react";

function UiTournirPage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const { id } = useParams();
    return (
        <>
            <Standings />
        </>
    );
}

export default UiTournirPage;
