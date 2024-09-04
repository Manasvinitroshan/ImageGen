import React from 'react'
import styled from '@emotion/styled';
import GenerateImageForm from '../components/GenerateImageForm';


const Container = styled.div`
  min-height: 2%; /* Ensures the container takes up the full viewport height */
  overflow-y:scroll;
  align-items: center;
  display: flex;
  padding: 30px 30px;
  padding-bottom: 40px;
  flex-direction: column;
  gap: 2px;
  @media (max-width: 768){

    padding: 6px 10px;
  }



`;

const Wrapper = styled.div`
  flex: 1;
  gap: 8%
  width:80%;
  max-width:1200px;
  padding: 32px 0px;
  display:flex;
  justify-content:center;
  @media (max-width: 768px){

    flex-direction: column;
  }

`;

const CreatePost = () => {
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm/>
      </Wrapper>
    </Container>
  )
}

export default CreatePost