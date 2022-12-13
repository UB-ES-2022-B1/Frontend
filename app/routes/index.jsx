import { useLoaderData } from "@remix-run/react";
import CardTable from "~/components/CardTable"
import Footer from "~/components/footer"

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
       <Footer></Footer>
    </div>
  );
}
