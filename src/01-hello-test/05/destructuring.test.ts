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

test('', () => {


// const age = props.age
// const lessons = props.lesson
    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(25)
    expect(lessons.length).toBe(2)


    expect(title).toBe("Nezavisimosti street")


})

test('', () => {


})