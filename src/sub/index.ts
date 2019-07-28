import { getCount, setCount } from "../count";

export function sub() {
    const count = getCount();
    setCount(count - 1);
    console.log('sub invoked!');
}