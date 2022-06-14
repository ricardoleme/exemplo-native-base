import React from "react"
import { Column, Button, Heading, Icon, Row } from "native-base"
import { Ionicons } from '@expo/vector-icons'


export default function Botoes() {
  // Tamanhos: "xs", "sm", "md", "lg"
  return (
    <>
      <Column space={1} alignItems="center">
        <Heading size="md" my="4">Botões Sólidos (default)</Heading>
        <Button full={true}>Salvar</Button>
        <Button size="md" colorScheme="secondary">Cancelar</Button>
        <Button size="sm" isDisabled={true}>Desabilitado</Button>

        <Heading size="md" my="4">Botões Subtle</Heading>
        <Button size="lg" variant="subtle">Salvar</Button>
        <Button size="md" variant="subtle" colorScheme="secondary">Cancelar</Button>
        <Button size="sm" variant="subtle" isDisabled={true}>Desabilitado</Button>

        <Heading size="md" my="4">Botões Outline</Heading>
        <Button size="lg" variant="outline">Salvar</Button>
        <Button size="md" variant="outline" colorScheme="secondary">Cancelar</Button>
        <Button size="sm" variant="outline" isDisabled={true}>Desabilitado</Button>

        <Heading size="md" my="4">Botões Loading</Heading>
        <Button isLoading={true}>Botão</Button>
        <Button isLoading={true} isLoadingText="Aguarde">
          Botão
        </Button>
        <Button isLoading={true} isLoadingText="Salvando..." variant="outline">Salvar</Button>

        <Heading size="md" my="4">Botões com ícone</Heading>
        <Row space={4} my={2}>
        <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
        Upload
      </Button>
      <Button variant="subtle" endIcon={<Icon as={Ionicons} name="cloud-download-outline" size="sm" />}>
        Download
      </Button>      
      </Row>      
      </Column>
    </>
  )
}
