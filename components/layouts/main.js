import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../voxel-dog-loader'
import Footer from '../footer'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({children, router}) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="leo" href="/images/leo.png" />
                <title> ItsgabrielJT - Portfolio </title>
            </Head>

            <Navbar path={router.asPath}></Navbar>

            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog/>
                {children}
                <Footer/>
            </Container>
        </Box>
    )
}

export default Main
