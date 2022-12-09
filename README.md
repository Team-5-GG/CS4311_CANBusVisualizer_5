# CAN-Bus-Visualizer

# Incompleted Requirements and/or Deviations from Requirements

### SRS-2 ### 
Create Project is not implemented exactly as indicated. Most notably, we are missing a file explorer that allows the user to create a peoject in their desired directory. *NOTE*: The create project functionality is implemented as required in the back-end; it can be tested using postman. 
### SRS-3 (b,c) ### 
The traffic map visualizers are opened by default. Each visualizer can be independently re-sized.
### SRS-4 ### 
Dropdown menus and pause/start button missing.
### SRS-7 ### 
CAN BUS MENU not implemented.
### SRS-8 & 9 ### 
Replay and Edit packet implementations were not integrated with production because of technical problems. However, these two buttons and their UI functionality can be found within the ContextMenu.js and related files, as they were inside a custom right click menu. The back-end functionality for these two function is functional and can be tested with postman.
### SRS-10 & 11 ### 
Rename Node Overlay replaced by simple interactions with node (i.e., double clicking the name text field to change the name).
### SRS-12 ### 
Node visibility not implemented.
### SRS-13 ### 
Relationships handles by simply creating links between nodes by dragging from origin node to destination node. 
### SRS 17 ###
Replay and Edit packet implementations were not integrated with production because of technical problems. However, these two buttons and their UI functionality can be found within the ContextMenu.js and related files, as they were inside a custom right click menu. The back-end functionality for these two function is functional and can be tested with postman.
### SRS 20 ###
Search for nodes was not implemented. Other functionality was achieved by simple direct interaction with the node. 
### SRS 21 ###
Annotaions menu not implemented. 
### SRS 22 ###
Color picker not implemented.
### SRS 24-34 ###
Our finalized project does not account for a real connection to a CAN Bus, we only used a simiulator.
### SRS 38 & 39 ###
Our program can verify if a connection to the simulated CAN Bus exists, real CAN Bus connections were not accounted for.
### SRS 50-51 ###
Replay and Edit packet implementations were not integrated with production because of technical problems. However, these two buttons and their UI functionality can be found within the ContextMenu.js and related files, as they were inside a custom right click menu. The back-end functionality for these two function is functional and can be tested with postman.
### SRS 63 ###
Color picker not implemented.
### SRS 66 ###
CAN Bus Displayer does not check if a node is in the blacklist.
### SRS 67(b) ###
CAN Bus Displayer does not support exporting the workspace in PNG or JPG format.
### SRS 71 (a) ###
Blacklist not utilized by the CAN Bus Displayer.
### SRS 77(b,c) ###
CAN Bus Displayer does not support imports or exports.
### SRS 81 ###
Filtering is implemented in the backend only.
### SRS 99-106 ###
Blacklist not accounted for in our project.
### SRS 111 & 113 ###
These two buttons are non-functioning in the UI, although their back-end coutnerparts have been imeplemented.
### 118-134 ###
Create project exists in the UI and in the backend, but the connection between the two was never made. Another note-worthy deviation is that our project does not allow the user to choose a baud rate. We were planning on simulating a baud rate, but this was not achieved do to time constraints.

# running backend:
npm install express mongoose --save (installs express and mongoose for defining schemas in code and translating them to the database)
npm i express-async-handler --save (helps to handle exceptions in express routes)
npm i dotenv --save (allows the use of environmental variables in the code mostly for security reasons)
npm i nodemon --save-dev (creates a daemon that watches for files changes and restarts the server automatically)

# running frontend
npm install react-router-dom --save (install react inside /frontend subfolder)

npm start (starts the frontend)

# installations

Starting the database in Linux:
1) Download mongo db shell

3) Start mongo service (terminal):

	sudo service mongod start
  
4) Start the local server (terminal):

	mongosh

Gojs:

1) install gojs

npm install gojs
