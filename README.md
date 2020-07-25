to start-  npm start

//get all devices
API 1-GET : http://localhost:8800/api/v1/device/all

//get one device
API 2-GET : http://localhost:8800/api/v1/device/get/{id}
request params: {id}

//create device 
API 3-PUT : http://localhost:8800/api/v1/device/edit 
request body:{name:"AC",device_code:"AC001",model:"IFB"}

///update device 
API 3-PUT : http://localhost:8800/api/v1/device/edit 
request body:{id,name,device_code,model,status}
status:ON/OFF/Inactive/

//delete device
API 4-PUT : http://localhost:8800/api/v1/device/remove 
request body:{id}