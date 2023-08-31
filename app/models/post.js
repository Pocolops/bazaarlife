import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      discreption: {
        type: String,
        required: [true, 'Prompt is required.'],
      },
      tag: {
        type: String,
        required: [true, 'Tag is required.'],
      },
      image: {
        type: 'string',
    },
    });

const  Post = models.Post || model("User", PostSchema);

export default Post;