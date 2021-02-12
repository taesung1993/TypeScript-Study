const createSquare = (config) => {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};
let mySquare = createSquare({ color: "block" });
const myPoint = { x: 10, y: 20 };
console.log('myPoint는 readonly로 속성을 할당하면, 할당 후 에는 수정할 수 없다.');
console.log(`새로 생성된 mySquare: ${JSON.stringify(mySquare)}`);
//# sourceMappingURL=index.js.map