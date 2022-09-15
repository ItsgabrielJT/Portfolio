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
          Biotech EPN <Badge>2022-</Badge>
        </Title>
        <P>
        DNA and RNA sequence analysis project with python, in order to recognize and save new sequences.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://biotech-page.herokuapp.com/">
            https://biotech-page.herokuapp.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux/</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Hadoop, Numpy, Seaborn</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/ItsgabrielJT/Biotech-EPN">
              All the project code is hosted here <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/biotech01.jpg" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work