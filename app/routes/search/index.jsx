import { useLoaderData } from "@remix-run/react";
import { useEffect, useState} from "react";

import {SERVER_DNS} from "~/utils/constants"
import CardTable from "~/components/CardTable"


export const loader = async ({
    request
}) => {
    const url= new URL(request.url);
    const location = url.searchParams.get("location");
    const people = url.searchParams.get("people");
    const dateStart = url.searchParams.get('dateStart');
    const dateEnd = url.searchParams.get('dateEnd');
    return {location:location, people:people, dateEnd:dateEnd, dateStart:dateStart}
};

async function search(params){
    let jsonData = { "town": params.location, "num_people":parseInt(params.people), "check_in": params.dateStart, "check_out": params.dateEnd}
    let response = fetch(`${SERVER_DNS}/houses/search-houses`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(jsonData),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            return response.json();
        })
        .catch((text) => {
            return {success:false}
        })
    response = await response;
    if (response.success) {
        return response.ids
    }
    return []
}

export default function Index()
{
    const params = useLoaderData();
    const [initial, setInitial] = useState([])
    useEffect(()=>{
    search(params).then((res)=>{setInitial((prev)=>res)})
    },[])
    useEffect(()=>console.log('aaaa',initial),[initial])
    return(
        <div>
        <CardTable initial={initial}></CardTable>
     </div>
    )
}

