import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 0;
  background: var(--header-background);
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.75);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin: 0 5px;
  }

  > a {
    color: var(--primary);
  }
`;

export const HeaderTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 0;
`;

export const HeaderLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 15px;
`;

export const TextButton = styled.button`
  text-decoration: underline;
  color: var(--primary);
  background-color: transparent;
  border: 0;
`;

export const Username = styled.span`
  padding-right: 5px;
  border-right: 1px solid var(--white);
`;
