'use strict';
const { isDraft } = require('strapi-utils').contentTypes;
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    async create(data, { files } = {}) {
        const validData = await strapi.entityValidator.validateEntityCreation(
          strapi.models.brands,
          data,
          { isDraft: isDraft(data, strapi.models.brands) }
        );
    
        const entry = await strapi.query('brands').create(validData);
    
        if (files) {
          // automatically uploads the files based on the entry and the model
          await strapi.entityService.uploadFiles(entry, files, {
            model: 'brands',
            // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
          });
          return this.findOne({ id: entry.id });
        }
    
        return entry;
      },
    
     
};
