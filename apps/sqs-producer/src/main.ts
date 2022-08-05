import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { SqsProducerModule } from "./sqs-producer.module";
import * as AWS from "aws-sdk";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
  var config = {
    endpoint: new AWS.Endpoint("http://localhost:4566"),
    accessKeyId: "na",
    secretAccessKey: "na",
    region: "us-east-1",
  };
  var sqs = new AWS.SQS(config);

  sqs.createQueue(
    { QueueName: "queue-service-handle-contract" },
    function (err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    }
  );  
  
  sqs.createQueue(
    { QueueName: "queue-service-core-translator" },
    function (err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    }
  );
  
  const app = await NestFactory.create<NestExpressApplication>(SqsProducerModule)
  const configService = app.get(ConfigService);
  const port = configService.get<string>("PORT") || 3000;
  Logger.log(`listen port: ${port}`, "bootstrap");

  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.setViewEngine('handlebars')
  await app.listen(port);
}
bootstrap();
