import { useLoaderData } from "@remix-run/react";
import TypeGroup from "~/components/Type-group";
import Dropdown from "~/components/Dropdown";
import FlorPlant from "~/components/FloorPlant";
import Navbar from "~/components/Navbar/Navbar";


export const loader = ({
  params,
}) => {
  return Array.from(Array(20).keys(), n => n + 1)
};




export default function Index() {
  let ids = useLoaderData()

  return (
    <div>
       <CardTable></CardTable>
    </div>
  );
}
