import axios from 'axios';
import { useState } from 'react';

const useOpenAi = () => {
  const [data, setData] = useState('');

  const fetchData = async (text) => {
    const options = {
      method: 'POST',
      url: 'https://api.openai.com/v1/completions',
      headers: {
        Authorization: process.env.REACT_APP_OPENAI_TOKEN,
      },
      data: {
        model: 'text-davinci-003',
        prompt: text,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      },
    };
    const response = await axios(options);
    setData(response.data.choices[0].text);
  };
  return [data, fetchData];
};

export default useOpenAi;
