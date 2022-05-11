import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
  .cab {
    position: relative;
    width: 90vw;
    margin-top: -10px;
  }
  .pok {
    width: 80px;
    height: 80px;
    margin-top: -10px;

    position: absolute;
  }
`;
