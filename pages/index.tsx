import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Container } from "../components/container"

const Home: NextPage = () => {
  const [notepadOpen, setNotepadOpen] = React.useState(false)

  return (
    <>
      <Head>
        <title>React TypeScript Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 className="text-green font-mono-semi-bold mb-5 text-5xl">Fonts</h1>
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
      </Container>
    </>
  )
}

export default Home
