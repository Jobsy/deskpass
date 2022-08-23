import { ChangeEvent } from "react";


const stripQuote = (word: string) => {
    // check each char within the string for a single or double quote
    // remove and replace with an empty char
    return word.replace(/"|'/g, "");
  
    // time and space complexity is 0(n)
}

export const onChange = (
  event: ChangeEvent<HTMLTextAreaElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setIsStripe: React.Dispatch<React.SetStateAction<string>>
): void => {
  const { value } = event?.target;
  if (stripQuote(value)) {
    setIsStripe(stripQuote(value));
  } 

  setValue(value); // update text realtime
};
