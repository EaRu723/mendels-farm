import styled from 'styled-components';
import { useState, useEffect } from 'react';

const FarmsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Quicksand', sans-serif;
`;

const WideContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #2C3E50;
  margin-bottom: 2rem;
  font-family: 'Amatic SC', cursive;
  text-align: center;
`;

const SearchSection = styled.section`
  margin: 3rem 0;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #ECF0F1;
  border-radius: 5px;
  margin-bottom: 2rem;
  font-family: 'Quicksand', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #27AE60;
  }
`;

const FarmsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  text-align: left;
`;

const FarmFrame = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
  border: 2px solid #ECF0F1;
  border-radius: 8px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
`;

const LoadingText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495E;
  text-align: center;
  margin: 2rem 0;
`;

const ErrorText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #E74C3C;
  text-align: center;
  margin: 2rem 0;
`;

function Farms() {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/farms');
        if (!response.ok) {
          throw new Error('Failed to fetch farms');
        }
        const data = await response.json();
        setFarms(data.farms);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFarms();
  }, []);

  if (loading) return <FarmsContainer><LoadingText>Loading farms...</LoadingText></FarmsContainer>;
  if (error) return <FarmsContainer><ErrorText>Error: {error}</ErrorText></FarmsContainer>;

  return (
    <FarmsContainer>
      <Title>Local Farms Near You</Title>
      
      <SearchSection>
        <SearchInput 
          type="text" 
          placeholder="Enter your location to find nearby farms..."
        />
      </SearchSection>

      <WideContainer>
        <FarmsGrid>
          {farms.map((farm) => (
            <FarmFrame
              key={farm.id}
              title={farm.name}
              src={farm.url}
              sandbox="allow-same-origin allow-scripts"
            />
          ))}
        </FarmsGrid>
      </WideContainer>
    </FarmsContainer>
  );
}

export default Farms; 