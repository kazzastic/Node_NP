const Post = require('../models/Post');


exports.send_post = async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err });
    });
};