import Head from 'next/head'
import Bio from '@page-components/profile/Bio'
import Highlight from '@components/Hightlight'
import Title from '@components/Title'
import { Color } from 'styles/color-config'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main>
        <Title>
          Who does this guy <Highlight color={Color.emerald}>think</Highlight>{' '}
          he is?
        </Title>
        <Bio />
      </main>
    </>
  )
}
