Build and Run
=============
build and run your Docker images. For development:
```bash
docker build -f Dockerfile.dev -t my-nuxt-app-dev .
docker run -p 3000:3000 my-nuxt-app-dev
```

For production:
```bash
docker build -f Dockerfile.prod -t my-nuxt-app-prod .
docker run -p 3000:3000 my-nuxt-app-prod
```

Make sure to replace my-nuxt-app-dev and my-nuxt-app-prod with your desired image names.

Adjust the API_BASE_URL and APP_ENV values according to your requirements.

Using Docker Compose
====================

Using Bash
====================
```bash
bin/deploy.sh dev

```
With this docker-compose.yml, you can start your Nuxt app and its dependencies using a single command:
```bash
docker-compose up
```

This configuration mounts your local project directory into the container (volumes section) so that changes to your code are reflected in real-time without requiring a rebuild of the Docker image.



You can create a similar docker-compose.prod.yml file for production, adapting it to use the production Dockerfile and adjusting any other settings specific to your production environment.

To start your app in production, run:
```bash
docker-compose -f docker-compose.prod.yml up
```