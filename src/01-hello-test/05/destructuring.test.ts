




test("", () => {
    let props = {
        name: "Prohor",
        age: 25,
        lessons: [{title: "1"}, {title: "2"}]
    }

    // const age = props.age
    // const lessons = props.lesson

    const {age, lessons} = props;

    const a = props.age
    const l = props.lessons

    expect(age).toBe(25)
    expect(lessons.length).toBe(2)

    expect(a).toBe(25)
    expect(l.length).toBe(2)
})