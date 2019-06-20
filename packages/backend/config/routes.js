/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    "POST /v1/templates": "v1/admin/create-template",
    "GET /v1/templates/:id": "v1/admin/get-template",
    "GET /v1/templates": "v1/admin/get-templates",
};
