let name = '小明'
let age = 18
let flag = true

function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20, 30))

}

// 导出方式1:
export {
    flag, sum
}

// 导出方式2:

export let num1 = 1000;
export let height1 = 1.88;

// 导出函数,类:
export function  mul(num1, num2) {
    return num1 + num2;
}

export class person {
    run() {
        console.log('奔跑');
    }
}

// export default
const address = '北京市'
export default address
