export type TaskEntity = {
    id: string
    title: string
    description: string
    deadline: Date
    is_done: boolean,
}

export type AddTaskParams = Omit<TaskEntity, 'id'>
export type DeleteTaskParams = string
export type GetByIdTaskParams = string
export type UpdateTaskParams = Pick<TaskEntity, 'is_done'>
