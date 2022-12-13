import HouseCardExtended from "~/components/HouseCardExtended"
import { Center,Spinner, Wrap, Box, Text, SimpleGrid, Flex} from "@chakra-ui/react"
import { useEffect, useState, useMemo} from "react";
import { isAuthenticated } from '~/session';
import { getAccessToken } from '~/session';
import {SERVER_DNS} from "~/utils/constants"



export default function Index() {
const [favorites, setFavorites] = useState()

useEffect(async() => {
    let logged = await isAuthenticated()
    if (!logged){
        window.location.href = '/login'
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


useEffect(()=>{console.log(favorites)},[favorites])

return (
    <div>
            <Flex width='full' justifyContent='center'>

            {favorites && <SimpleGrid columns={1} spacing='10px' >
                {favorites.map((id,index)=>{
                    return <Box className="house-card" key={index}><HouseCardExtended id={id} isFavorite={true} /></Box>
                })}
            </SimpleGrid>}
            </Flex>
    </div>
    );
}
