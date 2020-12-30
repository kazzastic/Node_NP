const Post = require('../models/Post');

exports.get_all_posts = async(req, res) => {
    try{
        const post = await Post.find();
        res.json(post);
    }catch(err){
        res.json({ message:err });
    }
};

exports.get_one_post = async(req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json("Post ID: "+post.id+" "+"Post Title: "+post.title);
    }catch(err){
        res.json({message: err});
    }
};