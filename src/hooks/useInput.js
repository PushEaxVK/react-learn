// import React from 'react';

import { useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);
  return { value, onChange: evt => setValue(evt.target.value) };
};

export default useInput;
