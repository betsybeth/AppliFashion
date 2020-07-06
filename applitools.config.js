module.exports = {
    apiKey: '1pUvCBCtI106Hz109RT0hzBIEgJDowM1ZXLJFZadyXGYFZI110',
    browser: [
        {width: 1200, height: 700, name: 'chrome'},
        {width:1200,  height:700, name: 'firefox' },
        {width:1200,  height : 700,name: 'edgechromium'},
        {width: 1200, height: 700, name: 'safari'},
        // Tablet devices 
        {width: 768, height: 700, name: 'chrome'},
        {width:768,  height:700, name: 'firefox'},
        {width:768,  height : 700,name: 'edgechromium'},
        // Mobile device 
        {deviceName: 'iPhone X', screenOrientation: 'portrait',  }   
    ],
    batchName: 'UFG Hackathon',
    concurrency: 10 
}