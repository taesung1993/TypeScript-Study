interface Programmer {
    type: string,
    skill: string
}

interface Cooker {
    type: string,
    needs: string
}

/* 타입 문은 TypeScript의 문법으로 새로운 타입을 정의하고 이름을 붙여주는 문법이다. */
type Job = Programmer | Cooker;
const user: Job = {
    type: "tech",
    skill: "javascript"
}

console.log(`${'needs' in user}의 값이 true면 요리사`);
console.log(`${'skill' in user}의 값이 true면 프로그래머`);

// union 타입 데이터형 선언 시에는 const로 선언하면 에러가 난다.

let value : string | number = "mason yun";

// value = "mason yun";
console.log(`이름은 ${value} 입니다.`);

value = 29;
console.log(`제 나이는 ${value} 입니다.`);

// value = true; // 에러 내용: Type 'boolean' is not assignable to type 'string' | 'number
// console.log(`boolean 타입을 지정해주면 에러가 납니다.`);