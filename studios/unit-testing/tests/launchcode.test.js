// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test('object key "organization" should contain value "nonprofit"', function() {
    expect(launchcode.organization).toBe('nonprofit')
  })

  test('object key "executiveDirector" should contain value "Jeff"', function() {
    expect(launchcode.executiveDirector).toBe('Jeff')
  })

  test('object key "percentageCoolEmployees" should contain value "100"', function() {
    expect(launchcode.percentageCoolEmployees).toBe(100)
  })

  test('object key array "programsOffered" should contain 3 expected values', function() {
    expect(launchcode.programsOffered).toContain('Web Development')
    expect(launchcode.programsOffered).toContain('Data Analysis')
    expect(launchcode.programsOffered).toContain('Liftoff')
    expect(launchcode.programsOffered.length).toBe(3)
  })

  test('object method launchOutput has expected outputs', function() {
    expect(launchcode.launchOutput(4)).toBe('Launch!')

    expect(launchcode.launchOutput(9)).toBe('Code!')

    expect(launchcode.launchOutput(25)).toBe('Rocks!')

    expect(launchcode.launchOutput(6)).toBe('LaunchCode!')

    expect(launchcode.launchOutput(15)).toBe('Code Rocks!')

    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!')

    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!')

    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work")
  })

});