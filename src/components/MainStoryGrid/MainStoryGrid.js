import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import { QUERIES } from '../../constants';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        {SECONDARY_STORIES.map((story, index) => (
          <VerticalStoryWrapper key={story.id}>
            <SecondaryStory {...story} />
          </VerticalStoryWrapper>
        ))}
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 48px 0px;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    margin-bottom: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas: 
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    gap: 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    background: var(--color-gray-100);
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    padding-bottom: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const OpinionStoryList = styled.div`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 32px;
    background: revert;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  
  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
    margin-left: 16px;
    margin-top: 16px;
  }
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`

const OpinionWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      border-bottom: revert;
      padding-bottom: revert;
      margin-bottom: revert;
    }
  }
`

export default MainStoryGrid;
