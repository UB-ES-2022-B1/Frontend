import HouseCardExtended from "~/components/HouseCardExtended"
import { Center,Spinner, Wrap, Box, Text, SimpleGrid, Flex} from "@chakra-ui/react"
import { useEffect, useState, useMemo} from "react";
import { isAuthenticated } from '~/session';
import { getAccessToken } from '~/session';
import {SERVER_DNS} from "~/utils/constants"



export default function Index() {
const [myHouses, setMyHouses] = useState()

useEffect(async() => {
    let logged = await isAuthenticated()
    if (!logged){
        window.location.href = '/login'
    }
    else{
        let token = await getAccessToken()
        let response = fetch(`${SERVER_DNS}/houses/get-own-houses`, {
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
                console.log('Error getting my houses: ', error.msg)
            });
        const {success,ids} = await response
        if(success){setMyHouses(ids)}
        else{setMyHouses([])}
        console.log(ids)
    }
    }, [])


useEffect(()=>{console.log(myHouses)},[myHouses])

return (
    <div>
            {myHouses && myHouses.length==0 ? <Text p={2}>You have not added any houses to host</Text> : null}
            <Flex width='full' justifyContent='center'>

            {myHouses && <SimpleGrid columns={1} spacing='10px' >
                {myHouses.map((id,index)=>{
                    return <Box className="house-card" key={index}><HouseCardExtended id={id}/></Box>
                })}
            </SimpleGrid>}
            </Flex>
    </div>
    );
}
