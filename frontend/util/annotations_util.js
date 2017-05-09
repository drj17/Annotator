export const findOffset = (element) => {
  let offset = 0;
  while(element.previousSibling) {
    offset += element.previousSibling.textContent.length;
    element = element.previousSibling;

  }
   return offset;
};
