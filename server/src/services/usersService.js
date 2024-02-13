import userModel from "#src/models/Users";

const exposeServices = {

    findAllUsers: async ()=>{
        try {
            const   allUsers = await userModel.find({})
            return  allUsers
        } catch (error) {
            throw error(error)
        }
    },
    createUser: async (userData) => {
        try {
            const user = new userModel(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error(error);
        }
    },


}



export default exposeServices