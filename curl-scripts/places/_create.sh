#!/bin/bash

API="http://localhost:4741"
URL_PATH="/places"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "places": {
      "name": "'"${NAME}"'",
      "address": "'"${ADDRESS}"'",
      "location":"'"${LOCATION}"'",
      "description":"'"${DESCRIPTION}"'"
    }
  }'

echo