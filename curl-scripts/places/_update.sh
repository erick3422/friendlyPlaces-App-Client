#!/bin/bash

API="https://murmuring-bastion-16711.herokuapp.com"
URL_PATH="/places"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "place": {
     "name": "'"${NAME}"'",
      "address": "'"${ADDRESS}"'",
      "location":"'"${LOCATION}"'",
      "description":"'"${DESCRIPTION}"'"
    }
  }'

echo
