/// <reference types="@applitools/eyes-testcafe" />

import Eyes from '@applitools/eyes-testcafe';
import { Selector } from 'testcafe';
import crossElementTests from '../page-model.testcafe'

const eyes = new Eyes();


fixture `Cross Browser Tests Version 1`
    .page('https://demo.applitools.com/gridHackathonV1.html')   
    .afterEach(async () => eyes.close())
    .after(async () => {
        let testResults = await  eyes.waitForResults(false)
        console.log(testResults)
    })


    test("Validate  visually changing elements", async t => {
        await t.resizeWindow(800, 600)
            await eyes.open({
            t,
            appName: "Applitools",
            testName: 'Task 1'
        })
        //  check on the full page icon
        await eyes.checkWindow({
            tag: "Cross-Device Elements Test",
            target: 'window',
            fully: true
        })
    })    
    
    test("Verify that the filter functionality is working", async t => {
        await eyes.open({
            t,
            appName: "Applitools",
            testName: 'Task 2',
        })

        await t.click(crossElementTests.blackShoeCheckboxSelector)
        await t.click(crossElementTests.filterButtonSelector)
        await eyes.checkWindow({
            tag: "Filter Results",
            target: 'region',
            selector: crossElementTests.productsGridSelector
        })
        
    })   

    test("Verify that the filter functionality is working", async t => {
        await t.resizeWindow(800, 600)
        await eyes.open({
            t,
            appName: "Applitools",
            testName: 'Task 3',
        })

        // Click first black shoes on product page
        await t.click(crossElementTests.firstProductSelector)

        await eyes.checkWindow({
            tag: "Product Details test",
            target: 'window',
            fully: true
        })
    
    }) 

