 
 function test(chaine) {
   let tab=chaine.toLowerCase().split(' ')
   let tab1=[]
     tab.forEach(element => {
         let idxlet=element.charAt(0).toUpperCase();
         let remp=element.replace(element.charAt(0),idxlet);
         tab1.push(remp);
     });
    console.log(tab1.join(' '))
 }
 test("jean ritchy bastien")