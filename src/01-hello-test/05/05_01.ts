import {match} from "assert";

export type ManType = {
    name: string
    age: number
}

const people = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Prohor Yakovlev ", age: 25},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTransformator = (man: ManType) => {
    return{
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1],
    }
}

const devs = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Prohor", lastName: "Yakovlev"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }
]
