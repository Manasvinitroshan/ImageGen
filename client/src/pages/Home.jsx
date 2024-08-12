import React from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100%; /* Ensures the container takes up the full viewport height */
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

const Home = () => {
  return (
    <Container>

        <h1>Explore Posts made by AI</h1>
      



    </Container>
  )
}

export default Home