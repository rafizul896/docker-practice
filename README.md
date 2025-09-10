##  Getting Started with Docker

This repository is for practicing **Docker basics** with a backend application. It includes commonly used **Docker commands, networking, volumes, and Dockerfile** usage.

---
### ✅ Check Docker Installation
---
```bash
docker --version
````


## 🔹 Basic Commands

### Pull an Image from Docker Hub

```bash
docker pull <image-name>
```

Example:

```bash
docker pull ubuntu
```

### List Available Images

```bash
docker images
```

### Run a Container (interactive mode)

```bash
docker run -it <image-name>
```

Example:

```bash
docker run -it ubuntu
```

### Run a Container in Detached Mode

```bash
docker run -d <image-name>
```

### Stop a Running Container

```bash
docker stop <container-id>
```

### Start a Stopped Container

```bash
docker start <container-id>
```

### Remove a Stopped Container

```bash
docker rm <container-id>
```

### Remove an Image

```bash
docker rmi <image-name>
```

---

## 🔹 Managing Containers

### List Running Containers

```bash
docker ps
```

### List All Containers (including stopped)

```bash
docker ps -a
```

### View Container Logs

```bash
docker logs <container-id>
```

### Execute a Command in a Running Container

```bash
docker exec -it <container-id> <command>
```

Example:

```bash
docker exec -it <container-id> bash
```

### Inspect a Container

```bash
docker inspect <container-id>
```

---

## 🔹 Networking

### List Docker Networks

```bash
docker network ls
```

### Create a New Network

```bash
docker network create <network-name>
```

### Connect a Container to a Network

```bash
docker network connect <network-name> <container-id>
```

### Disconnect a Container from a Network

```bash
docker network disconnect <network-name> <container-id>
```

---

## 🔹 Volumes and Data Management

### Create a Volume

```bash
docker volume create <volume-name>
```

### List Volumes

```bash
docker volume ls
```

### Remove a Volume

```bash
docker volume rm <volume-name>
```

### Mount a Volume to a Container

```bash
docker run -v <volume-name>:<container-path> <image-name>
```

---

## 🔹 Dockerfile and Building Images

### Example Dockerfile

```dockerfile
FROM <base-image>
MAINTAINER <your-name>
COPY <source> <destination>
RUN <command>
CMD ["<executable>"]
```

### Build an Image from a Dockerfile

```bash
docker build -t <image-name>:<tag> .
```

Example:

```bash
docker build -t myapp:latest .
```

### List Built Images

```bash
docker images
```

---

## 🔹 Advanced Commands

### Tag an Image

```bash
docker tag <image-id> <new-image-name>:<tag>
```

### Push an Image to Docker Hub

```bash
docker push <image-name>:<tag>
```

### Save an Image to a Tar File

```bash
docker save -o <path-to-output-file> <image-name>
```

### Load an Image from a Tar File

```bash
docker load -i <path-to-input-file>
```

---

## 🔹 Docker Compose

### Start Services

```bash
docker-compose up
```

### Stop Services

```bash
docker-compose down
```

### Scale Services

```bash
docker-compose up --scale <service-name>=<number>
```

### View Running Docker Compose Services

```bash
docker-compose ps
```

---

## 🔹 Useful Docker Commands

### Remove All Stopped Containers

```bash
docker container prune
```

### Remove Unused Images

```bash
docker image prune
```

### Remove All Unused Data (containers, networks, images)

```bash
docker system prune
```

### Get Docker System Information

```bash
docker info
```

---

##  Summary

This repo is focused on learning and practicing **Docker commands, container management, networking, and Docker Compose** for backend development.
It will help build a strong foundation for deploying real-world applications using Docker.

---

