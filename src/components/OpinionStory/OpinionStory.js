import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <Article>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </Article>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  background: var(--color-gray-100);
  display: grid;
  grid-template-areas: 'article avatar';
  gap: 21px;
  
  @media ${QUERIES.tabletOnly} {
    display: flex;
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: avatar;
  justify-self: end;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

const Link = styled.a`
  background: var(--color-gray-100);
  &:not(:first-of-type) {
    padding-top: 16px;
  }
  &:not(:last-of-type) {
    padding-bottom: 16px;
  }

  @media ${QUERIES.tabletOnly} {
    &:not(:first-of-type) {
      padding-top: 0px;
    }
    &:not(:last-of-type) {
      padding-bottom: 0px;
    }
  }
`

const Article = styled.div`
  grid-area: article;
`

export default OpinionStory;
