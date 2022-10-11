const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('info', () => {

        it('should return engineer info', () => {
            const engineer = new Engineer('Michael', '1', 'mscott@dundermifflin.com', 'michaelscarn')

            expect(engineer.name).toBe('Michael')
            expect(engineer.id).toBe('1')
            expect(engineer.email).toBe('mscott@dundermifflin.com')
            expect(engineer.github).toBe('michaelscarn')
        })
    })

    describe('getGithub', () => {

        test('should get the engineer github', () => {
          let employee = new Engineer('Dwight', '3', 'dwight@dundermifflin', 'beetlover')
          let spy = jest.spyOn(employee, 'getGithub').mockImplementation(() => 'beetlover')  

          expect(employee.getGithub()).toBe('beetlover')

          spy.mockRestore()
        })
    })

    describe('getRole', () => {

        test('should get the engineer role', () => {
          let employee = new Engineer('Dwight', '3', 'dwight@dundermifflin')
          let spy = jest.spyOn(employee, 'getRole').mockImplementation(() => 'Engineer')  

          expect(employee.getRole()).toBe('Engineer')

          spy.mockRestore()
        })
    })
})