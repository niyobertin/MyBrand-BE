  
  /** POST Methods */
    /**
 * @swagger
 * /api/v1/blogs:
 *  post:
 *     summary: Create a blog
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *              - content
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *              content:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      500:
 *        description: Server Error
 */

    /**
 * @swagger
 * /api/v1/blogs:
 *   get:
 *     summary: Get all blogs
 *     description: Retrieve a list of blogs
 *     responses:
 *       200:
 *         description: A list of blogs
 *         content:
 *           application/json:
 *             schema:
 */

       /**
 * @swagger
 * /api/v1/blogs/65fa03b7bae5c15a418f8ceb:
 *   get:
 *     summary: Get single blog
 *     description: Retrieve a list of blog
 *     responses:
 *       200:
 *         description: A list of blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */


    /**
 * @swagger
 * /api/v1/mybrand/users/login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user and returns a token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized
 */

           /**
 * @swagger
 * /api/v1/mybrand/users:
 *  post:
 *     summary: User register
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - email
 *              - password
 *            properties:
 *              username:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *      201:
 *        description: Registerd
 *      500:
 *        description: Server Error
 */

     /**
 * @swagger
 * '/api/v1/blogs/65fa03b7bae5c15a418f8ceb':
 *  patch:
 *     summary: Update a blog
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *              - content
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *              content:
 *                type: string
 *     responses:
 *      201:
 *        description: Updated
 *      500:
 *        description: Server Error
 */

       /**
 * @swagger
 * /api/v1/blogs/65fa03b7bae5c15a418f8ceb:
 *   delete:
 *     summary: Get single blog
 *     description: Retrieve a list of blog
 *     responses:
 *       200:
 *         description: A list of blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */  

           /**
 * @swagger
 * /api/v1/blogs/65fa03b7bae5c15a418f8ceb/coments:
 *  post:
 *     summary: Create a comment
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - visitor
 *              - coment
 *            properties:
 *              visitor:
 *                type: string
 *              coment:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      500:
 *        description: Server Error
 */

   /**
 * @swagger
 * /api/v1/blogs/65fa03b7bae5c15a418f8ceb/coments:
 *   get:
 *     summary: Get all comments
 *     description: Retreaving comments
 *     responses:
 *       200:
 *         description: A list of comments
 *         content:
 *           application/json:
 *             schema:
 */