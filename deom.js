let x = {
    num:5
}

let y = x;

console.log(`X=>${x.num}  Y=>${y.num}`);
y.num = 10;

let b = y;

b.num = 'aj';

console.log(`X=>${x.num}  Y=>${y.num}`);

