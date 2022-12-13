import { useEffect, useState, useMemo} from "react";
import HouseCard from "./HouseCard"
import useInfiniteScroll from "~/utils/useInfiniteScroll";
import { Center,Spinner, Wrap, Box, Text, WrapItem } from "@chakra-ui/react"
import {SERVER_DNS} from "~/utils/constants"
import { isAuthenticated } from '~/session';
import { getAccessToken } from '~/session';


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

    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    // useEffect(() => { isAuthenticated().then(res => setIsLoggedIn(res)) }, [])
    const [favorites, setFavorites] = useState()
    // useEffect(() => {
    //     console.log('a')
    // if (!isLoggedIn){}
    // else{
    //     getAccessToken().then((token)=>{
    //     let response = fetch(`${SERVER_DNS}/favorites/get-favorites`, {
    //         method: 'GET',
    //         mode: 'cors',
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //         }
    //         })
    //         .then((res) => {
    //             console.log(res)
    //             if(res.success){
    //                 setFavorites(res.ids)
    //             }
    //             else{

    //             }
    //         })
    //         .catch((error) => {
    //             console.log('Error getting favorites: ', error)
    //         });
    //     })
    // }
    // }, [isLoggedIn])


    useEffect(async() => {
    let logged = await isAuthenticated()
    if (!logged){
        // setFavorites([])
    }
    else{
        let token = await getAccessToken()
        let response = fetch(`${SERVER_DNS}/favorites/get-favorites`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
            })
            .then((res) => {
                return res.json()
            })
            .catch((error) => {
                // setFavorites([])
                console.log('Error getting favorites: ', error.msg)
            });
        const {success,favorites} = await response
        if(success){setFavorites(favorites)}
        else{setFavorites([])}
    }
    }, [])

    // useEffect(fetchHouses(++page),[])
    //const [listItems, setListItems] = useState(Array.from(Array(24).keys(), n => n + 1));
    useEffect(()=>{
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
            {favorites && <Box m={'20px'}>
                <Wrap minChildWidth='200px' spacing='40px' justify='center'>
                {listItems.map((id,index) => {
                    return <Box className="house-card" key={index}><HouseCard id={id} isFavorite={favorites.includes(id)}/></Box>;
                })}
                </Wrap>
            </Box>}
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
                favorites && <Box m={'20px'}>
                    <Wrap minChildWidth='200px' spacing='40px' justify={'center'}>
                    {listItems.map((id,index) => {
                        return <WrapItem className="house-card" key={index}><HouseCard id={id} isFavorite={favorites.includes(id)} /></WrapItem>;
                    })}
                    </Wrap>
                </Box>
            }
        </>
        }
        </>
    )
}