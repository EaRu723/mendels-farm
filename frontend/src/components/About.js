import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 4rem;
  background-color: white;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: left;
`;

function About() {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        👋 Hi, I'm Andrea. I'm fascinated by the intersection of biology and technology so I studied Biomedical Engineering. Somewhere along the way, I realized that our lives have become needlessly complicated.
        <br />
        <br />
        My journey started with acne. After years of expensive creams, pills, and endless doctor visits, the solution wasn't in a bottle - it was on a farm. Switching to clean, whole foods did what thousands of dollars in treatments couldn't.
        <br />
        <br />
        That revelation sparked a hypothesis: what if the answer to many of our modern health struggles isn't more complexity, but less? What if we just need to get back to basics?
        <br />
        <br />
        I'm not a doctor, nutritionist, or some wellness guru. I'm an engineer who believes in data, simplicity, and the wisdom of nature. Sometimes the most revolutionary ideas are the simplest ones.
        <br />
        <br />
        That's why I created Mendel's Farm - to help people heal themselves through real food while supporting the local farmers who make it possible.
        </AboutText>
    </AboutContainer>
  );
}

export default About; 