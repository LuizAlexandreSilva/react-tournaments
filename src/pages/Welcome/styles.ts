import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1120px;
  margin: 0 auto;
  height: calc(100% - 80px);
`;

export const Description = styled.h1`
  margin: 130px 180px;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;

  > span {
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
