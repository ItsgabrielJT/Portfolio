import { Container, Box, Heading, Image, useColorModeValue, Link, Button, List, ListItem } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I'm a student of Data Science 
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Joel Tates 
                    </Heading>
                    <p> Data Science Student ( Data Science / Data Enginner )</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} textAlign="center" >
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" src="/images/itsgabriel.jpg" alt="Profile Img"></Image>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I'm a data science student, 
                    I have worked on recent projects in biology and automation.  
                    I know Machine Learning and Web Scraping. 
                    If you want to see the project{' '}
                    <NextLink href="/works/biotech">
                        <Link> BiotechEPN </Link>
                    </NextLink>
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    Born in Quito, Ecuador.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    I started my studies of Superior Technology of Software Development at the Escuela Politecnica Nacional del Ecuador (National Polytechnic School of Ecuador).
                </BioSection>        
                <BioSection>
                    <BioYear>2021</BioYear>
                    Take courses in Python, Machine Learning and Databases (SQL and NoSQL), at Platzi, Cisco, Flyteek.
                </BioSection> 
                <BioSection>
                    <BioYear>2022</BioYear>
                    Doing my first Data Science Project (BiotechEPN)
                </BioSection>        
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Music,
                    Playing games,
                    Playing Drums,
                    Artificial Intelligence,
                    Smarthphones, 
                    Machine Learning
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/ItsgabrielJT" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @ItsgabrielJT
                            </Button>
                        </Link>
                    </ListItem>
            
                    <ListItem>
                        <Link href="https://twitter.com/nder_el" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @ItsgabrielJT
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://instagram.com/gabriel_jt30" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @gabriel_jt30
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    </Layout>
    )
}

export default Page