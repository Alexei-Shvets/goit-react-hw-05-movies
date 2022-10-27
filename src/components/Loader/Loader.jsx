import { FidgetSpinner } from 'react-loader-spinner';
import React from 'react';

export const Loader = () => {
  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={['#FF5733', '#00A36C', '#C70039']}
      backgroundColor="rgb(0, 150, 255)"
    />
  );
};