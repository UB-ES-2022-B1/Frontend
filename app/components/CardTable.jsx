import { useEffect, useState } from "react";
import HouseCard from "./HouseCard"
import useInfiniteScroll from "~/utils/useInfiniteScroll";
import { Center,Spinner } from "@chakra-ui/react"


export default function(params)
{
    const [listItems, setListItems] = useState(Array.from(Array(24).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

    function fetchMoreListItems(callback) {
        setTimeout(() => {
        console.log('Fetching')
        setListItems(prevState => ([...prevState, ...Array.from(Array(24).keys(), n => n + prevState.length + 1)]));
        setIsFetching(false);
        callback()
        }, 200);
    }

    return(
        <>
        <div className="grid-container">
            {listItems.map((id) => {
                return <div className="grid-item" key={id}><HouseCard id={id} /></div>;
            })}
        </div>
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