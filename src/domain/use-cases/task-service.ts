import { AddTaskParams, DeleteTaskParams, GetByIdTaskParams, TaskEntity, UpdateTaskParams } from "../entities/task";

export const TASK_SERVICES = 'TASK_SERVICES';
        
export interface ITaskService {
    getAll: () => Promise<TaskEntity[]>
    getById: (id: GetByIdTaskParams) => Promise<TaskEntity>
    save: (data: AddTaskParams) => Promise<TaskEntity>
    update: (id: string, data: UpdateTaskParams) => Promise<TaskEntity>
    delete: (id: DeleteTaskParams) => Promise<TaskEntity>

}