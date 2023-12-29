const OrganizationService = require("../services/organization.service")

class OrganizationController{
    async create(req, res){
        const organizationData = {
            name:req.body.name,
            bio:req.body.bio,
            userId:req.user.id
        }
        
        try{
            const organization = await OrganizationService.createOrganization(organizationData);
            res.status(200).json({data:organization})
        }catch(error){
            res.status(400).json({data:null, error:error.message})
        }
        
    }
}

module.exports = new OrganizationController();