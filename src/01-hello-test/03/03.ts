import {student} from "../02/02";

debugger
export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StydentType, skill: string) => {
        student.technologies.push({
            id: new Date().getTime(),
            title: skill
        })
    }

class StydentType {
    technologies: any;
}

