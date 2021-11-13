import User from "../models/UserModel.js"

export const getCurrentUser = async(userId) => {
    try{     
        
        const user = await User.findOne({_id : userId})
                                      .populate({
                                          path : "connections",
                                          populate : {
                                              path : "requester"
                                          }
                                      })
                                      .populate({
                                        path : "connections",
                                        populate : {
                                            path : "recipient"
                                        }
                                    }); 
        return user;
    }
    catch(err){
        return null;
    }
}