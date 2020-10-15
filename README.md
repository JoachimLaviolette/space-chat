# Space'Chat

![cover](https://www.pixenli.com/image/8Xqyguo1 "cover")

**Space'Chat** is a real-time application providing chat and multi-editing features (_i.e. Google Docs_) throughout an appealing UI. It is made in full JavaScript using **React/Redux/Saga x Styled-Components** for the frontend and **Node/Express/Socket.io** for the backend.

# Requirements

- Docker and Docker-compose
- Git

# Project Installation

## Docker

- For Windows:
  - [Install Docker Desktop for Windows 10](https://docs.docker.com/docker-for-windows/install/)
- For Mac:
  - [Install Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
- For Linux:
  - [Install Docker Engine for Linux](https://docs.docker.com/engine/install/)
  - [Install Docker Compose for Linux](https://docs.docker.com/compose/install/)

## Build the application containers

1) Clone the repository `git clone https://github.com/JoachimLaviolette/space-chat.git`.
2. Go to the repository `cd space-chat`.
3. Go to the frontend folder and install the container with the commands `cd src/chat-frontend && docker-compose up --build`. If your OS asks you to share your frontend folder, accept.
4. In an other terminal process, go to the backend folder and install the container with the commands `cd serious-lab/src/chat-backend && docker-compose up --build`. Again, if your OS asks you to share your backend folder, accept.
5. The application is now launched, visit it on [localhost:8080](http://localhost:8080/).

# Launch the project

Whenever you want to launch the project, just follow the next steps:
1. Go to the repository `cd space-chat`.
2. Go to the frontend folder and start the container with the commands `cd src/chat-frontend && docker-compose up`. 
3. In an other terminal process, go to the backend folder and install the container with the commands `cd src/chat-backend && docker-compose up`.
4. The application is now launched, visit it on [localhost:8080](http://localhost:8080/).
