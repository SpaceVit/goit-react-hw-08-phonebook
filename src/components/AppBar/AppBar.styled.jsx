import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-bottom: 3px;
  margin-right: 5px;
  &.active {
    color: white;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: #ebeffa;
  }
`;
