import { useEffect, useState } from "react";
import HouseCard from "./HouseCard"
import useInfiniteScroll from "~/utils/useInfiniteScroll";
import { Center,Spinner, Wrap, Box } from "@chakra-ui/react"


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
        <Box m={'20px'}>
            <Wrap minChildWidth='200px' spacing='40px' justify='center'>
            {listItems.map((id) => {
                return <Box className="house-card" key={id}><HouseCard id={id} /></Box>;
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