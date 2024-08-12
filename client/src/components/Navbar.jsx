import React from 'react';
import styled from '@emotion/styled';
import Button from './button';
import { AddRounded, Explore } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); /* Fixed property name */
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path= location.pathname.split("/")
  return (
    <Container>
      ImageGen

      {
        path[1] == 'post' ?  ( <Button
            onClick={() => navigate('/post')}
            text="Explore Posts"
            leftIcon={<Explore style={{ fontSize: '18px' }} />}

            type='secondary'
          />): (

            <Button
        onClick={() => navigate('/post')}
        text="Create New Post"
        leftIcon={<AddRounded style={{ fontSize: '18px' }} />}
      />

        ) 
      }
    </Container>
  );
};

export default Navbar;