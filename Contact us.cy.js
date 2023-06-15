it('contact us form', function(){

  cy.visit('https://www.ayoba.me/contact-en/')
  cy.wait(6000)

  it('should be succefully submit contact form',function(){
  cy.get('form > :nth-child(1) > .ContactUs_contactInputs__1jyNx').type('Jessica Bee')
  cy.get('form > :nth-child(2) > .ContactUs_contactInputs__1jyNx').type('ayoba@suppot.com')
  cy.get('#subjectSelect').type()
  cy.get('#countryCode').type()
  cy.get('.ContactUs_mPhone__rGuYr > .ContactUs_contactInputs__1jyNx').type('phone number')
  cy.get('.ContactUs_contactTextArea__PpKfm').type('message')

  //cy.contains('button[type="submit"]').click()
  cy.get('.ContactUs_mBtn__B87BM > .ContactUs_aText___6RvY').click()
  cy.get('form > :nth-child(2) > .ContactUs_contactInputs__1jyNx').should('be.visible')
     
 })
 
    it('should display an error message for an invalid email address', function() {
      // Fill in the form fields with an invalid email address
      cy.get('form > :nth-child(1) > .ContactUs_contactInputs__1jyNx').type()
      cy.get('form > :nth-child(2) > .ContactUs_contactInputs__1jyNx').type('invalidemail')

     // cy.get('#message').type('This is a test message.');
     cy.get('.ContactUs_contactTextArea__PpKfm').type()
  
      // Submit the form
      cy.get('.ContactUs_mBtn__B87BM > .ContactUs_aText___6RvY').click()
  
      // Assert error message for invalid email address
      cy.get('form > :nth-child(2) > .ContactUs_contactInputs__1jyNx-error').should('be.visible')
    });
  });
  

 
 
   
    
   

    

    

