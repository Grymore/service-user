const { User } = require("../../../models");



module.exports = async (req, res) => {

    const userIds = req.query.user_ids || [];
    const sqlOtions =   {
        attributes : ['id', 'name', 'role', 'profession', 'avatar']
    } 


    if (userIds.length){
        sqlOtions.where = {
            id: userIds
        }
    }

    const allUsers = await User.findAll(sqlOtions);


    
    return res.json({
        status : 'success',
        data : allUsers
    })


}