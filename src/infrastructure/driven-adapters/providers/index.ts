import { TASK_SERVICES } from "@/domain/use-cases/task-service";
import { TASK_REPOSITORY } from "@/domain/entities/contracts/task-repository";
import { TaskServiceImpl } from "@/domain/use-cases/impl/task-service-impl";
import { TaskMongoRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongo/task-mongoose-repository-adapter";

export const adapters = [
  {
    provide: TASK_REPOSITORY,
    useClass: TaskMongoRepositoryAdapter,
  },
];

export const services = [
  {
    provide: TASK_SERVICES,
    useClass: TaskServiceImpl,
  },
];
