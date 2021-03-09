context('File upload actions', () => {


    beforeEach(() => {
        console.log('before each')
    });

    it.only('file upload method one', () => {
        cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input').attachFile('n.jpg');
        
    });

    it('file upload old way', () => {
        cy.fixture('example.json').then(filecontent =>{
            cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input').attachFile(
                {
                    fileContent,
                    fileName: "EaUser",

                }
            )
            
        })
    });
});