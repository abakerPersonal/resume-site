#!/bin/bash

echo "Building site and docker container"
nvm use 23
npm run build-docker

echo "Running Docker Compose"
docker compose -f ~/homelab/docker-compose.yml up -d resume-site