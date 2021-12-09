#!/bin/bash

API="https://murmuring-bastion-16711.herokuapp.com"
URL_PATH="/places"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
