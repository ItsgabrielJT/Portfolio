import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbEcoPhar from '../public/images/works/ecopharmacy-eyecatch.png'
import thumbBiotech from '../public/images/works/biotech-eyecatch.jpg'
import thumbFlyteek from '../public/images/works/imageanalysis-eyecatch.jpg'
import thumbNvim from '../public/images/works/nvim-eyecatch.jpg'
import thumbPAD from '../public/images/works/projectAD.png'

const Works = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>        
          <WorkGridItem id="proyectoAnalisis" thumbnail={thumbPAD} title="Project AD">
            Data analysis done in Power BI
          </WorkGridItem>
        </Section>        
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>          
          <WorkGridItem id="biotech" title="Biotech EPN" thumbnail={thumbBiotech}>
            Club Software&apos;s project, analysis of DNA and ARN sequences
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="flyteek" title="Image analysis" thumbnail={thumbFlyteek}>
            Use python for analysis images of genoms
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="nvim" thumbnail={thumbNvim} title="NeoVim Configuration">
            NeoVim configuration for linux, edit your code how an IDE
          </WorkGridItem>
        </Section>
        <Section>        
          <WorkGridItem id="ecoPharmacy" thumbnail={thumbEcoPhar} title="EcoPharmacy">
            A system of pharmacy make in Java
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works