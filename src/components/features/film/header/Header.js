import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { useHistory } from 'react-router-dom';
import {
  Container,
  FilterEffect,
  CardContainer,
  CoverCard,
  InfoContainer,
  StyledTitle,
  StyledContent,
  StyledButton,
} from './Header.styles';

const Header = ({ Movie }) => {
  const history = useHistory();

  return (
    <Container episode_id={Movie.episode_id}>
      <FilterEffect>
        <StyledButton onClick={() => history.push('/')}>
          <ArrowLeftIcon fontSize="large" />
        </StyledButton>
        <CardContainer width="450px">
          <CoverCard episode_id={Movie.episode_id} />
        </CardContainer>
        <InfoContainer width="100%">
          <StyledTitle
            component="span"
            fontWeight="fontWeightBold"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {Movie.title}
          </StyledTitle>
          <StyledContent>{Movie.opening_crawl}</StyledContent>
        </InfoContainer>
      </FilterEffect>
    </Container>
  );
};

Header.propTypes = {
  Movie: PropTypes.objectOf(PropTypes.any),
};

export default Header;
