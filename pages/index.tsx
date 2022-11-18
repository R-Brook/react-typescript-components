import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Container } from "../components/container"
import { TextInput } from "components/Form/TextInput"

const Home: NextPage = () => {
  const [notepadOpen, setNotepadOpen] = React.useState(false)

  return (
    <>
      <Head>
        <title>React TypeScript Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>TEST</h1>
        <TextInput label="input label" id="test" required />
      </Container>
    </>
  )
}

export default Home
