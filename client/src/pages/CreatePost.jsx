import React from 'react'
import styled from '@emotion/styled';
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';

const Container = styled.div`
  min-height: 2%;
  overflow-y:scroll;
  align-items: center;
  display: flex;
  padding: 30px 30px;
  padding-bottom: 40px;
  flex-direction: column;
  width:100%;
  gap: 2px;
  @media (max-width: 768){

    padding: 10px 10px;
  }



`;

const Wrapper = styled.div`
  flex: 1;
  gap: 8%
  width:100%;
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
        <GeneratedImageCard/>
      </Wrapper>
    </Container>
  )
}

export default CreatePost