import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    role:{type:String},
    password:{type:String,required:true,unique:true}
});
export default mongoose.model("User",UserSchema);