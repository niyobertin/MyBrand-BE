import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import express, {Request, Response} from 'express';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My brand API',
      description: "API that built in node js/Expres js and Typescript",
      contact: {
        name: "Niyonkuru Bertin",
        email: "niyonkurubbertin@gmail.com",
        url: "https://github.com/niyobertin"
      },
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
          Authorization: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
              value: "Bearer <JWT token here>"
          }
      }
    },
    servers: [
      {
        url: https://mybrand-be-p2fh.onrender.com",
        description: "Live server"
      },
    ]
  },

  apis: ['./src/**/*.ts'],
}
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app:any, port:any) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
export default swaggerDocs
