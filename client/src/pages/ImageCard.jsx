import React from 'react'
import styled from "styled-components"
import {LazyLoadImage} from "react-lazy-load-image-component"

const Card = styled.div`

 position: relative;
 display:flex;
 border-radius: 20px
 box-shadow: 1px 2px 40px 8px ${({theme}) => theme.black + 60}
 transition: all 0.3s ease;
 cursor: pointer
 &:hover{

    box-shadow: 1px 2px 40px 8px ${({theme}) => theme.black + 80}
    scale: 1.05
 }

 width:25px
 height:25px


 
`;

const Prompt = styled.div`


 
`;

const Author = styled.div`


 
`;

const HoverOverlay = styled.div`


 
`;

const ImageCard = () => {
  return (
    <Card>
        <LazyLoadImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png'/>
        <HoverOverlay>
            <Prompt>
                Prompt
            </Prompt>

            <Author>
                Author
            </Author>
        </HoverOverlay>
    </Card>
  )
}

export default ImageCard