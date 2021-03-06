const fs = require('fs');


// testController object will log the broswers running locally

const device = "Laptop";


/**
 * A Helper to print the test result in the following format:
 * Task: <Task Number>, Test Name: <Test Name>, DOM Id:: <id>, Browser: <Browser>, Viewport: <Width x Height>, Device<Device type>, Status: <Pass | Fail>
 * 
 * Example: Task: 1, Test Name: Search field is displayed, DOM Id: DIV__customsear__41, Browser: Chrome, Viewport: 1200 x 700, Device: Laptop, Status: Pass
 * 
 * @param task                    int - 1, 2 or 3
 * @param testName.               string - Something meaningful. E.g. 1.1 Search field is displayed
 * @param domId                   string - DOM ID of the element
 * @param comparisonResult        boolean - The result of comparing the "Expected" value and the "Actual" value.
 * @return                        boolean - returns the same comparison result back so that it can be used for further Assertions in the test code.
 */
function getViewport(testcafeBrowserAlias){ 
    var number = testcafeBrowserAlias.replace(/[^0-9]/g,'');
    const width = number.toString().slice(0, 3)
    const height = number.toString().slice(3, 7)
    return `${width}x ${height}` 

    

  }
export default function hackathonReporter(task, testName, domId, browser, viewport, comparisonResult) {
    fs.appendFileSync('Traditional-V2-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport:${getViewport(viewport)}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    return comparisonResult;
}

