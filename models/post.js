import mongoose, { Mongoose } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    caption: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
