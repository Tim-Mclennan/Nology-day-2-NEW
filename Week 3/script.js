const firstName = 'aiden';
let i=0;
let byteSum = 0;

while (i++ < firstName.length) {
    byteSum += firstName.charCodeAt(i);
}

console.log(byteSum);