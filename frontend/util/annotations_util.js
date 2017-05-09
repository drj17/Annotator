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

export const isValidAnnotation = (range, annotations) => {
  let valid = true;
  if(range[1] - range[0] <= 0){
    valid = false;
  }
  annotations.forEach(annotation => {
    if(range[0] <= annotation.end_index && annotation.start_index <= range[1]){
      valid = false;
    }
  });
  return valid;
};

export const uniqueId = () => {
  return Math.random(10000);
};
