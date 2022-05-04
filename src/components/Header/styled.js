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

export const Input = styled.div`
  position: relative;

  input {
    width: 400px;

    padding: .8rem 1rem;
    padding-right: 1rem;
    margin-bottom: 10px;

    border: 1px solid #ddd;
    border-radius: 30px;
  }

  .lupa {
    display: block;
    position: absolute;

    top: 5px;
    right: 5px;
    padding: .4rem .6rem;
  }
`;
