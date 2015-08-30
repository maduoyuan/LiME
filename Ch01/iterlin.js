#!/usr/bin/env node

"use strict";

//iterateLinear(-2, 1, 1.5, 20);
for(var x = Math.pow(2, -10); x < 1025; x *= 2){
    for(var b = Math.pow(2, -10); b < 1025; b *= 2){
        iterateLinear(0.25, b, x, 20);
    }
}

//iterateLinear(-3, 1, 1, 20);
//iterateLinear(-3, 1, 0.25, 20);

//iterateLinear(-4, 1, 0.2, 25);

function iterateLinear(a, b, x0, n){
    console.log("================================================");
    console.log("       function : y = %d * x + %d", a, b);
    console.log("          1st x : %d", x0);
    console.log("          times : %d", n);
    console.log("------------------------------------------------");
    var x = x0;
    var y;
    console.log("\t0\t: %d", x);
    for (var i = 1; i <= n; i++){
        y = a * x + b;
        console.log("\t%d\t: %d", i, y);
        x = y;
    }
}
