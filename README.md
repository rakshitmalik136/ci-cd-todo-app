# CI/CD Todo App 🚀

A simple **Todo REST API** built with Node.js and Express, containerized with Docker, and deployed through a **CI/CD pipeline using GitHub Actions**.  
This project demonstrates key DevOps skills: CI/CD automation, containerization, and Docker Hub integration.

---

## 🔹 Features
- `GET /todos` → Returns all todos
- `POST /todos` → Add a new todo
- Automated tests with **Jest + Supertest**
- Containerized with **Docker**
- CI/CD pipeline with **GitHub Actions**
- Docker images pushed to **Docker Hub**

---

## 🛠 Tech Stack
- Node.js + Express
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Jest (testing)

---

## ⚙️ Running Locally
```bash
# Clone the repo
git clone https://github.com/rakshitmalik136/ci-cd-todo-app.git
cd ci-cd-todo-app

# Build and run with Docker
docker build -t ci-cd-todo-app .
docker run -p 3000:3000 ci-cd-todo-app

Open: http://localhost:3000/todos
```

---

📦 [Docker Hub](https://hub.docker.com/r/rakshitmalik136/ci-cd-todo-app)
![Image](screenshots/dockerhub-image)

---

🖳 ![CI/CD-workflow](screenshots/cicd-workflow)

---

✅ ![Output](screenshots/output)

---

## 🧑🏻‍💻 Rakshit Malik
