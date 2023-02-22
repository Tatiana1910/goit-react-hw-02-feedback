import propTypes from 'prop-types';
import { Title, SectionStyles } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <Title>{title}</Title>
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
