# DJKAT
Run `npm run dev` to start the development server.

Visit http://localhost:3000 to view your application.

# Deploying
Run `npm run build` to build the application.

Upload the `out` directory to your S3.

Move all the files out from the `out` directory to the root of the S3 bucket.

Go to CloudFront and create a new invalidation with path `/*`