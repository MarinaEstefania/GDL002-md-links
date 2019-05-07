const mdLinks = require('../src/md-links');


describe ('md-Links.js File ', () => {
  test('findLinksInFile should return a function', () =>{
    expect(typeof (mdLinks.findLinksInFile)).toBe('function')
  });

  //TEST FOR OPTIONS
  test('flowDirection should return a function', () =>{
    expect(typeof (mdLinks.flowDirection)).toBe('function')
  });

  test('should return Total Links: 3', () => {
    expect.assertions(1);
    return mdLinks.flowDirection('stats').then(data=>{
      expext(data).toBe('stats option selected')
    })
  });

})

