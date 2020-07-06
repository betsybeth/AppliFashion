import crossElementTests  from "../page-model.testcafe";
import  hackathonReporter  from '../../Helpers/generateReport'






fixture `Task 2 Shopping Experience Test`
.page("https://demo.applitools.com/gridHackathonV2.html")

        test("Verify filtering black shoe", async testController => {
            await testController.click(crossElementTests.blackShoeCheckboxSelector)
            await testController.click(crossElementTests.filterButtonSelector)

            const itemsDisplayed = await crossElementTests.productsGridSelector.hasChildNodes
            await testController.expect(crossElementTests.productsGridSelector.childNodeCount).eql(2)
            await testController.expect(hackathonReporter(2, "Verify filtering black shoes", "product_grid",
            testController.browser.name, testController.browser.alias,  itemsDisplayed )).ok()
        })
    

        
        test("Heart icon is  displayed on hover", async testController => {
            const isVisible = await crossElementTests.heartIconSelector.visible
            await testController.expect(hackathonReporter(2, "Heart icon is  displayed on hover", "I__tiheart__294",
                    testController.browser.name, testController.browser.alias, isVisible )).ok()        
                    
        })

        test("Share icon is displayed on hover", async testController => {
            const isVisible = await crossElementTests.shareIconSelector.visible
            await testController.expect(hackathonReporter(2, "Share icon is displayed on hover", "I__ticontrols__229",
                    testController.browser.name,testController.browser.alias,  isVisible )).ok() 

       
        })
        test("Shopping cart icon is displayed on hover", async testController => {
            const isVisible = await crossElementTests.shoppingCartIconSelector.visible
            await testController.expect(hackathonReporter(2, "Shopping cart icon is displayed on hover", "I__tishopping__302",
                    testController.browser.name, testController.browser.alias,  isVisible )).ok() 
        })

        test("Black shoes Images  are  displayed ", async testController => {
            const isVisible = await crossElementTests.blackShoeImageSelector.visible
            await testController.expect(hackathonReporter(2, "Black shoes Images are  displayed", "IMG__imgfluid__215",
                    testController.browser.name, testController.browser.alias,  isVisible )).ok() 
        })
        






