'use strict';

/**
 * socio service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::socio.socio');
