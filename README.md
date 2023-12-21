# whats-up
Whats-App clone
This application is mock up of the web version of whats app, for real time messaging functionalities

App tech stack (MERN)
- MongoDB
- Express
- React
- Nodejs

CI/CD
- packaged as container
- Jenkins ci/cd
- Kubernetes deployment

## Pre-requisite
Pusher
1. This application uses Pusher as the middleware for transferring messages.
2. Please setup your **Own** account here https://pusher.com/ to enable the middleware

MongoDB
1. Please setup a separate MongoDB for the application to use

## Dependancies
UI development lists
```
"axios": "^0.21.1",
"pusher-js": "^7.0.3",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-scripts": "4.0.3"
```

Backend development lists
```
"cors": "^2.8.5",
"express": "^4.17.1",
"mongoose": "^5.12.12",
"pusher": "^5.0.0"
```

## Usage
Clone repository
`git clone https://github.com/ItzurboiDaniel/whats-up.git`

Backend setup
Step 1: Go to backend folder
`cd whatsup-backend`

Step 2: Install dependecies
`npm install`

Step 3: Start backend
`npm start`

UI setup
Step 1: Go to frontend folder
`cd whatsup-frontend`

Step 2: Install dependecies
`npm install`

Step 3: Start frontend
`npm start`

## Project directory
```
.
│  .gitignore
│  deployment.yaml
│  Dockerfile
│  Jenkinsfile
│  package-lock.json
│  README.md
│
├─whatsup-frontend
│  │  .gitignore
│  │  package-lock.json
│  │  package.json
│  │  README.md
│  │
│  ├─public
│  │      favicon.ico
│  │      index.html
│  │      logo192.png
│  │      logo512.png
│  │      manifest.json
│  │      robots.txt
│  │
│  └─src
│          App.css
│          App.js
│          axios.js
│          Chat.css
│          Chat.js
│          firebase.js
│          index.css
│          index.js
│          reportWebVitals.js
│          Sidebar.css
│          Sidebar.js
│          SidebarChat.css
│          SidebarChat.js
│
└─whatsup-backend
        .gitignore
        db_messages.js
        package-lock.json
        package.json
        server.js
```



