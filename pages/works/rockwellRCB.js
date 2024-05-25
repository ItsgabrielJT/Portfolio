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
    <Layout title="Plataform Automative">
      <Container>
        <Title>
          Rockwell RCB TRACE <Badge>2023-2024</Badge>
        </Title>
        <P>
        I worked on several modules within this system, I worked on the authentication module, product management and task automation.
        </P>
        <List ml={4} my={4}>          
          <ListItem>
            <Meta>Platform</Meta>
            <span>Azure</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Js, Spring Boot, MySQL, Rsuite, Material UI</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://rockwellra.rcbtrace.net">
              This project is hosted here <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/rockwell.png" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work