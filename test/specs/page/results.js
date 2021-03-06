
const { describe } = require('mocha');
const restulsPage = require('../../pageobjects/restuls.page');
const ResultsPage = require('../../pageobjects/restuls.page');

describe ('Results Page Feature', () =>{

    beforeEach( ()=> {
        
        browser.maximizeWindow()
    })

    it('Verify the URL changes among specialities',() =>{
        
        ResultsPage.open()
        ResultsPage.cambioUrls(0)
   
        let url=browser.getUrl();
        expect(url).toEqual('https://develop.terapeutica.digital/#/search?sp=phisical')

        ResultsPage.cambioUrls(1)
        url = browser.getUrl();

        expect(url).toEqual('https://develop.terapeutica.digital/#/search?sp=language')

        ResultsPage.cambioUrls(2)
        url = browser.getUrl();
        expect(url).toEqual('https://develop.terapeutica.digital/#/search?sp=ocupational')
    
    });

    it('Enter text and verify the result',() =>{
        
        const nameofspecialist='Maria José Miranda'
        const dataInputBusqueda= {
            inputBusqueda:'Maria'
        }

        ResultsPage.open()
        ResultsPage.enterText(dataInputBusqueda)
        ResultsPage.clickBtnBusqueda()
        browser.pause(3000)
        expect(nameofspecialist).toEqual(ResultsPage.nombreEspecialistaMaria.getText())

    });

    it('list option is not diplayed when map option is selected',() =>{

        ResultsPage.open()
        ResultsPage.ClickonMap()
        browser.pause(3000)
        expect(ResultsPage.map).not.toBeVisible();

    });    

});