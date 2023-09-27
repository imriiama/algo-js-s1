var a = 3; // mettre let au mlieu de var
while(a < 9){
    a++; //; pas nécessaire 
    console.log(a) 
    if (a == 8){
        break; //; pas nécessaire 
    } else if (a == 7) {
        continue; //; pas nécessaire 
    }
    // console.log(a) au mauvais endroit
}

// correction 
