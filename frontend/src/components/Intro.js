import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IntroContainer = styled.div`
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

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495E;
  margin-bottom: 1.5rem;
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

function Intro() {
  return (
    <IntroContainer>
      <Title>Find Real Food from Local Farms</Title>
      <IntroText>
        We connect you directly with verified local farmers who grow clean, nutrient-dense food. We make it simple to discover, order, and pick up fresh produce and products from sustainable farms near you.
      </IntroText>
      <ButtonContainer>
        <ActionButton to="/farms">Find Local Farms Near You →</ActionButton>
      </ButtonContainer>
    </IntroContainer>
  );
}

export default Intro;
