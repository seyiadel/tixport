const organizationRouter = require("express").Router()
const OrganizationController = require("../controllers/organization.controller")
const {authorizeOrganizer} = require("../middlewares/auth")

organizationRouter.post("/organization/create", authorizeOrganizer, OrganizationController.create)

module.exports = {organizationRouter};