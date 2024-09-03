import React from 'react'
import styled from '@emotion/styled';
import Searchbar from '../components/Searchbar';
import { Card } from '@mui/material';
import ImageCard from '../pages/ImageCard';


const Container = styled.div`
  min-height: 25%; /* Ensures the container takes up the full viewport height */
  overflow-y:scroll;
  align-items: center;
  display: flex;
  padding: 30px 30px;
  padding-bottom: 40px;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768){

    padding: 6px 10px;
  }



`;

const Wrapper = styled.div`

  width:80%;
  max-width:1400px;
  padding: 32px 0px;
  display:flex;
  justify-content:center;

`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }

  width:120px
  height:120px
`;


const Home = () => {
  return (
    <Container>

        <h1>Explore Posts made by AI</h1>
        <Searchbar/>


      <Wrapper>
        <CardWrapper>
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home