const Reader = require('ehz-sml-reader')
const Influx = require('influxdb-nodejs')
const client = new Influx('http://influxdb:8086/test')

const name = 'Haushalt'
new Reader({ port: '/dev/ttyUSB0'}).on('data', (msg) => {
    console.log(name, msg.total)
    
    client.write('login')
    .tag({
      meter: name  
    })
    .field({
      meter: name, value: msg.total
    })
    .queue()
    client.syncWrite()
  })