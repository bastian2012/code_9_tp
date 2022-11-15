let digit = "5 2 45 123 12";
let espace = " "
let parc = []
let tab = digit.split(' ')
let tab2 = []
console.log(tab)

let tempon = []
for (let i = 0; i < tab.length; i++) {
    if (tab[i].length > 0) {
let tab_temp = 0

        for (let j = 0; j < tab[i].length; j++) 
        {
            tab_temp += Number(tab[i][j])
        }
        tempon.push(tab_temp)
        }
    else
        tempon.push(Number(tab[i]))
}
console.log(tempon);
let tempon2 =1
for (let i = 0; i < tempon.length; i++) {
tempon2 *= tempon[i];
}
console.log(`rezilta a se ${tempon2}`)

