import React from 'react'
import styled from "styled-components"
import {LazyLoadImage} from "react-lazy-load-image-component"
import Avatar from '@mui/material/Avatar';
import { DownloadRounded } from '@mui/icons-material';
import FileSaver from "file-saver";

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({theme}) => theme.black + 60};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 40px 8px ${({theme}) => theme.black + 80};
    transform: scale(1.05);  /* Fixed transform property */
  }
`;

const Prompt = styled.div`
  font-weight: 400px;
  font-size: 15px;
  color: white;
`;

const Author = styled.div`

  font-weight: 400px;
  font-size: 14px;
  display: flex;
  gap:10px;
  align-items:center;
  color:white;
  
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const ImageCard = ({item}) => {
  return (
    <Card>
      <LazyLoadImage 
        src={item?.photo}
        style={{width: '100%', height: 'auto', borderRadius: '20px', objectFit: 'cover'}} 
      />
      <HoverOverlay>
        <Prompt>
          {item?.prompt}
        </Prompt>

        <div style={{

            width: "100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",

        }}>

        </div>
        <Author>

         {item?.author}
        </Author>
        <DownloadRounded onClick={()=> FileSaver.saveAs(item?.photo,"download.jpg")}/>
      </HoverOverlay>
    </Card>
  )
}

export default ImageCard