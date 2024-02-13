import articleModel from "#src/models/Articles";

const exposeServices = {

    findAllArticles: async ()=>{
        try {
            const   allArticles = await articleModel.find({})
            return  allArticles
        } catch (error) {
            throw error(error)
        }
    }


}



export default exposeServices