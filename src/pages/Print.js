import { useEffect,useState } from "react";
import Map from "../components/Map/Map";
import axios from "axios";

function Print() {
    const [printers, setPrinters] = useState("");
    useEffect(() => {


        axios.get("http://localhost:8000/printers")
            .then(resp => {
                setPrinters(resp.data);
            });
    }, [])

    return (
        <div>
        {printers && <Map printers={printers} />}
        </div>
    );
}

export default Print;