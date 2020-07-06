const createTestCafe =  require('testcafe')


const createBrowserConnection = async() => {
    let testcafe = null
    createTestCafe('127.0.0.1')
        .then(tc =>{
            testcafe = tc 
        const runner = testcafe.createRunner()
            return  runner
            // 
                        .src("tests/TraditionalTestsV1/", "tests/TraditionalTestsV2")
                            //  Installed browsers locally to run your traditional tests
                        .browsers("chrome:headless:emulation:width=1200;height=700","chrome:headless:emulation:width=768;height=700; mobile=true;",
                                "firefox:headless", "edge:headless:emulation:width=1200;height=700","edge:headless:emulation:width=768;height=700;mobile=true", 
                                "chrome:headless:emulation:width=500;height=700")
                        .run(
                            {"disablePageCaching": true})

        })        
        .then(failedCount => {
            if(failedCount >=1){
                console.log('Tests failed ' + failedCount);
                testcafe.close();
                process.exit(1);
            }
            testcafe.close()
           
        })
        .catch(error => {
            console.log("heeeey", error)
            testcafe.close()
            process.exit(1)
            
        })
               
}

createBrowserConnection();