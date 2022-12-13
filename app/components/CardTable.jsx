import { useEffect, useState } from "react";
import HouseCard from "./HouseCard"
import useInfiniteScroll from "~/utils/useInfiniteScroll";
import { Center,Spinner, Wrap, Box, Text } from "@chakra-ui/react"
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
    const initial = params.initial
    let empty = false
    const hasInitial = (typeof(initial) != 'undefined')
    if(hasInitial){empty = initial.length == 0}

    const [listItems, setListItems] = useState([]);
    const [page,setPage] = useState(1)
    // useEffect(fetchHouses(++page),[])
    //const [listItems, setListItems] = useState(Array.from(Array(24).keys(), n => n + 1));
    useEffect(()=>{
        console.log(hasInitial)
        if(hasInitial){
            setListItems(initial)}
        else{
        fetchHouses(page).then((ids)=>setListItems(ids))
        setPage((page)=>page+1)
        }
    },[initial])

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

    function fetchMoreListItems(callback) {
        setPage((page)=>page+1)
        if(!hasInitial){
        console.log('Fetching')
        //setListItems(prevState => ([...prevState, ...Array.from(Array(24).keys(), n => n + prevState.length + 1)]));
        fetchHouses(page).then((newids)=>setListItems(prevState => ([...prevState, ...newids])))
        setIsFetching(false);
        callback()
        }
    }
    return(
        <>

{!hasInitial?
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
        :
        <>
            {empty ? 
                <Text>No houses found</Text>
                    :
                <Box m={'20px'}>
                    <Wrap minChildWidth='200px' spacing='40px' justify='center'>
                    {listItems.map((id,index) => {
                        return <Box className="house-card" key={index}><HouseCard id={id} /></Box>;
                    })}
                    </Wrap>
                </Box>
            }
        </>
        }
        </>
    )
}