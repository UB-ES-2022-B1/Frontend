import HouseCardExtended from "~/components/HouseCardExtended"
import { Center,Spinner, Wrap, Box, Text, SimpleGrid, Flex} from "@chakra-ui/react"
export default function Index() {

return (
    <div>
            <Flex width='full' justifyContent='center'>

            <SimpleGrid columns={1} spacing='40px' >
                <Box className="house-card" key={1}><HouseCardExtended id={1} /></Box>
                <Box className="house-card" key={2}><HouseCardExtended id={2} /></Box>

            </SimpleGrid>
            </Flex>
    </div>
    );
}
