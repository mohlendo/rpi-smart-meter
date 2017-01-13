const Reader = require('ehz-sml-reader')
const Influx = require('influxdb-nodejs')
const client = new Influx('http://influxdb:8086/home')

const name = 'household'
new Reader({ port: '/dev/ttyUSB0'}).on('data', (msg) => {
    console.log(name, msg.total)
    
    client.write('power_consumption')
    .tag({
      meter: name  
    })
    .field({
      meter: name, total: msg.total
    })
    .queue()
    client.syncWrite()
  })