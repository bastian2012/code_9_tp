let adresse_ip = "27.0.0.1"

let tab = adresse_ip.split(".")
 
console.log(tab)
let tab_temp  =0
for (let i = 0; i < tab.length; i++) {
   if(tab[i].length>0)
        {
            for (let j = 0; j < tab[i].length; j++) {
            tab_temp +=Number(tab[i][j])
            }
          }
        else
        tab_temp+=Number(tab[i])
    }
console.log(`pot ki louvri a se  ${tab_temp* Number(tab[0][0])}`)
 
 