function add(x1, x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}

function multiply(x1, x2){
    return x1 * x2;
}
function divide(x1, x2){
    if(x2 == 0)
        console.log("NO SE PUEDE DIVIDIR POR CERO");
    else{
        return x1/x2;
    }
}                    

exports.add = add;
exports.divide = divide;
exports.multiply = multiply;
exports.substract = substract;
