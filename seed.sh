#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d '{ "first_name": "Bob", "last_name": "Dobs", "username": "bdobs", "email": "bdobs@example.com" }' http://$URL/users
curl -H "Content-Type: application/json" -X POST -d '{ "first_name": "Max", "last_name": "Jones", "username": "mjones", "email": "mjones@example.com" }' http://$URL/users
curl -H "Content-Type: application/json" -X POST -d '{ "first_name": "Jessie", "last_name": "James", "username": "mjones", "email": "jjames@example.com" }' http://$URL/users
