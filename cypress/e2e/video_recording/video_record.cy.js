describe('Video Recording', ()=>{
    it('rec vide for 10 sec', ()=>{
        cy.visit('https://www.a2ztechvalley.com')
        cy.startRecording()
        cy.wait(10000)

        cy.stopRecording()

    })
})