import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ::after {
    flex: auto;
    margin: 20px;
    width: 250px;
  }
`;
