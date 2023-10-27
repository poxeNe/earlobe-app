export const shortenString = (string: string, maxLength: number) => {
  if (string.length >= maxLength) {
    const slicedString = string.slice(0, maxLength - 1);

    return slicedString.trim() + "...";
  }

  return string;
};
