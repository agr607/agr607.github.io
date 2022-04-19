function getData() {
  return {
  years: new Array(),
  albums: new Map([]),
  isLoading: true,
  fetchData() {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/1DS-K9PCCg7ERCHp9dAaHkFUK4iN4FVi6A5sit7NUO7I?key=AIzaSyDqn3EY6AlwyqOHJdAx2rJzWT5TqtrdMOI`)
          .then((res1) => res1.json())
          .then((data1) => {
              const sheetsObj = data1.sheets;
              let counter = 0;
              sheetsObj.forEach( sheet => {
                  let year = sheet.properties.title;
                  this.years.push(year);
                  fetch(`https://sheets.googleapis.com/v4/spreadsheets/1DS-K9PCCg7ERCHp9dAaHkFUK4iN4FVi6A5sit7NUO7I/values/${year}!A1:G1000?key=AIzaSyDqn3EY6AlwyqOHJdAx2rJzWT5TqtrdMOI`)
                      .then((res2) => res2.json())
                      .then((data2) => {
                          const valuesObj = data2.values;
                          this.albums.set(year, valuesObj);
                      })
                      .then((after2) => {
                              ++counter;
                              if (counter === sheetsObj.length -1) {
                                  this.isLoading = false;
                              }
                          }
                      );
              });
          });
  }
  };
}