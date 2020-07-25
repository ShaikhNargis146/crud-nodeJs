to start-  npm start

//get all devices
API 1-GET : http://localhost:8800/api/v1/device/all
response:{
    "status": 200,
    "message": "OK",
    "data": {
        "list": [
            {
                "id": 1,
                "name": "AC",
                "device_code": "003",
                "model": "v1",
                "status": "OFF",
                "isactive": true,
                "created_at": "2020-07-25T12:09:51.598Z",
                "updated_at": "2020-07-25T12:09:51.598Z"
            }
        ],
        "total_count": "1"
    }
}
//get one device
API 2-GET : http://localhost:8800/api/v1/device/get/{id}
request params: {id}
response: {
    "status": 200,
    "message": "OK",
    "data": {
        "id": 1,
        "name": "AC",
        "device_code": "003",
        "model": "v1",
        "status": "OFF",
        "isactive": true,
        "created_at": "2020-07-25T12:09:51.598Z",
        "updated_at": "2020-07-25T12:09:51.598Z"
    }
}

//create device 
API 3-POST : http://localhost:8800/api/v1/device/edit 
request body:{name:"AC",device_code:"AC001",model:"IFB"}
request:
///update device 
API 4-PUT : http://localhost:8800/api/v1/device/edit 
request body:{id,name,device_code,model,status}
request:{
     "id": 1,
     "model": "IFB"
}
response:{
    "status": 200,
    "message": "OK",
    "data": {
        "id": 1,
        "name": "AC",
        "device_code": "003",
        "model": "IFB",
        "status": "OFF",
        "isactive": true,
        "created_at": "2020-07-25T12:09:51.598Z",
        "updated_at": "2020-07-25T12:11:48.574Z"
    }
}

///perform action on device 
API 5-PUT : http://localhost:8800/api/v1/device/action 
request:{"id":1,"status":"ON"}
status:ON/OFF/Inactive/
response:{
    "status": 200,
    "message": "device status changed to ON",
    "data": {
        "id": 1,
        "name": "AC",
        "device_code": "003",
        "model": "IFB",
        "status": "ON",
        "isactive": true,
        "created_at": "2020-07-25T12:09:51.598Z",
        "updated_at": "2020-07-25T12:16:46.807Z"
    }
}

//delete device
API 6-PUT : http://localhost:8800/api/v1/device/remove 
request:{"id":1}
response:{
    "status": 200,
    "message": "OK",
    "data": {
        "id": 1,
        "name": "AC",
        "device_code": "003",
        "model": "IFB",
        "status": "ON",
        "isactive": false,
        "created_at": "2020-07-25T12:09:51.598Z",
        "updated_at": "2020-07-25T12:16:46.807Z"
    }
}
