const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minlength: [2, "Title must be at least 2 characters"]
        },
        price: {
            type: String,
            required: [true, "Price is required"],
        },
        description: {
            type: String,
            required : [true, "Description is required"],
            minlength: [2, "Description should be atleast 2 characters"]
        }
    },
    {timestamps:true}
);

const Test = mongoose.model("Test", TestSchema);

module.exports=Test;