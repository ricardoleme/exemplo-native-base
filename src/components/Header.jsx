import React from "react"
import { VStack, Heading, Text } from "native-base"


export default function Header() {
  return (
    <>
      <VStack space={1} alignItems="center">
        <Text fontSize="lg">Diferentes Tamanhos de Cabeçalho</Text>
        <Heading size="xs">xs</Heading>
        <Heading size="sm">sm</Heading>
        <Heading size="md">md</Heading>
        <Heading size="lg">lg</Heading>
        <Heading size="xl">xl</Heading>
        <Heading size="2xl">2xl</Heading>
        <Heading size="3xl">3xl</Heading>
        <Heading size="4xl">4xl</Heading>
      </VStack>
    </>
  )
}