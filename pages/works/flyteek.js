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
          Flyteek Project Genome <Badge>2022-</Badge>
        </Title>
        <P>
            Image Enhancement for Genome Identification
        </P>
        <List ml={4} my={4}>          
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux/Mac</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, OpenCV, Numpy</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/ItsgabrielJT/Flyteek_Project">
              All the project code is hosted here <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/flyteek.png" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work