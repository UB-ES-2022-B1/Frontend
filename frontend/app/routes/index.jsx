import { useLoaderData } from "@remix-run/react";
import CardTable from "~/components/CardTable";
import HouseCard from "~/components/HouseCard";


export const loader = ({
  params,
}) => {
  return Array.from(Array(20).keys(), n => n + 1)
};

export default function Index() {
  let ids = useLoaderData()

  return (
    <div>
      <CardTable ids={ids}></CardTable>
    </div>
  );
}
