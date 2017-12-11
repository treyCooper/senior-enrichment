const db = require('./db/models/index').db;
const Campus = db.model('campus');
const Student = db.model('student');



const mercuryStudents = [
  {
    firstName: "Bill",
    lastName: "Wilson",
    email: 'bill@funk.com',
    gpa: '3.2'
  },
  {
    firstName: "Sue",
    lastName: "Jones",
    email: 'sue@js.com',
    gpa: '3.0'
  }
]

const venusStudents = [
  {
    firstName: "Todd",
    lastName: "Wills",
    email: 'tw@blues.com',
    gpa: '2.2'
  },
  {
    firstName: "Ann",
    lastName: "Smith",
    email: 'aSmith@netscape.com',
    gpa: '3.0'
  }
]
const campuses = [
  {
    name: 'Mercury',
    imageUrl: 'http://nineplanets.org/images/mercury.jpg',
    description: 'The hottest campus in the Milky Way Galaxy',
    students: mercuryStudents
  },
  {
    name: 'Venus',
    imageUrl: 'http://nineplanets.org/images/venus.jpg',
    description: 'Our code is lightning fast!',
    students: venusStudents
  }
]
db.sync({force: true})
  .then(() => {
    return Promise.all(campuses.map(campus => {
      return Campus.create(campus, {include: [Student]})
    }))
    .then(() => console.log('SUCCESS'))
  })
