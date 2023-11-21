#!/bin/bash

# Check the argument passed to the script
if [ "$1" == "dev" ]; then
    echo "Starting development environment..."
    docker-compose -f docker-compose.dev.yml up --build
elif [ "$1" == "prod" ]; then
    echo "Starting production environment..."
    docker-compose -f docker-compose.prod.yml up --build
else
    echo "Invalid argument. Please use 'dev' or 'prod'."
fi
