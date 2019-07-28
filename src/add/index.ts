import { getCount, setCount } from "../count";

export function add() {
    const count = getCount();
    setCount(count + 1);
    console.log('sub invoked!');
}