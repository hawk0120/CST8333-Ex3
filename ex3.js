/* Exercise 3
 * This handles FileIO for a dataset
 * that is stored in a csv file
 */

const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('canadianCheeseDirectory.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        for(i=1; i < results.length; i++ ){
         console.log(results[i].CheeseNameEn || results[i].CheeseNameFr)
        }
});

