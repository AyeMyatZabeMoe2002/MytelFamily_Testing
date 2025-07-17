import SearchPage from "../POM/nav/SearchPage"
import HomePage from "../POM/pages/HomePage";

const search       = new SearchPage(); 
const header_link  = new HomePage();
describe('Mytel Family Automation Testing', ()=>{

    beforeEach(()=>{
      cy.visit('https://mytelfamily.mytel.com.mm/')
    })

    it('New Link Change Successfully', ()=>{
      header_link.clickNewLink();
      header_link.elements.headerName()
      .should('be.visible')
      .and('have.text',header_link.message.headerName)  
    })

    it('Search Valid Input Name Successfully', ()=>{
      search.clickSearchIcon();
      search.checkInputValue("Mytel Champion League 2024");
      search.typeseachIcon();
      search.verifyInputValue().should('be.visible');     
    })

    it('Search Invalid Input Name', ()=>{
      search.clickSearchIcon();
      search.checkInputValue("Mytel Information");
      search.typeseachIcon();
      search.elements.invalidsearchdisplay()
      .should('be.visible')
      .and('have.text',search.error_message.invalidsearchdisplay);
    })

    it('English Language Change Successfully', ()=>{
        search.elements.headerTest().invoke('text')
        .then((text)=>{
          expect(text.trim()).to.eq(search.chooseLanguage.headerTest);
        })
    })

      it('Burmese Language Change Successfully', ()=>{
          search.clickLangugeIcon()
          search.elements.headerTest1().invoke('text')
          .then((text)=>{
            expect(text.trim()).to.eq(search.chooseLanguage.headerTest1);
          })
      })   

       it('Burmese Languagae Change Successfully', ()=>{
            search.clickLangugeIcon()
            search.elements.headerTest1()
            .should('be.visible')
       })
})