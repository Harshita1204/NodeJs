# Node.js 

## What is Node.js?
- Node.js is a runtime environment that allows us to run JavaScript outside the browser.
- It is mainly used to build backend/server-side applications.
- Built on Chrome’s V8 JavaScript engine.
- It is fast and efficient.

---

## Why use Node.js?
- Uses JavaScript for both frontend and backend
- Fast performance
- Handles multiple users at the same time using non-blocking I/O
- Used for APIs, web servers, and real-time applications

---

## Installing Node.js
1. Go to https://nodejs.org
2. Download the LTS version
3. Verify installation:

```bash
node -v // confirms the node engine is active and updated with security patches
npm -v  // confirms the package manager is ready to install libraries
```

---

## First Node.js Program
Create a file named `index.js`

```js
console.log("Node.js is running successfully!");
console.log("Current Date:", new Date().toLocaleDateString());
```

Run the file:
```bash
node index.js

```
## What is npm?
- npm stands for Node Package Manager
- It is used to install and manage packages

Example:
```bash
npm install express
```

---

## package.json
- Stores project information
- Manages dependencies and scripts

Create it using:
```bash
npm init -y
```

Important fields:
- name
- version
- main
- scripts
- dependencies

---

## Modules in Node.js
Node.js uses modules to organize code.

Built-in modules:
- fs – File system
- http – Create server
- path – File paths
- os – System information

Example:
```js
const fs = require("fs");

```

## Common Node.js Commands
node filename.js
npm init
npm install package-name
npm start

---

## Where Node.js is Used
- REST APIs
- Web servers
- Real-time applications
- Backend for mobile applications

