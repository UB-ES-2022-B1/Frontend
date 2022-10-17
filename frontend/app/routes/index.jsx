import { useLoaderData } from "@remix-run/react";
import CardTable from "~/components/CardTable";
import HouseCard from "~/components/HouseCard";
import Menubutton from "~/components/Menubutton";
import Dropdown from "~/components/Dropdown";
import FormControl from "~/components/Navbar/FormControl";

export const loader = ({
  params,
}) => {
  return Array.from(Array(20).keys(), n => n + 1)
};




export default function Index() {
  let ids = useLoaderData()

  return (
    <div>
      <FormControl></FormControl>
       <CardTable></CardTable>
    </div>
  );
}