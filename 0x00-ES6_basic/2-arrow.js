export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    // Arrow function syntax for addNeighborhood
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }
  