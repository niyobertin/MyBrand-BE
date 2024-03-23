import mongoose from "mongoose";
const commentsSchema = new mongoose.Schema({
    visitor:{type:String,required:true},
    comments:{type:String,required:false},
    blogID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'blog'
      }]
})
export default mongoose.model("comments",commentsSchema);