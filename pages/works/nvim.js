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
          Neovim Terminal <Badge>2021-</Badge>
        </Title>
        <P>
            To have a code editor similar to Vscode but faster and lighter
        </P>
        <List ml={4} my={4}>          
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux/</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TS, Vim, BASH</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/ItsgabrielJT/nvim">
              All the project code is hosted here <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/nvim-eyecatch.jpg" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work