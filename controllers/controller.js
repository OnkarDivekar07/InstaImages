const posts = require('../model/postmodel');
const comment = require('../model/commentmodel');

exports.getposts = async (req, res) => {
    console.log('posts data send');
    try {
        const result = await posts.findAll();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
};

exports.postdescription = async (req, res, next) => {
    console.log('description added');
    const description = req.body.description;
    const img = req.body.img;

    try {
        const result = await posts.create({
            description: description,
            img: img,
        });
        res.send(result);
    } catch (err) {
        console.log(err);
    }
};

exports.postcomment = async (req, res, next) => {
    console.log('comment added');
    const comments = req.body.comment;
    const id = req.body.postid;
    console.log(id);

    try {
        const result = await comment.create({
            text: comments,
            postId: id,
        });
        res.send(result);
    } catch (err) {
        console.log(err);
    }
};

exports.getcomment = async (req, res) => {
    console.log('comment data send');

    try {
        const result = await comment.findAll();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
};
