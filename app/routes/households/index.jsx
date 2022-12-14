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

function arrayRemove(arr, value) { 

    return arr.filter(function(ele){ 
        console.log(ele)
        return ele != value; 
    });
}

async function deleteHouse(id){
    let token = await getAccessToken()
    let jsonData = { "id_house": id}
    let response = fetch(`${SERVER_DNS}/houses/delete-house`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(jsonData),
        headers: {
            'Authorization': `Bearer ${token}`,
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

   setMyHouses([...arrayRemove(myHouses,id)])

   return []
}




useEffect(()=>{console.log(myHouses)},[myHouses])

return (
    <div>
            {myHouses && myHouses.length==0 ? <Text p={2}>You have not added any houses to host</Text> : null}
            <Flex width='full' justifyContent='center'>

            {myHouses && <SimpleGrid columns={1} spacing='10px' >
                {myHouses.map((id)=>{
                    return <Box className="house-card" key={id}><HouseCardExtended id={id} isFavoritable={false} isRemovable={true} onDelete={deleteHouse}/></Box>
                })}
            </SimpleGrid>}
            </Flex>
    </div>
    );
}
