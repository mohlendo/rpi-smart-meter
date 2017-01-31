#!/bin/sh
GOOS=linux GOARCH=arm GOARM=7 go build -v ehz-reader.go