const replace = require('../../lib/utilities/replace')

/* eslint-disable */
describe( 'the replace module', () => {
  it( 'should replace a property', () => {
    const currentMarkup = '<h1><%name%></h1>'
    const currentProperties = { name: 'Example' }
    const desiredMarkup = '<h1>Example</h1>'
    expect( replace(currentMarkup, currentProperties) ).toMatch( desiredMarkup )
  } )

  it( 'should replace two properties', () => {
    const currentMarkup = '<h1><%name%></h1><h2><%uname%></h2>'
    const currentProperties = { name: 'Example', uname: 'Subtitle' }
    const desiredMarkup = '<h1>Example</h1><h2>Subtitle</h2>'
    expect( replace(currentMarkup, currentProperties) ).toMatch( desiredMarkup )
  } )

  it( 'should replace two times the same property', () => {
    const currentMarkup = '<h1><%name%></h1><h2><%name%></h2>'
    const currentProperties = { name: 'Example' }
    const desiredMarkup = '<h1>Example</h1><h2>Example</h2>'
    expect( replace(currentMarkup, currentProperties) ).toMatch( desiredMarkup )
  } )

  it( 'should replace two times different properties', () => {
    const currentMarkup = '<h1><%uname%></h1><h2><%name%></h2><div><%uname%></div><span><%name%></span>'
    const currentProperties = { name: 'Example', uname: 'Subtitle' }
    const desiredMarkup = '<h1>Subtitle</h1><h2>Example</h2><div>Subtitle</div><span>Example</span>'
    expect( replace(currentMarkup, currentProperties) ).toMatch( desiredMarkup )
  } )
} )
/* eslint-enable */
