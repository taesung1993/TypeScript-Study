class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const getUserInfo = (user) => `Hello, my name is ${user.name}`;
const user = new UserAccount("Mason Yun", 0);
console.log(getUserInfo(user));
//# sourceMappingURL=index.js.map