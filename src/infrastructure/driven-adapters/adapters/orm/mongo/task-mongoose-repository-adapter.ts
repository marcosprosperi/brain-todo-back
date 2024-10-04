import {
  AddTaskParams,
  DeleteTaskParams,
  GetByIdTaskParams,
  TaskEntity,
  UpdateTaskParams,
} from "@/domain/entities/task";
import { TaskModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongo/models/task-mongoose";
import mongoose from "mongoose";

export class TaskMongoRepositoryAdapter {
  async save(data: AddTaskParams): Promise<TaskEntity> {
    return TaskModelSchema.create(data);
  }

  async delete(data: DeleteTaskParams): Promise<TaskEntity> {
    return TaskModelSchema.findByIdAndDelete(new mongoose.Types.ObjectId(data));
  }

  async getAll(): Promise<TaskEntity[]> {
    return TaskModelSchema.find();
  }

  async getById(data: GetByIdTaskParams): Promise<TaskEntity> {
    return TaskModelSchema.findById(new mongoose.Types.ObjectId(data));
  }

  async update(id:string, data: UpdateTaskParams): Promise<TaskEntity> {
    console.log(data)
    console.log(id)
    console.log(new mongoose.Types.ObjectId(id))
    const test = await TaskModelSchema.findByIdAndUpdate(new mongoose.Types.ObjectId(id), data)
    const test2 = await TaskModelSchema.findById(new mongoose.Types.ObjectId(id))
    console.log(test)
    console.log(test2)
    return TaskModelSchema.findByIdAndUpdate(new mongoose.Types.ObjectId(id), data)
  }
}
