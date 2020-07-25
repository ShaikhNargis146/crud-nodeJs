to start-  npm start
//get all devices
API 1-GET : http://localhost:8800/api/v1/device/all

//get one device
API 2-GET : http://localhost:8800/api/v1/device/get/{id}

//update device details
API 3-PUT : http://localhost:8800/api/v1/device/edit requestbody:{id,name,device_id,model}

//delete device
API 4-PUT : http://localhost:8800/api/v1/device/remove requestbody:{id}