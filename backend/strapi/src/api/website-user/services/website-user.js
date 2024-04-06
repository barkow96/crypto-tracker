'use strict';

/**
 * website-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-user.website-user');
