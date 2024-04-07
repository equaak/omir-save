import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
=======
  // const config = new DocumentBuilder()
  //   .setTitle("Documentation of Oku.kz")
  //   .setDescription(
  //     "lorem ipsum dolor sit amet consectetur adip eu fugiat null a ante et dolore magna aliqu fugiat null"
  //   )
  //   .setVersion("1.0.0")
  //   .addTag("Oku.team")
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);

  // SwaggerModule.setup("/api/docs", app, document);

>>>>>>> cb8f1a4694af39c98dd55a6a751fdf5cba516c55
  const corsOptions: CorsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };
  app.enableCors(corsOptions);

  await app.listen(PORT, () =>
    console.log("Server listening on port: " + PORT)
  );
}

start();
