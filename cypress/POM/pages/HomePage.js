class HomePage{

    elements = {
        new_link                :()=>cy.get('.header_bot_menu > :nth-child(2)'),
        headerName              :()=>cy.get('.main_Breadcrumbs_buildFist > a'),
        searchValidInput        :()=>cy.get('')
    }

    message = {
        headerName : "Mytel News",
    }

    clickNewLink(){
        this.elements.new_link().click();
        return this; 
    }

}
export default HomePage; 