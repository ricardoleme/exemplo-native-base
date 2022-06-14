import React from "react"
import { VStack, Text } from "native-base"


export default function Textos() {
  return (
    <>
      <VStack space={1} alignItems="center">
        <Text fontSize="lg" my="4" color="pink.700:alpha.70">Diferentes Tamanhos de Texto</Text>
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
        <Text isTruncated maxW="sm" bg="primary.700">
          O maior problema em informática não é o hardware ou o software, quase sempre está localizado entre a cadeira e o monitor
        </Text>
        <Text bold>Negrito</Text>
        <Text italic>Itálico</Text>
        <Text underline>Underline</Text>
        <Text highlight>
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

/*
Cores
Consultar os temas disponíveis em https://docs.nativebase.io/default-theme

Exemplo:
primary.400:alpha.70

Espaçamentos

m - margin
mt - marginTop
mr - marginRight
mb - marginBottom
ml - marginLeft
mx - marginLeft e marginRight
my - marginTop e marginBottom
p  - padding
pt - paddingTop
pr - paddingRight
pb - paddingBottom
pb - paddingBottom
pl - paddingLeft
px - paddingLeft e paddingRight
py - paddingTop e paddingBottom

Os tamanhos seguem:

0 -> 0
1 -> 4
2 -> 8
4 -> 16
6 -> 24
8 -> 32
10 -> 40

*/