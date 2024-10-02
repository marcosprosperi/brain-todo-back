import { MongoConfiguration } from "@/application/config/mongoose-instance";

/**
 * This array has all the singleton instances of the application
 */
export const singletonInitializers: Array<() => Promise<void>> = [
  async () => {
    const mongooseConfig = MongoConfiguration.getInstance();
    await mongooseConfig.managerConnectionMongo();
  },
];
