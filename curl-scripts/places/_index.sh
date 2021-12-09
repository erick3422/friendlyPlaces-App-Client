#!/bin/sh

API="https://murmuring-bastion-16711.herokuapp.com"
URL_PATH="/places"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
