import { useEffect, useState } from "react";
import HouseCard from "./HouseCard"
import useInfiniteScroll from "~/utils/useInfiniteScroll";
import { Center,Spinner, Wrap, Box } from "@chakra-ui/react"
import {SERVER_DNS} from "~/utils/constants"

async function fetchHouses(page)
{
    let response = fetch(`${SERVER_DNS}/houses/get-houses`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({page_id:page}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            return res.json();
        })
        .catch((text) => {
            console.log(txt.msg);
        })
    const {success, ids} = await response;
    if(success){
        return ids
    }
    else{
        return Array.from(Array(20).keys(), n => n + 1)
    }
}

export default function(params)
{
    let page = 0
    // useEffect(fetchHouses(++page),[])
    //const [listItems, setListItems] = useState(Array.from(Array(24).keys(), n => n + 1));
    const [listItems, setListItems] = useState([]);
    useEffect(()=>fetchHouses(++page).then((ids)=>setListItems(ids)),[])
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

    function fetchMoreListItems(callback) {
        setTimeout(() => {
        console.log('Fetching')
        //setListItems(prevState => ([...prevState, ...Array.from(Array(24).keys(), n => n + prevState.length + 1)]));
        fetchHouses(++page).then((newids)=>setListItems(prevState => ([...prevState, ...newids])))
        setIsFetching(false);
        callback()
        }, 200);
    }

    return(
        <>
        <Box m={'20px'}>
            <Wrap minChildWidth='200px' spacing='40px' justify='center'>
            {listItems.map((id,index) => {
                return <Box className="house-card" key={index}><HouseCard id={id} /></Box>;
            })}
            </Wrap>
        </Box>
        <Center>
        {isFetching?<Spinner
                margin='0 auto'
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='teal.500'
                size='xl' />:null}
        </Center>
        </>
    )
}