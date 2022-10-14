import { useLoaderData } from "@remix-run/react";
import { useState } from "react";


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
