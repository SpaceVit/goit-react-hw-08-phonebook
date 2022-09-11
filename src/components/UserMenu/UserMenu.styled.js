import styled from 'styled-components';

export const Button = styled.button`
  margin: auto;
  outline: none;
  padding: 0 10px;
  width: 100px;
  height: 20px;
  margin-left: 3px;
  margin-bottom: 3px;
  color: ${props => props.theme.colors.secondaryText};
  background-color: ${props => props.theme.colors.avatarBackground};
  border: 1px solid black;
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.cardItemBackground};
  }
`;
