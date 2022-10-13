import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import CardTable from "~/components/CardTable";
import HouseCard from "~/components/HouseCard";

export default function Index() {
  const [hidden, setHidden] = useState(true)
  const swapState = () => setHidden(!hidden)
  
  return (
    <>
    <input type="submit" value="Search" onClick={swapState} />
    {hidden ? <div>hola</div> : <div>adeu</div>}
    </>
  );
}
