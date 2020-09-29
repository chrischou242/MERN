const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
    {
        PetName: {
            type: String,
            required: [true, "Title is required"],
            minlength: [3, "Pet Name must be at least 3 characters"]
        },
        PetType: {
            type: String,
            required: [true, "Pet Type is required"],
            minlength:[3, "Pet type must be at least 3 characters long"]
        },
        PetDescription: {
            type: String,
            required : [true, "Description is required"],
            minlength: [3, "Pet Description should be atleast 2 characters"]
        },
        SkillOne:{
            type:String
        },
        SkillTwo:{
            type:String
        },
        SkillThree:{
            type:String
        }
    },
    {timestamps:true}
);

const Test = mongoose.model("Test", TestSchema);

module.exports=Test;