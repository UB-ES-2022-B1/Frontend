import { useLoaderData } from "@remix-run/react";
import CardTable from "~/components/CardTable";
import Dropdown from "~/components/Dropdown";

import HouseTitle from "~/components/HouseTitle";
import Navbar from "~/components/Navbar/Navbar";
import Slider from "~/components/slider"
import HouseTitle from "~/components/HouseTitle"
import HouseCard from "~/components/HouseCard"
import HouseDescription from "~/components/HouseDescription"
import HouseCharacteristics from "../components/HouseCharacteristics";


export const loader = ({
  params,
}) => {
  return Array.from(Array(20).keys(), n => n + 1)
};




export default function Index() {
  let ids = useLoaderData()

  return (
    <div>
      <Slider></Slider>
      <HouseTitle></HouseTitle>
      <HouseDescription></HouseDescription>
      <HouseCharacteristics></HouseCharacteristics>
    </div>
  );
}