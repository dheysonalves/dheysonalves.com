import styled from 'styled-components';

export const Heading = styled.h1`
  margin-top: rhythm(1);
  margin-bottom: 0;
`;

export const Paragraph = styled.p`
  /* scale(-1 / 5); */
  display: block;
  margin-bottom: rhythm(1);
`;

export const Hr = styled.hr`
  margin-bottom: rhythm(1);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;
