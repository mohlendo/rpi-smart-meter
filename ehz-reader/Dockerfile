FROM resin/rpi-raspbian:jessie

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

ENTRYPOINT [ "./ehz-reader" ]