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
    <Layout title="Plataform Colaborative">
      <Container>
        <Title>
          Project Core <Badge>2024-</Badge>
        </Title>
        <P>
        Collaborative platform with user and publication management, in addition to offering an environment for publishing and sharing projects.
        </P>
        <List ml={4} my={4}>          
          <ListItem>
            <Meta>Platform</Meta>
            <span>Vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Js, Express, Posgrate SQL, Vercel, Material UI</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/ItsgabrielJT/project-core-front">
              All the project code is hosted here <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/project-core-home.png" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work