describe('Viewport Testing', ()=>{
    it('Iphone', ()=>{
        cy.viewport('iphone-6');
        cy.visit("https://www.a2ztechvalley.com")
        cy.log("----- A2zTechvalley -------");
    })

    it('Iphone fresh spar', ()=>{
        cy.viewport('iphone-6', 'landscape');
        cy.visit("https://www.freshspar.com/")
        cy.log("----- Fresh Spar ------------");
    })
})