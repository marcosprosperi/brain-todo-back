import "module-alias/register";

import helmet from 'helmet';
import { StartProjectInit } from "@tsclean/core";
import cors from 'cors';
        
import { AppContainer } from "@/application/app";
import { PORT } from "@/application/config/environment";
import { singletonInitializers } from "@/application/singleton";
import { errorHandler } from "./middlewares/errorHandler";

async function init(): Promise<void> {
  for (const initFn of singletonInitializers) {
    await initFn();
  }

  const app = await StartProjectInit.create(AppContainer)
  app.use(helmet());
  app.use(cors({
    origin: '*',
  }));
  app.use(errorHandler)
  await app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
}
   
void init().catch();