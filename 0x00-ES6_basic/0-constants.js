export function taskFirst() {
<<<<<<< HEAD
    const task = 'I prefer const when I can.'; 
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let'; 
    combination += getLast();
  
    return combination;
  }
  
=======
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
>>>>>>> 7e6288cbb974d5459f4d9a67edd95cbb73477093
