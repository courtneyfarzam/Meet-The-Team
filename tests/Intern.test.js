const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('info', () => {

        it('should return intern info', () => {
            const intern = new Intern('Michael', '1', 'mscott@dundermifflin.com', 'Scranton Community College')

            expect(intern.name).toBe('Michael')
            expect(intern.id).toBe('1')
            expect(intern.email).toBe('mscott@dundermifflin.com')
            expect(intern.school).toBe('Scranton Community College')
        })
    })

    describe('getSchool', () => {

        test('should get the intern school', () => {
          let intern = new Intern('Dwight', '3', 'dwight@dundermifflin', 'Scranton Community College')
          let spy = jest.spyOn(intern, 'getSchool').mockImplementation(() => 'Scranton Community College')  

          expect(intern.getSchool()).toBe('Scranton Community College')

          spy.mockRestore()
        })
    })

    describe('getRole', () => {

        test('should get the intern role', () => {
          let intern = new Intern('Dwight', '3', 'dwight@dundermifflin')
          let spy = jest.spyOn(intern, 'getRole').mockImplementation(() => 'Intern')  

          expect(intern.getRole()).toBe('Intern')

          spy.mockRestore()
        })
    })
})