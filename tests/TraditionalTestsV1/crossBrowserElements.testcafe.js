import crossElementTests  from "../page-model.testcafe";
import  hackathonReporter  from '../../Helpers/generateReport'




fixture `Task 1 Cross browser Testing`
.page("https://demo.applitools.com/gridHackathonV1.html")

         //  This test will fail on an iphone x device since the dom id present is different 
        test("Search bar is  displayed", async testController => {
            const isVisible = await crossElementTests.searchBarSelector.visible
            await testController.expect(hackathonReporter(1, "Search bar is displayed", "INPUTtext____42",
            testController.browser.name, testController.browser.alias, isVisible )).ok()

        })
        //  This test will fail on an iphone x device since the dom id present is different
        test("Search icon is  displayed", async testController => {

            const isVisible = await crossElementTests.searchIconSelector.visible
            await testController.expect(hackathonReporter(1, "Search Icon is displayed", "I__headericon__44",
            testController.browser.name, testController.browser.alias,  isVisible )).ok()         
        })
        
         //  This test will only pass on iphone x
        test("Search bar is  displayed", async testController => {
            const isVisible = await crossElementTests.searchBarSelector.visible
            await testController.expect(hackathonReporter(1, "Search bar is displayed", "DIV__customsear__41",
            testController.browser.name, testController.browser.alias, isVisible )).ok()

        })
        //  This test will only pass on iphone x
        test("Search icon is  displayed", async testController => {
            const isVisible = await crossElementTests.searchIconSelector.visible
            await testController.expect(hackathonReporter(1, "Search Icon is displayed", "A__btnsearchm__59",
            testController.browser.name, testController.browser.alias, isVisible )).ok()         
        })

        test("Profile icon is  displayed", async testController => {
            const isVisible = await crossElementTests.profileIconSelector.visible
            await testController.expect(hackathonReporter(1, "Profile Icon is displayed", "A__accesslink__56",
            testController.browser.name, testController.browser.alias, isVisible )).ok()
        })

        test("Cart icon is  displayed", async testController => {
            const isVisible = await crossElementTests.cartIconSelector.visible
            await testController.expect(hackathonReporter(1, "Cart Icon is displayed", "A__cartbt__49",
            testController.browser.name, testController.browser.alias, isVisible )).ok()  
        })


        test("Home Navbar item is displayed", async testController =>{
            const isVisible = await crossElementTests.cartIconSelector.visible
            await testController.expect(hackathonReporter(1, "Home Navbar  is displayed", "A__showsubmen__23",
            testController.browser.name, testController.browser.alias, isVisible )).ok() 
        })

        test("Men Navbar item is displayed", async testController =>{
            const isVisible = await crossElementTests.cartIconSelector.visible
            await testController.expect(hackathonReporter(1, "Men Navbar  is displayed", "A__showsubmen__25",
            testController.browser.name, testController.browser.alias, isVisible )).ok() 
        })

        test("Women Navbar item is displayed", async testController =>{
            const isVisible = await crossElementTests.cartIconSelector.visible
            await testController.expect(hackathonReporter(1, "Women Navbar  is displayed", "A__showsubmen__27",
            testController.browser.name, testController.browser.alias, isVisible )).ok() 
        })

        test("Running Navbar item is displayed", async testController =>{
            const isVisible = await crossElementTests.cartIconSelector.visible
            await testController.expect(hackathonReporter(1, "Running Navbar  is displayed", "A__showsubmen__29",
            testController.browser.name,testController.browser.alias,  isVisible )).ok() 
        })

        test("Training Navbar item is displayed", async testController =>{
            const isVisible = await crossElementTests.cartIconSelector.visible
            await testController.expect(hackathonReporter(1, "Training Navbar  is displayed", "A__showsubmen__31",
            testController.browser.name,testController.browser.alias,  isVisible )).ok() 
        })

        test("Side filter navbar is displayed", async(testController) => {
            const isVisible = await crossElementTests.sideFilterNavbarSelector.visible
            await testController.expect(hackathonReporter(1, "Side filter navbar is displayed", "filter_col",
            testController.browser.name,testController.browser.alias,  isVisible )).ok() 
        })
         
        test("Filter icons are displayed", async(testController) => {
            const isVisible = await crossElementTests.filterIconSelector.visible
            await testController.expect(hackathonReporter(1, "Filter icons are displayed", "LI____200",
            testController.browser.name,testController.browser.alias,  isVisible )).ok() 
        })

        test("Footer is displayed", async(testController) => {
            const isVisible = await crossElementTests.footerSelector.visible
            await testController.expect(hackathonReporter(1, "Footer is displayed", "FOOTER____417",
            testController.browser.name,testController.browser.alias,  isVisible )).ok() 
        })

        test("QUICK LINKS section is displayed", async(testController) => {
            const isVisible = await crossElementTests.quickLinkDivSelector.visible
            await testController.expect(hackathonReporter(1, "QUICK LINKS section is displayed", "DIV__collgcolmd__420",
            testController.browser.name, testController.browser.alias, isVisible )).ok() 
        })

        test("CONTACTS section is displayed", async(testController) => {
            const isVisible = await crossElementTests.contactDivSelector.visible
            await testController.expect(hackathonReporter(1, "CONTACTS section is displayed", "DIV__collgcolmd__436",
            testController.browser.name,testController.browser.alias,  isVisible )).ok() 
        })

        test("KEEP IN TOUCH section is displayed", async(testController) => {
            const isVisible = await crossElementTests.contactDivSelector.visible
            await testController.expect(hackathonReporter(1, "KEEP IN TOUCH section is displayed", "#DIV__collgcolmd__446",
            testController.browser.name,  testController.browser.alias, isVisible )).ok() 
        })

        

        
       



