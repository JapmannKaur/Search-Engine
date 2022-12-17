const searchIt = () =>{
    const foods = document.getElementById("prodlist")
    const prod = document.querySelectorAll(".prod")
    const fname = document.getElementsByTagName("h2")
    const searchbox = document.getElementById("search-item").value.toUpperCase();

    for(var i=0; i<fname.length;i++){
        let match = prod[i].getElementsByTagName('h2')[0];

        if(match){
            let tval = match.textContent || match.innerHTML

            if(tval.toUpperCase().indexOf(searchbox) > -1){
                prod[i].style.display = "";
            }else{
                prod[i].style.display = "none";
            }
        }
    }
}


// Credits: @iamansingh0
// function searchIt() {
//     const foods = document.getElementById("prodlist")
//     const prod = document.querySelectorAll(".prod")
//     const fname = foods.getElementsByTagName("h2")
//     const searchbox = document.getElementById("search-item").value.toUpperCase()
//     for(var i=0; i<fname.length;i++) {
//         items = prod[i].getElementsByTagName('h2')[0]
//         let tval = items.innerHTML 
//         let val = tval.toUpperCase().indexOf(searchbox)
//         if( val != -1) {
//             prod[i].style.display = "";
//         } else{
//             prod[i].style.display = "none";
//         }
//     }
// } 