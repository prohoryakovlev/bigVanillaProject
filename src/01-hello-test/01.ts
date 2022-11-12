
export function sum(a: number, b: number) {
    return a + b
}
export function mult(a: number, b: number) {
    return a * b
}


export function splitInterWords(sentense: string) {
    return sentense.toLowerCase().split(" ").filter(w => w=== "")
        .map(w => w.replace("!", ""))
}
