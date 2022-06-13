import React from "react"
import { VStack, Text } from "native-base"


export default function Header() {
  return (
    <>
      <VStack space={1} alignItems="center">
        <Text fontSize="lg">Diferentes Tamanhos de Texto</Text>
        <Text fontSize="xs">xs</Text>
        <Text fontSize="sm">sm</Text>
        <Text fontSize="md">md</Text>
        <Text fontSize="lg">lg</Text>
        <Text fontSize="xl">xl</Text>
        <Text fontSize="2xl">2xl</Text>
        <Text fontSize="3xl">3xl</Text>
        <Text fontSize="4xl">4xl</Text>
        <Text fontSize="5xl">5xl</Text>
        <Text fontSize="6xl">6xl</Text>
        <Text isTruncated maxW="sm" bg="teal.200">
          O maior problema em informática não é o hardware ou o software, quase sempre está localizado entre a cadeira e o monitor
        </Text>
        <Text bold>Negrito</Text>
        <Text italic>Itálico</Text>
        <Text underline>Underline</Text>
        <Text highlight  _light={{ color: "amber.400" }} _dark={{ color: "amber.700" }}>
          highlight
        </Text>
        <Text>
          H<Text sub>2</Text>O
        </Text>
        <Text underline>Underline</Text>
        <Text strikeThrough>Riscado</Text>
        <Text bold italic underline>
          Negrito, Itálico & Underline
        </Text>
      </VStack>
    </>
  )
}