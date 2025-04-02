// This is the documentation location of the api request
/**
 * @openapi
 * tags:
 *   - name: Vehicles
 *     description: 🏎 Car registration and details
 *   - name: Users
 *     description: 🚴🏻 User account management
 *   - name: Reservation
 *     description: ⏰ make and manage reservations
 */

/**
 * @openapi
 * /api/v1/userspace/vehicle:
 *   get:
 *     tags: [Vehicles]
 *     summary: Get all available car details / post car detail
 *   post:
 *     tags: [Vehicles]
 *     summary: Post Car details to get stored
 * /api/v1/userspace/vehicle/{id}:
 *   get:
 *     tags: [Vehicles]
 *     summary: Get car details by VIN
 *   patch:
 *     tags: [Vehicles]
 *     summary: Update Car Details
 *   delete:
 *     tags: [Vehicles]
 *     summary: Delete car details by VIN
 * /api/v1/userspace/user:
 *   get:
 *     tags: [Users]
 *     summary: Get all available user details / add user
 *   post:
 *     tags: [Users]
 *     summary: Add a new user to the database
 * /api/v1/userspace/user/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get specific user detail by ID
 *   patch:
 *     tags: [Users]
 *     summary: Get specific user detail by ID
 *   delete:
 *     tags: [Users]
 *     summary: Get specific user detail by ID
 */
