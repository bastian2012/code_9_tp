let verifier = true;
function log(message)
{
    if(verifier === true)
    console.log(message);
}

let x=100, y =200;

let table_nombre=[];
for (let j = x; j <=y ; j++) {
     table_nombre.push(j)
    
}
log(` men nomb yo nan inteval ${x} ak ${y} \n ${table_nombre}`)

let table1 = [], table2 = [], table3 = [], table4 = [];
let compteur1 = 0,compteur2 = 0, compteur3 = 0, compteur4 = 0;

a = 10;
b = 4;
 
for (let i = 0; i <= table_nombre.length; i++) {
    if (table_nombre[i]%a==0) {
        compteur1 +=1
        table1.push(table_nombre[i])
    }
    else if(table_nombre[i]%b == 0)
    {
    compteur2 +=1
    table2.push(table_nombre[i])
    }

    else if((table_nombre[i]%b == 0) && (table_nombre[i]%a == 0))
    {
    compteur3 +=1
    table3.push(table_nombre[i])
    }
    else if(!(table_nombre[i]%b == 0) && !(table_nombre[i]%a == 0))
    {
    compteur4 +=1
    table4.push(table_nombre[i])
    }
}
log(`
\n\n gen ${compteur1} nomb ki Miltip ${a}, men ki pa miltip ${b} \n ${table1}
\n\n
gen ${compteur2} nomb ki Miltip ${b}, men ki pa miltip \n ${a} ${table2}
\n\n
gen ${compteur3} nomb ki Miltip ${a}, e ki miltip  ${b} \n ${table3}
\n\n
gen ${compteur4} nomb ki pa Miltip ni ${a}, ni miltip ${b} \n ${table4}

`)