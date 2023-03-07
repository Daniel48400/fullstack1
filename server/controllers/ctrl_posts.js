const mongoose = require ('mongoose')
const Post = require ('../models/Post')

exports.getAllPosts =  async (req,res) => {
    try {
        let posts = await Post.find()
        return res.json(posts)
       
    }catch(err){
        return res.status(500).json({message: 'dataBase Error', error: err})
    }
}

exports.addPost = async (req,res) => {
    const {nom, description} = req.body
        if(!nom||!description) {
            return res.status(400).json({message : 'manque des datas'})
        }
    try{    
        let post = await Post.findOne( { nom: nom })
            if(post !==null){
                return res.status(409).json({message : `${nom} existe deja` })
            }

        post = new Post ({...req.body})    

        let postc = await post.save()     
            return res.json({message: ' post cree', data: postc})
   
    }catch(err) {
        return res.status(500).json({message: 'dataBase Error', error: err})
    }
         
}

exports.deletePost = async (req, res) =>{
    let postId = req.params.id
    if( !mongoose.Types.ObjectId.isValid(postId) ){
        return res.status(400).json({message : ' id pas valide'})}
    try{
        
        await Post.findByIdAndDelete(postId)
        return res.status(200).json({message : 'post supprime'})
    }catch{
        return res.status(500).json({message: 'dataBase Error'})
    }
}