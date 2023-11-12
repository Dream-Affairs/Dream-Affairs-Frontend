import { useState } from 'react';

const useLimitedTextInput = (initialValue: string, maxLength: number) => {
  const [text, setText] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;

    // Limit the input to the specified maxLength
    const limitedText = inputText.slice(0, maxLength);

    setText(limitedText);
  };

  return { text, handleChange };
};

export default useLimitedTextInput;
