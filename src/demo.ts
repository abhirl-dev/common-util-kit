import { Test } from "./interface/test";

function demo({ name, lastName, age }: Test) {
    console.log(name, lastName, age);
}

export { demo };