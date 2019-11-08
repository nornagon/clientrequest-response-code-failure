const {net, app} = require('electron');

app.on('ready', () => {
  const request = net.request({
    url: 'https://electronjs.org/docs/api/client-requestaaa'
  });

  request.on('abort', () => {
    console.log('abort');
  });

  request.on('close', ()=>{
    console.log('close');
  })

  request.on('error', (e) => {
    console.log('err');
  });

  request.on('response', (response) => {
    console.log('response', response.statusCode);
  });

  request.on('finish', () => {
    console.log('finish');
  })

  request.on('redirect', () => {

  });

  request.end();
});

