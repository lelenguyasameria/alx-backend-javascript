const getListStudentIds = (getList) => {
<<<<<<< HEAD
    let lisdata = [];
    if (!(getList instanceof Array)) {
      return lisdata;
    }
    lisdata = getList.map((results) => results.id);
    return lisdata;
  };
  export default getListStudentIds;
=======
  let lisdata = [];
  if (!(getList instanceof Array)) {
    return lisdata;
  }
  lisdata = getList.map((results) => results.id);
  return lisdata;
};
export default getListStudentIds;
>>>>>>> 0e716f8be58b170bf70990878b78552ffeb90324
