MongoDB Setup:



step 1:



* open mongoDB portal
* signup with google
* skip the personalizations



step 2:



* create deployment -> choose the free option
* copy the username and password
* next create database user
* choose the cluster
* choose the compass for GUI
* choose drivers
* copy the mongo URI
* after finish the process



step 3:



* Go the databases and network access -> Network access -> IP Access List
* choose add IP Address -> choose allow any where // for to access the database from any where
* get password in the database users



step 4:



* Go to the clusters -> browse collections
* create database



step 5:



* add the MONGO\_URI=" " in the .env file



step 6:



* create a config folder -> create a db.js file



* **db.js**

&nbsp;	import mongoose from "mongoose"

&nbsp;	

&nbsp;	

