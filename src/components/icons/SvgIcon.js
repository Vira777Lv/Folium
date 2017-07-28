import React from 'react';
import PropTypes from 'prop-types';

export default function Icon(props) {
  const { glyph, className, size = 24 } = props;

  return (
    <svg className={className} width={size} height={size}>
      <use xlinkHref={glyph} />
    </svg>
  );
}

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
};
