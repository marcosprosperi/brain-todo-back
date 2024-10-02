import { connect, set } from "mongoose";
import { Logger } from "@tsclean/core";
import { MONGODB_URI } from "@/application/config/environment";

export class MongoConfiguration {
    private logger: Logger;
    private static instance: MongoConfiguration;

    private constructor() {
        this.logger = new Logger(MongoConfiguration.name);
    }

    public static getInstance(): MongoConfiguration {
        if (!this.instance) {
            this.instance = new MongoConfiguration();
        }
        return this.instance;
    }

    public async managerConnectionMongo(): Promise<void> {
        set("strictQuery", true);

        try {
            await connect(MONGODB_URI);
            this.logger.log(`Connection successfully to database of Mongo: ${MONGODB_URI}`);
        } catch (error) {
            this.logger.error("Failed to connect to MongoDB", error);
        }
    }
}
