import { IsBoolean, IsDate, IsString } from 'class-validator';
import { TaskEntity } from '../entities/task';

export class TaskDTO {
    @IsString()
    readonly id: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsBoolean()
    readonly is_done: boolean;

    @IsDate()
    readonly deadline: Date;

    @IsDate()
    readonly created_at: Date;

  
    constructor(task: TaskEntity) {
      this.id = task._id;
      this.title = task.title;
      this.description = task.description;
      this.is_done = task.is_done;
      this.deadline = task.deadline;
      this.created_at = task.created_at;
    }
  }