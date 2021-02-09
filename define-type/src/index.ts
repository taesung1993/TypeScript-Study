
/* name: string과 id:number을 포함하는 추론 타입을 가진 객체를 생성하는 예제 */
interface User{
    name: string;
    id: number;
}

/* 새로운 객체가 인터페이스 형태를 따르고 있다. */
/*  객체 선언 형태
const user:User = {
    name: "Mason Yun",
    id: 0,
//  nickname: "mason" => 형식에 맞지 않으므로 경고를 준다.
}
*/

/* 클래스로도 선언할 수 있다. */
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id:number){
        this.name = name;
        this.id = id;
    }
}

const getUserInfo = (user: User):string => `Hello, my name is ${user.name}`;

const user:User = new UserAccount("Mason Yun", 0);

console.log(getUserInfo(user));



