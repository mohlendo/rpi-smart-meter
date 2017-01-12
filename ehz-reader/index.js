const Reader = require('ehz-sml-reader')
const _ = require('lodash')
const Influx2 = require('influxdb-nodejs');
const client = new Influx2('http://influxdb:8086/test')

function write(options, msg) {
    client.write('login')
    .tag({
      meter: options.name  
    })
    .field({
      meter: options.name, value: msg.total
    })
    .queue()
    client.syncWrite()
}

new Reader({ port: '/dev/ttyUSB0', name: 'Haushalt' }).on('data', (msg) => {
    console.log(options.name, msg.total)
    write(options, msg)
  })