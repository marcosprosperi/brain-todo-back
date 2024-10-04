import { model, Schema } from "mongoose";
import { TaskEntity } from "@/domain/entities/task";

const schema = new Schema<TaskEntity>(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    is_done: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

schema.set('toJSON', {
  transform: function (_, ret, __) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 

export const TaskModelSchema = model<TaskEntity>("tasks", schema);
