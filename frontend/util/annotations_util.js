export const findOffset = (element) => {
  let offset = 0;
  while(element.previousSibling) {
    offset += element.previousSibling.textContent.length;
    element = element.previousSibling;

  }
   return offset;
};

export const orderAnnotations = (annotations) => {
  let ordered = annotations.sort((a, b) => {
    if(a.start_index < b.start_index){
      return -1;
    } else {
      return 1;
    }
  });

  return ordered;
};
