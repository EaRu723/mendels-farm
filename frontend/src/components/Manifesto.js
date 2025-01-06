import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  
  &:before {
    content: "•";
    color: #27AE60;
    position: absolute;
    left: 0;
  }
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: #7F8C8D;
  border-left: 4px solid #27AE60;
  padding-left: 1rem;
  margin: 2rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 2rem 0;
`;

const ActionButton = styled(Link)`
  font-family: 'Quicksand', sans-serif;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #27AE60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    background-color: #219a52;
  }
`;

const SubSection = styled.div`
  margin: 2rem 0 2rem 2rem;
`;

const SubSectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

function Manifesto() {
  return (
    <ManifestoContainer>
      <Title>The Mendel's Farm Manifesto</Title>
      
      <Section>
        <SectionTitle>Our Vision</SectionTitle>
        <Paragraph>
          We believe in a future where food is more than just sustenance—it's a connection to our land, our health, and our communities. The industrialization of agriculture has created a disconnect between people and their food sources, leading to deteriorating health and environmental consequences.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>The Problem</SectionTitle>
        <List>
          <ListItem>Industrial farming practices prioritize quantity over quality</ListItem>
          <ListItem>Processed foods dominate our diets</ListItem>
          <ListItem>Local farming communities are struggling</ListItem>
          <ListItem>Consumers lack access to truly healthy food options</ListItem>
          <ListItem>Environmental degradation from unsustainable practices</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Our Solution</SectionTitle>
        <Paragraph>
          At Mendel.farm, we're building a bridge between conscious consumers and ethical farmers. We believe that by supporting local, sustainable agriculture, we can:
        </Paragraph>

        <SubSection>
          <SubSectionTitle>Improve Public Health</SubSectionTitle>
          <List>
            <ListItem>Access to nutrient-dense, whole foods</ListItem>
            <ListItem>Reduced exposure to harmful pesticides and additives</ListItem>
            <ListItem>Better understanding of food sources</ListItem>
          </List>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Support Local Economies</SubSectionTitle>
          <List>
            <ListItem>Direct farmer-to-consumer relationships</ListItem>
            <ListItem>Fair prices for farmers</ListItem>
            <ListItem>Strengthened local food systems</ListItem>
          </List>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Protect Our Environment</SubSectionTitle>
          <List>
            <ListItem>Reduced transportation emissions</ListItem>
            <ListItem>Sustainable farming practices</ListItem>
            <ListItem>Improved soil health</ListItem>
            <ListItem>Enhanced biodiversity</ListItem>
          </List>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>Our Principles</SectionTitle>
        <List>
          <ListItem><strong>Transparency:</strong> Every farm on our platform is vetted and verified</ListItem>
          <ListItem><strong>Sustainability:</strong> We prioritize regenerative agricultural practices</ListItem>
          <ListItem><strong>Community:</strong> We foster direct relationships between farmers and consumers</ListItem>
          <ListItem><strong>Education:</strong> We empower consumers with knowledge about their food</ListItem>
          <ListItem><strong>Quality:</strong> We never compromise on the quality of our food</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Join the Movement</SectionTitle>
        <Paragraph>
          Every meal is a vote for the kind of world we want to live in. By choosing local, sustainable farms, you're not just making a purchase—you're making a statement about the future of food.
        </Paragraph>
        <Paragraph>
          Together, we can build a healthier, more sustainable food system for generations to come.
        </Paragraph>
      </Section>

      <ButtonContainer>
        <ActionButton to="/farms">Find Local Farms Near You →</ActionButton>
      </ButtonContainer>

      {/* <Quote>
        "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings." - Masanobu Fukuoka
      </Quote> */}
    </ManifestoContainer>
  );
}

export default Manifesto; 