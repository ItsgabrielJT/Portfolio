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
          Project Analysys Data <Badge>2023-</Badge>
        </Title>
        <P>
            It's a project that takes five different sources, such as web scrapy, csv, APIs, etc. The analysis is done with EDA and the visualizations are done in Power Bi.
        </P>
        <List ml={4} my={4}>          
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Power BI, Numpy, Pandas, BeutifulSoup</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/ItsgabrielJT/AnalisisProyectos">
              All the project code is hosted here <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/arquitech.png" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work