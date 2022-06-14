import React from "react"
import { Row, IconButton, Icon, Text, Column, StatusBar, Box, Tooltip,
        useToast, useColorMode, useColorModeValue } from "native-base"
import { MaterialIcons } from '@expo/vector-icons'

export default function AppBar() {
    const toast = useToast();
 const {colorMode, toggleColorMode} = useColorMode()

    return (
        <>
        <StatusBar bg="indigo.300" barStyle="light-content" />
      <Box safeAreaTop bg="indigo.400" />
            <Column alignItems="center" >
                <Row  _dark={{bg: "rose.800"}} _light={{bg: "indigo.500"}} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="sm" shadow={6}>
                    <Row alignItems="center">
                        <IconButton icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white" />} onPress={() => toast.show({
                            title: "Você clicou no Menu Hambúrguer",
                            placement: "top"
                        })} />
                        <Text color="white" fontSize="20" fontWeight="bold">
                        {useColorModeValue("Light", "Dark")}
                        </Text>
                    </Row>
                    <Row>
                        <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                        <Tooltip label="Alterar o esquema de cores (light/dark)" placement="bottom right">
                        <IconButton icon={<Icon as={MaterialIcons} name={colorMode==='light'? 'brightness-3' : 'brightness-7'} size="sm" color="white" />} 
                                    onPress={toggleColorMode}  
                                    _hover={{
                                        bg: "orange.600:alpha.20"
                                      }}
                                    />
                                    </Tooltip>
                        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
                    </Row>
                </Row>
            </Column>
        </>
    )
}