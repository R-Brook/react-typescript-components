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
        <div className="mb-12">
          <h1 className="text-green font-mono-semi-bold mb-5 text-5xl">
            Fonts
          </h1>
          <p className="text-green font-mono-bold">This text is bold.</p>
          <br />
          <p className="text-green font-mono-semi-bold">
            This text is semi bold.
          </p>
          <br />
          <p className="text-green font-mono">This text is regular.</p>
          <br />
          <p className="text-green font-mono-light">This text is light.</p>
          <br />
          <p className="text-green font-mono-thin">This text is thin.</p>
        </div>

        <TextInput label="input label" id="test" required />
      </Container>
    </>
  )
}

export default Home
