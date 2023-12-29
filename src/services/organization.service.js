const OrganizationDAO = require("../dao/organization.dao")

class OrganizationService{
    async createOrganization(organizationData){
        const organization = await OrganizationDAO.createOrganization(organizationData)
        return organization;
    }
}

module.exports = new OrganizationService();