interface squareConfig{
    color?: string;
    width?: number;
}

interface returnConfig{
    color: string;
    area: number;
}

interface Point{
    readonly x: number;
    readonly y: number;
}

const createSquare = (config: squareConfig): returnConfig => {
    let newSquare = {color: "white", area: 100};

    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: "block"} as squareConfig);
const myPoint: Point = {x:10, y:20};
console.log('myPoint는 readonly로 속성을 할당하면, 할당 후 에는 수정할 수 없다.');
console.log(`새로 생성된 mySquare: ${JSON.stringify(mySquare)}`);