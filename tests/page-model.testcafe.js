import { Selector } from 'testcafe';


class CrossElementTests {
    constructor(){
       this.searchBarSelector = Selector("#INPUTtext____42")
       this.searchIconSelector = Selector("#I__headericon__44")
       this.profileIconSelector = Selector("#A__accesslink__56")
       this.cartIconSelector = Selector("#A__cartbt__49")
       this.heartIconSelector = Selector("#I__tiheart__225")
       this.shareIconSelector = Selector("#I__ticontrols__229")
       this.shoppingCartIconSelector = Selector("#I__tishopping__233")  
       this.homeNavbarSelector  =  Selector("#A__showsubmen__23")  
       this.menNavbarSelector = Selector("#A__showsubmen__25")
       this.womenNavbarSelector =  Selector("#A__showsubmen__27")
       this.runningNavbarSelector =  Selector("#A__showsubmen__29")
       this.trainingNavbarSelector =  Selector("#A__showsubmen__31")
       this.blackShoeCheckboxSelector = Selector("#LABEL__containerc__104")
       this.filterButtonSelector  = Selector("#filterBtn")
       this.productsGridSelector = Selector("#product_grid")
       this.blackShoeImageSelector = Selector("#IMG__imgfluid__215")
       this.productDetailsImageSelector = Selector ("#shoe_img")
       this.sideFilterNavbarSelector = Selector("#filter_col")
       this.filterIconSelector = Selector("#LI____200")
       this.footerSelector = Selector('#FOOTER____417')
       this.quickLinkDivSelector = Selector("#DIV__collgcolmd__420")
       this.contactDivSelector = Selector("#DIV__collgcolmd__436")
       this.keepIntouchDivSelector =  Selector("#DIV__collgcolmd__446")
       this.addCartButtonSelector  = Selector("#A__btn__114")
       this.sizeInputSelector = Selector("#current")
       this.newPriceTextSelector  = Selector("#new_price")
       this.oldPriceTextSelector = Selector("#old_price")
       this.reviewIconSelector = Selector("#SPAN__rating__76") 
       this.productTextDescriptionSelector = Selector("#P____83")
       this.shoeNameSelector = Selector("#shoe_name")
       this.blackProductDetailsPageSelector = Selector("#page")
       this.firstProductSelector = Selector("#product_1")
    }

    
    
}

export default new CrossElementTests();


