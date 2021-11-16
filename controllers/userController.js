import { getCurrentUser } from "../utils/gerCurrentUser.js";

export const getUserDetails = async(req, res) => {
    
    try{
        const user = await getCurrentUser(req.params.id);
                                      
        if(!user)
            throw Error("User you are looking for does not exist.")

        res.status(200).send(user);
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}
