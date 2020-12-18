const Post = require('../models/Post');


exports.delete_post = async(req, res) => {
    try{
        const removedpost = await Post.remove({_id: req.params.postId});
        res.json(removedpost);
    }catch(err){
        res.json({message: err});
    }
};