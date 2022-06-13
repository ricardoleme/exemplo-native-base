import React from "react"
import { useToast, Row, IconButton, Icon, Text, Column, StatusBar, Box } from "native-base"
import { MaterialIcons } from '@expo/vector-icons'

export default function AppBar() {
    const toast = useToast();
    return (
        <>
        <StatusBar bg="indigo.300" barStyle="light-content" />
      <Box safeAreaTop bg="indigo.400" />
            <Column alignItems="center" >
                <Row bg="indigo.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="sm" shadow={6}>
                    <Row alignItems="center">
                        <IconButton icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white" />} onPress={() => toast.show({
                            title: "Você clicou no Menu Hambúrguer",
                            placement: "top"
                        })} />
                        <Text color="white" fontSize="20" fontWeight="bold">
                            Primeiro App
                        </Text>
                    </Row>
                    <Row>
                        <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                        <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
                    </Row>
                </Row>
            </Column>
        </>
    )
}