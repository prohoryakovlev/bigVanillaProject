const student = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            tutle: "Minsk",
            countryTitle:"Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CS",
        },
        {
            id: 3,
            title: "React",
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city)
console.log(student.technologies[2].title)