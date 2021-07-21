  /**
   * cleanse all data to do with names and tags
   * @param {object} student - data regarding student
   * @param {object} filters - values of each prop represents the filter form current text input
   * @returns student name, name filter, tags array, and tags filter
   */
   function cleanData(student, filters) {
    const fullName = (`${student.firstName} ${student.lastName}`).toLowerCase();
    const nameFilter =  filters.name.trim().toLowerCase();

    const tags = student.tags.map(tag => tag.toLowerCase());
    const tagFilter =  filters.tag.trim().toLowerCase();
    
    return { fullName, nameFilter, tags, tagFilter }
  }

  // average of all grades, allowing for 3rd decimal place if needed. 
  function averageScore(listOfScores){
    return parseFloat((listOfScores.reduce((a, b) => {
      return Number(a) + Number(b)
    }) / listOfScores.length).toFixed(3));
  }
  
export { cleanData, averageScore }