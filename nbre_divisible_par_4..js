let verifier = true
function log(message)
{
    if(verifier === true)
    console.log(message)
}

let n = 21;
if (n%4==0) 
    log('OK')
else
log('NOK')