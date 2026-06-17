self.addEventListener("fetch", () => {});
document.getElementById("suly").addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        hozzaad();
    }
});

document.getElementById("suly").addEventListener("blur", function(){

    if(this.value !== ""){
        hozzaad();
    }
});
