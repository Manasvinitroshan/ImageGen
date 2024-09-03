import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';

const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 90%;
  gap: 6px;
  align-items:center;
  border-radius:8px;
  padding:12 px 16px
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.text_secondary + 90};
  color: white;
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Searchbar = () => {
  return (
    <SearchBarContainer>

        <SearchOutlined/>
        <input 

        placeholder='Search with prompt or name...'
        
        style={{

          border: "none",
          outline: "none",
          color: 'white',
          width: '100%',
          background:"transparent"

        }}/>

    </SearchBarContainer>
    
  )
}

export default Searchbar