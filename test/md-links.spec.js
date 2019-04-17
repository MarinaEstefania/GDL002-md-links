const mdLinks = require('../src/md-links');


//path.isAbsolute() 

//path <string>
//Returns: <boolean>
//is it an Absolute path?
it('should return true o false absolute path', () => {
  expect (mdLinks.isItAnAbsolutePath('/foo/bar')).toEqual(true)
})

// unit test first example
describe ('mdLinks', () => {
  it('should return a function', () =>{
    expect(typeof mdLinks.add).toBe('function')
  })
})

