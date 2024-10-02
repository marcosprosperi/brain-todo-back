import { AddTaskParams, DeleteTaskParams, TaskEntity, GetByIdTaskParams, UpdateTaskParams } from '@/domain/entities/task'

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface ITaskRepository {
    getAll: () => Promise<TaskEntity[]>
    getById: (id: GetByIdTaskParams) => Promise<TaskEntity>
    save: (data: AddTaskParams) => Promise<TaskEntity>
    delete: (data: DeleteTaskParams) => Promise<TaskEntity>
    update: (id: string, data: UpdateTaskParams) => Promise<TaskEntity>
}