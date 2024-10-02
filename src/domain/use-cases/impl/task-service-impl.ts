import { Adapter, Service } from "@tsclean/core";
import { ITaskService } from "@/domain/use-cases/task-service";
import {
  ITaskRepository,
  TASK_REPOSITORY,
} from "@/domain/entities/contracts/task-repository";
import { AddTaskParams, DeleteTaskParams, GetByIdTaskParams, TaskEntity, UpdateTaskParams } from "@/domain/entities/task";

@Service()
export class TaskServiceImpl implements ITaskService {
  constructor(
    @Adapter(TASK_REPOSITORY)
    private readonly taskRepository: ITaskRepository
  ) {}

  async save(data: AddTaskParams): Promise<TaskEntity> {
    // Send the data to the repository.
    return this.taskRepository.save(data);
  }

  async update(id: string, data: UpdateTaskParams): Promise<TaskEntity> {
    return this.taskRepository.update(id, data)
  }

  async delete(data: DeleteTaskParams): Promise<TaskEntity>{
    return this.taskRepository.delete(data);
  }

  async getAll(): Promise<TaskEntity[]>{
    return this.taskRepository.getAll();
  }

  getById(id: GetByIdTaskParams): Promise<TaskEntity> {
    return this.taskRepository.getById(id)
  }
}
