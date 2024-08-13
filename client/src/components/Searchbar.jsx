import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';

const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 100%;
  border: 1px solid ${({theme}) => theme.text_secondary + 90};
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Searchbar = () => {
  return (
    <SearchBarContainer>

        <SearchOutlined/>
        <input/>

    </SearchBarContainer>
    
  )
}

export default Searchbar