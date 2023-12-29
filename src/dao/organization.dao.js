const {db} = require("../db/db.service")

class OrganizationDAO{

    async createOrganization (organizationData){
       return await db.organization.create({data:organizationData})
    }

}

module.exports = new OrganizationDAO();
