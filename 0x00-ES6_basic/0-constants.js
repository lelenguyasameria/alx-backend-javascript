export function taskFirst() {
    const task = 'I prefer const when I can.'; // Updated var to const
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let'; // Updated var to let
    combination += getLast();
  
    return combination;
  }
  