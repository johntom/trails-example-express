# trails-example-express 

## mongodb with realtime

### feb-apr 2017

## login with uername=jrt or jaumard with  password adminadmin 


This repo is an example of a Todo app backend with Trails2, Express and Passport JWT authentification using trailpack-realtime .

Trailpack used by this example and is based on
https://github.com/jaumard/trails-example-express : 

```
trailpack-express
trailpack-passport
trailpack-waterline
trailpack-bootstrap
trailpack-realtime
```

## Registration 
Postman is your friend : 
```
POST /api/v1/auth/local/register HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: application/json
Cache-Control: no-cache
Postman-Token: c46e47f9-bbce-1143-5278-bbc4405f9dd1

{"username": "jaumard", "password": "adminadmin"}
```

## Login 
Postman is your friend : 
```
POST /api/v1/auth/local HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: application/json
Cache-Control: no-cache
Postman-Token: 59a69f0d-bb5b-304f-0cad-494d6174e9ce

{"username": "jaumard", "password": "adminadmin"}
```

## Todo rest API
Add new a Todo :
```
POST /api/v1/todo HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: application/json
Authorization: JWT MY_TOKEN_HERE
Cache-Control: no-cache
Postman-Token: 9158d41d-b68b-f6d3-6728-efb06dfd85c4

{"name": "jaumard"}
```

Update new a Todo :
```
PUT /api/v1/todo/1 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: application/json
Authorization: JWT MY_TOKEN_HERE
Cache-Control: no-cache
Postman-Token: 9158d41d-b68b-f6d3-6728-efb06dfd85c4

{"name": "jaumardUpdated"}
```
