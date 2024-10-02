import {
  AddTaskParams,
  DeleteTaskParams,
  GetByIdTaskParams,
  TaskEntity,
  UpdateTaskParams,
} from "@/domain/entities/task";
import { ITaskService, TASK_SERVICES } from "@/domain/use-cases/task-service";
import { Mapping, Get, Adapter, Post, Body, Delete, Param, Put } from "@tsclean/core";

@Mapping("api/v1/tasks")
export class TaskController {
  constructor(
    @Adapter(TASK_SERVICES)
    private readonly taskService: ITaskService
  ) {}

  @Get()
  async getAllTaskController(): Promise<TaskEntity[] | any> {
    const tasks = await this.taskService.getAll();

    return {
      tasks: tasks || [],
      total: (tasks || []).length, //Total deberia ser un valor traigo de la base de datos si es que voy a paginar
    };
  }

  @Get(':id')
  async getByIdTaskController(@Param() id: GetByIdTaskParams): Promise<TaskEntity | any> {
    const task = await this.taskService.getById(id);
    if (!task)
      return {
        message: "Task not found",
      };
    return {
      task,
    };
  }

  @Post()
  async saveTaskController(
    @Body() data: AddTaskParams
  ): Promise<TaskEntity | any> {
    const task = await this.taskService.save(data);
    if (!task) {
      return {
        message: "No se creo la task",
      };
    }
    return {
      message: "Task created successfully",
      task,
    };
  }

  @Put(':id')
  async updateTaskController(
    @Param() id: string,
    @Body() data: UpdateTaskParams
  ): Promise<TaskEntity | any> {
    const task = await this.taskService.update(id, data);
    if (!task) {
      return {
        message: "Task not found",
      };
    }
    return {
      message: "Task updated successfully",
    };
  }

  @Delete(':id')
  async deleteTaskController(@Param() id: DeleteTaskParams): Promise<TaskEntity | any> {
    const task = await this.taskService.delete(id);
    if (!task) {
      return {
        message: "Task not found",
      };
    }
    return {
      message: "Task deleted successfully",
    };
  }
}

//DTO
//ERRORES
//TIPO PARA DEVOVLER MENSJAES
