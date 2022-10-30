import { useLoaderData } from "@remix-run/react";
import TypeGroup from "~/components/Type-group";
import HouseTitle from "~/components/HouseTitle";
import Dropdown from "~/components/Dropdown";
import FlorPlant from "~/components/FlorPlant";
import Navbar from "~/components/Navbar/Navbar";


export const loader = ({
  params,
}) => {
  return Array.from(Array(20).keys(), n => n + 1)
};




export default function Index() {
  let ids = useLoaderData()

  return (
      <FlorPlant></FlorPlant>
    
  );
}
