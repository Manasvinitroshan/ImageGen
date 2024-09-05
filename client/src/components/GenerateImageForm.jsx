import React from 'react'
import styled from "styled-components"
import Button from "./button"
import TextInput from "./TextInput"
import { AutoAwesome, CreateRounded } from '@mui/icons-material';


const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  width: 100%;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
  
`;

const GenerateImageForm = () => {
  return (

    <Form>
        <Top>
            <Title>Generate Image with prompt</Title>
            <Desc>Write your prompt according to your liking</Desc>
        </Top>
        <Body>
            <TextInput label = "Author" placeholder="Enter your name here..."/>
            <TextInput label = "Image Prompt" placeholder="Enter your image prompt here..." name="name" rows="8" textArea/>
        </Body>
        <Actions>
            <Button text="Generate Image" flex leftIcon={<AutoAwesome/>}/>
            <Button text="Post Image" flex leftIcon={<CreateRounded/>} type= "secondary"/>
        </Actions>
    </Form>
  )
}

export default GenerateImageForm