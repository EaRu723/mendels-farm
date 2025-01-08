import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled.a`
  color: #27AE60;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ManifestoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Quicksand', sans-serif;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #2C3E50;
  margin-bottom: 2rem;
  font-family: 'Amatic SC', cursive;
  text-align: center;
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2C3E50;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495E;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ListItem = styled.li`
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495E;
  
  &:before {
    content: "•";
    color: #27AE60;
    position: absolute;
    left: 0;
  }
`;

function Manifesto() {
  return (
    <ManifestoContainer>
      <Title>Manifesto</Title>
      
      <Section>
        <SectionTitle>Why Local Farms Matter</SectionTitle>
        <Paragraph>
          Modern agriculture has disconnected us from what we eat. Real food from real farms can transform our health in ways that manufactured solutions cannot.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>The Challenge</SectionTitle>
        <Paragraph>
          Local farmers who grow nutrient-dense food struggle to reach consumers, while most of us struggle to find trustworthy sources of clean, whole foods (<StyledLink href="https://www.plasticlist.org/" target="_blank" rel="noopener noreferrer">for instance</StyledLink>). Large-scale industrial farming prioritizes profits over nutrition, leaving both our health and local farmers at risk.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Our Solution</SectionTitle>
        <Paragraph>
          We make it simple to:
        </Paragraph>
        <List>
          <ListItem>Find verified local farms growing clean, nutrient-dense food</ListItem>
          <ListItem>Know exactly how your food is grown and who grows it</ListItem>
          <ListItem>Support farmers who prioritize quality over quantity</ListItem>
          <ListItem>Get fresh, seasonal produce at fair prices</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Why It Matters</SectionTitle>
        <Paragraph>
          When you buy from local farms:
        </Paragraph>
        <List>
          <ListItem>You get more nutritious food (freshly harvested food has more nutrients)</ListItem>
          <ListItem>Farmers earn fair wages to keep growing quality food</ListItem>
          <ListItem>Your food travels shorter distances, staying fresher and reducing environmental impact</ListItem>
          <ListItem>You build relationships with the people growing your food</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Our Promise</SectionTitle>
        <Paragraph>
          Every farm on our platform is personally vetted to ensure they meet our standards for clean growing practices. We believe in keeping things simple: good farmers growing good food for people who care about their health and community.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Our Vision for the Future</SectionTitle>
        <Paragraph>
        Imagine a future where towns and cities are powered by networks of small farms, local food businesses, and engaged communities. Where your food dollars don't disappear into corporate supply chains, but circulate in your community—supporting local farmers, creating jobs, and building resilient local economies. We're not just building a platform—we're helping rebuild local food systems that give power back to communities. When farmers and consumers connect directly, we cut out the middlemen and create something extraordinary: thriving local economies, healthier communities, and food systems that serve people, not profits.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Join the Movement</SectionTitle>
        <Paragraph>
          This isn't just another tech platform—it's an open-source movement to rebuild local food systems. Whether you're a farmer, developer, designer, or someone who believes in our vision, there are many ways to contribute:
        </Paragraph>
        <List>
          <ListItem>Find Local Farms: Start your journey toward better food and stronger communities</ListItem>
          <ListItem>Join Development: Our platform is open-source—help us build tools that empower local food systems</ListItem>
          <ListItem>Spread the Word: Share our mission with farmers and food lovers in your community</ListItem>
          <ListItem>Share Knowledge: Contribute to our growing database of farming practices and food wisdom</ListItem>
        </List>
        <Paragraph>
          We believe that transforming our food system should be a community effort, not a proprietary product. That's why we're building Mendel's Farm in the open, where anyone can contribute to and improve upon our work.
        </Paragraph>
      </Section>
    </ManifestoContainer>
  );
}

export default Manifesto; 