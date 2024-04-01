  
    /**
 * @swagger
 * /api/v1/blogs:
 *  post:
 *     security:
 *       - Authorization: []
 *     summary: Create a blog
 *     tags:
 *      - Blogs routes
 *     requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *           schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *                format: binary
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
 *     tags:
 *      - Blogs routes
 *     description: Retrieve a list of blogs
 *     responses:
 *       200:
 *         description: A list of blogs
 */

    /**
 * @swagger
 * /api/v1/blogs/{blogId}:
 *   get:
 *     summary: Get single blog
 *     tags:
 *      - Blogs routes
 *     description: Retrieve a list of blog
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: ok
 */

      /**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: Login
 *     tags:
 *      - Users routes
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
 */

           /**
 * @swagger
 * /api/v1/users:
 *  post:
 *     summary: User register
 *     tags:
 *      - Users routes
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
 * '/api/v1/blogs/{blogId}':
 *  put:
 *     security:
 *       - Authorization: []
 *     summary: Update a blog
 *     tags:
 *      - Blogs routes
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *      required: false
 *      content:
 *       multipart/form-data:
 *           schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *                format: binary
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
 * /api/v1/blogs/{blogId}:
 *   delete:
 *     security:
 *       - Authorization: []
 *     summary: Delete single blog
 *     tags:
 *      - Blogs routes
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted
 */  

           /**
 * @swagger
 * /api/v1/blogs/{blogId}/comments:
 *  post:
 *     summary: Create a comments
 *     tags:
 *      - comments routes
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              visitor:
 *                type: string
 *              comments:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 */

   /**
 * @swagger
 * /api/v1/blogs/{blogId}/comments:
 *   get:
 *     summary: Get all comments
 *     tags:
 *      - comments routes
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of comments
 *         content:
 *           application/json:
 *             schema:
 */

           /**
 * @swagger
 * /api/v1/blogs/{blogId}/likes:
 *  post:
 *     security:
 *       - Authorization: []
 *     summary: Create a like
 *     tags:
 *      - Likes routes
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *      201:
 *        description: Created
 *      500:
 *        description: Server Error
 */
   /**
 * @swagger
 * /api/v1/blogs/{blogId}/likes:
 *   get:
 *     summary: Get all likes
 *     tags:
 *      - Likes routes
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of likes
 *         content:
 *           application/json:
 *             schema:
 */
            /**
 * @swagger
 * /api/v1/querries:
 *  post:
 *     summary: Posting queries
 *     tags:
 *      - Querries routes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              visitor:
 *                type: string
 *              message:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 */

   /**
 * @swagger
 * /api/v1/querries:
 *   get:
 *     security:
 *       - Authorization: []
 *     summary: Get all queries
 *     tags:
 *      - Querries routes
 *     responses:
 *       200:
 *         description: A list of queries
 *         content:
 *           application/json:
 *             schema:
 */

 /**
 * @swagger
 * /api/v1/querries/{querryId}:
 *   delete:
 *     security:
 *       - Authorization: []
 *     summary: Delete queries
 *     tags:
 *      - Querries routes
 *     parameters:
 *       - name: querryId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Query deleted
 *         content:
 *           application/json:
 *             schema:
 */

  

