import {ManType} from "./Destructuring";


let props: ManType
beforeEach(() => {
    props = {
        name: "Prohor",
        age: 25,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})
//
test('', () => {


// const age = props.age
// const lessons = props.lesson
    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(25)
    expect(lessons.length).toBe(3)


    expect(title).toBe("Nezavisimosti street")


})

// test('', () => {
//     const l1 = props.lessons[0]
//     const l2 = props.lessons[1]
//
//     const [ls1,...restLesson] = props.lessons
//
//     expect(l1.title).toBe('1')
//     expect(l2.title).toBe('2')
//
//     // expect(l2.title).toBe('2')
//     expect(l1.title).toBe('1')
//
//     expect(restLesson.length).toBe(2)
//     expect(restLesson[0].title).toBe('2')
//
// })