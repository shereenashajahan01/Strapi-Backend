'use strict';
const fastcsv = require("fast-csv")
var fs = require('fs');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async uploadFile(ctx) {
        const { request: { body, files: { files } = {} } } = ctx; //getting the file.
        let fileTransformedToArray = []; //preparing empty array for storing entities.
    
        // we will use different parse methods for each file type
        if (files.type == 'text/csv') {
            const stream = fs.createReadStream(files.path)
          fileTransformedToArray = fastcsv
          .parse({column:Header})
          .on("data", function(data) {
            
            fileTransformedToArray.push(data);
           })
        }
        
        // now, as we have all data parsed as an Array, 
        // we can apply a foreach on it and create entities one by one
       
          await strapi.services.brands.create(entity);
        
      },
};
