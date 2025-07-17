class SearchPage {
    elements = {
        searchIcon           :   () => cy.get('#icon_search_header'),
        searchInput          :   () => cy.get('#search'),
        typeseachIcon        :   () => cy.get("#search_header"),
        validsearchdisplay   :   () => cy.get('.list-magazines > .clearfix'),
        invalidsearchdisplay :   () => cy.get('#error-serach'),
        selectLanguage       :   () => cy.get('#lang_id_post'),
        headerTest           :   () => cy.get('.header_bot_menu > :nth-child(2)'),
        languageBtn          :   () => cy.get('#lang_id_post'),
        headerTest1          :   () => cy.get(':nth-child(1) > .main_box_thaogo_build_list_des > .main_box_thaogo_build_list_des_tit')
    }

     chooseLanguage = {
       headerTest  : "Mytel News",
       headerTest1 : "မြို့ပြသန့်ရှင်းရေးလုပ်သားများအတွက်",
     }

     clickBurmeseLanguage(){
        return this.elements.languageBtn().select(3);
     }

    clickSearchIcon() {
        this.elements.searchIcon().click();
    }

    checkInputValue(searchInput) {
        this.elements.searchInput().clear();
        this.elements.searchInput().type(searchInput);
    }

    typeseachIcon(){
        this.elements.typeseachIcon().click();
    }

    verifyInputValue(){
        return this.elements.validsearchdisplay();
    }

   error_message = {
        invalidsearchdisplay : "No results found",
   }

   checkLanguage(){
        return this.elements.selectLanguage();
   }

   clickLangugeIcon() {
    return this.elements.languageBtn().select(2);
   }

}
export default SearchPage; 