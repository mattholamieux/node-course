//HTTP Request with core Node Modules (w/out request npm library)

const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=d5b06592db67ddb78afb062c8765ef37&query=40,-75&units=f'

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();