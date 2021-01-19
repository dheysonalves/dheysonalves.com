/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import * as S from './styles.js';

const Bio = () => {
  return (
    <S.Wrapper>
      <S.Title>Software developer and computer science student.</S.Title>
      <br />
      <S.Paragraph>
        Software developer, Roleplay Tabletop player at Roll20, weekend video
        game player, comic book reader, loves to create and design fantasy
        stories for my rpg adventures.
      </S.Paragraph>
    </S.Wrapper>
  );
};

export default Bio;
