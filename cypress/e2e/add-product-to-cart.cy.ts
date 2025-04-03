describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.location('pathname').should('include', '/product')

    cy.contains('Carrinho (0)').should('exist')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Carrinho (1)').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.location('pathname').should('include', '/product')

    cy.contains('Carrinho (0)').should('exist')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Carrinho (1)').should('exist')
  })

  it('should be able to search a product and add it to the cart', () => {
    cy.get('input[name=q]').type('moletom').parent('form').submit()

    cy.url().should('include', '/search?q=moletom')

    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')

    cy.contains('Carrinho (0)').should('exist')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Carrinho (1)').should('exist')
  })
})
