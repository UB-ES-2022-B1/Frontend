import { useLoaderData } from "@remix-run/react";
import CardTable from "~/components/CardTable";
import Dropdown from "~/components/Dropdown";

import HouseTitle from "~/components/HouseTitle";
import Navbar from "~/components/Navbar/Navbar";
import ReservationCard from "~/components/ReservationCard";


export const loader = ({
  params,
}) => {
  return Array.from(Array(20).keys(), n => n + 1)
};




export default function Index() {
  let ids = useLoaderData()

  return (
      <ReservationCard></ReservationCard>
    
  );
}