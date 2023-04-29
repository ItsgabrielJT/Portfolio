import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Biotech EPN">
      <Container>
        <Title>
          Ecopharmacy System <Badge>2022-</Badge>
        </Title>
        <P>
            Desktop application with a pharmacy theme
        </P>
        <List ml={4} my={4}>          
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux/</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java, MySQL, JavaFx</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/ItsgabrielJT/ProyectoPOO_2022_TT">
              All the project code is hosted here <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/home-eco.png" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work