import crossElementTests  from "../page-model.testcafe";
import  hackathonReporter  from '../../Helpers/generateReport'






fixture `Task 3 Product Details Tests`
    .page("https://demo.applitools.com/gridHackathonV2.html")
    .beforeEach(async (testController) => {
        await testController.click(crossElementTests.firstProductSelector)
    })

    test("Navigate to individual product details ", async testController => {
                
        const isVisible = crossElementTests.blackProductDetailsPageSelector.visible
        await testController.expect(hackathonReporter(3, "Navigate to individual product details ", "Navigate to individual product details",
        testController.browser.name, testController.browser.alias, isVisible )).ok()
    })

    test("Individual product image is displayed", async testController => {
        const isVisible = await crossElementTests.productDetailsImageSelector.visible
        await testController.expect(hackathonReporter(3, "Individual product image is displayed", "shoe_img",
        testController.browser.name, testController.browser.alias,  isVisible )).ok()  
    })

    test("'Add to Cart' button is displayed", async testController =>{
        const isVisible = await crossElementTests.addCartButtonSelector.visible
        await testController.expect(hackathonReporter(3, "'Add to cart' button is displayed", "A__btn__114",
        testController.browser.name, testController.browser.alias, isVisible )).ok()  
    })

    test("New price  text is displayed", async(testController) => {
        const isVisible = await crossElementTests.newPriceTextSelector.visible
        await testController.expect(crossElementTests.newPriceTextSelector.innerText).contains("$33.00")
        await testController.expect(hackathonReporter(3, "New price  text is displayed", "new_price",
        testController.browser.name, testController.browser.alias,  isVisible )).ok() 
    })

    test("Old price text is displayed", async(testController) => {
        const isVisible = await crossElementTests.oldPriceTextSelector.visible
        await testController.expect(crossElementTests.oldPriceTextSelector.innerText).contains("$48.00")
        await testController.expect(hackathonReporter(3, "Old price text is displayed", "old_price",
        testController.browser.name, isVisible )).ok() 
    })

    test("review text and icons are displayed", async(testController) => {
        const isVisible = await crossElementTests.reviewIconSelector.visible
        await testController.expect(hackathonReporter(3, "Review text and icons are displayed", "PAN__rating__76",
        testController.browser.name, testController.browser.alias, isVisible )).ok() 
    })

    test("Product description is displayed", async( testController) => {
        const isVisible = await crossElementTests.productTextDescriptionSelector.visible
        await testController.expect(crossElementTests.productTextDescriptionSelector.innerText).contains("SKU: MTKRY-001")
        await testController.expect(hackathonReporter(3, "Product description is displayed", "P____83",
        testController.browser.name,testController.browser.alias, isVisible )).ok()  
    })

    test("Product name is displayed", async(testController) => {
        const isVisible = await crossElementTests.shoeNameSelector.visible
        await testController.expect(crossElementTests.shoeNameSelector.innerText).contains("Appli Air x Night")
        await testController.expect(hackathonReporter(3, "Product name is displayed", "#shoe_name",
        testController.browser.name, testController.browser.alias, isVisible )).ok()   
    })








