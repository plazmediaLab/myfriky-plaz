import styled from '@emotion/styled';

export const ContentTextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  p{
    white-space: pre-wrap;
  }

  @media (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;