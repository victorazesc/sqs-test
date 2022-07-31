import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { SqsProducerModule } from "./sqs-producer.module";
import * as AWS from "aws-sdk";

async function bootstrap() {
  // Criar um objeto de serviço SQS no endpoint elasticmq
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
  
  const app = await NestFactory.create(SqsProducerModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>("PORT") || 3000;
  Logger.log(`listen port: ${port}`, "bootstrap");
  await app.listen(port);
}
bootstrap();
