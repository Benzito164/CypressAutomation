

context("Test Api from fake json server",()=>{
   
   beforeEach('DELETE',() => {
       
       cy.request(
           'DELETE',
           'https://jsonplaceholder.typicode.com/posts/2',
           
       ).then((data)=>{
           expect(data.body).to.be.empty
       })
       
   });

    it('Test get functionality', () => {
        cy.request(
            'GET',
            "https://jsonplaceholder.typicode.com/posts/1"
        ).its('body').should('have.a.property','id');
    });


    it('Test POST functionality', () => {
        cy.request(
            'POST',
            'https://jsonplaceholder.typicode.com/posts',
            {
                "id": 2,
                "title":"Executeautomation",
                "author":"Beni"
            }
        ).then((response)=>{
            expect(response.body).has.property("title","Executeautomation")
        })
    });
})