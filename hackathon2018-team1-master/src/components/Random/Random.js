export default function GetOrder(size) {
    let ELEMENT_TYPES = [];
    for(let i = 0; i < size/2; i++){
        ELEMENT_TYPES.push(i);
        ELEMENT_TYPES.push(i);
    }
    for(let i = 0; i < 10; i++)
        ELEMENT_TYPES.sort(() => Math.random() - 0.5);
    return (ELEMENT_TYPES);
}