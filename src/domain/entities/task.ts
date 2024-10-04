export type TaskEntity = {
    _id: string
    title: string
    description: string
    deadline: Date
    is_done: boolean,
    created_at: Date
}

export type AddTaskParams = Omit<TaskEntity, 'id' | 'created_at'>
export type DeleteTaskParams = string
export type GetByIdTaskParams = string
export type UpdateTaskParams = Pick<TaskEntity, 'is_done'>
