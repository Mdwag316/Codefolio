// Description: 

// There is no back-end code for storing emoji reactions yet. Might be added later. 



// const router = require('express').Router();
// const { Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newComment = await Comment.create({
//             content: req.body.content,
//             post_id: req.body.post_id,
//             user_id: req.session.user_id,
//         });

//         res.status(200).json(newComment);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const postData = await Post.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });

//         if (!postData) {
//             res.status(404).json({ message: 'No Post found with this id!' });
//             return;
//         }

//         res.status(200).json(PostData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;
