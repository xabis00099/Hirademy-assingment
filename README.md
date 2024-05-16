# Hirademy-assingment
This repository consist of my backend assignment given by Hirademy as a part of there internship selection process

The pc should have an node.js, mySQL Workbench and an IDE installed on it to run this application (VS Code is recommended).
Put all the files and folders in one single folder and open that folder in VS Code. Also make ".env" file in this folder with specific details

.env :-
      PORT=3000
      HOST=localhost
      USER=root
      PASSWORD='your-password goes here'
      DATABASE='assistants'

open terminal in vs code and write, "npm start", all files for node-modeules will be installed automatically and the Message will be displayed as :-
"Listening to port 3000
 Db connected"


After this you are connected to the database

To test the application you should have postman installed on your computer and follow the below given steps :-
1) Make sure that database is connected.
2) Create a new collection and add curd requests one by one.
3) a)first the "get" request.
   b)get request is used to get details for any assistant id in the table.
   c)type http request as http://localhost:3000/assistant/(assistant_id goes here)
   d)click on send
   e)if data for assistant_id 1 is available in the table the details of that assistant will be shown

5) a)"Post" request
   b)post request is used to add details for any assistant id in the table.
   c)type http request as http://localhost:3000/assistant
   d)Choose particular format (JSON Recomended) and write all details of new assistant with that assistant_id.
   e)click on send, if record for that id is not available in the table then it will be added in the table and "id" will be returned.

6) a)"Put" request
   b)put request is used to update details for any assistant id in the table.
   c)type http request as http://localhost:3000/assistant/(assistant_id goes here)
   d)Choose particular format (JSON Recomended) and update all the required details for that assistant_id.
   e)click on send, record for that id will be updated in the table.

7) a)"delete" request
   b)delete request is used to delete details for any assistant id in the table.
   c)type http request as http://localhost:3000/assistant/(assistant_id goes here)
   d)click on send, if record for that id is present the it will be deleted from the table.


