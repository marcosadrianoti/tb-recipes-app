import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

export default function CopyButton({ type, id, dataTest }) {
  const [copied, setCopied] = useState(false);

  const copyURL = () => {
    const url = `http://localhost:3000/${type}s/${id}`;
    clipboardCopy(url);
    setCopied(true);
  };

  return (
    <>
      { copied && <p>Link copied!</p> }
      <button
        src={ shareIcon }
        type="button"
        onClick={ copyURL }
        disabled={ !type || !id }
        data-testid={ dataTest }
      >
        <img src={ shareIcon } alt="Compartilhar" />
      </button>
    </>
  );
}

CopyButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
};
