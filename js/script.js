let selectBox = document.querySelector('#slct');
console.dir(selectBox);

window.addEventListener('load', () =>{
    selectBox.addEventListener('change', (e) =>{
        e.preventDefault();
        if(selectBox.value == "Osh"){
            window.open('index.html', "_self");
        }else if(selectBox.value == "Bishkek"){
            window.open('bishkek.html', "_self");
        }else if(selectBox.value == "Djalal"){
            window.open('djalal.html', "_self");
        }else if(selectBox.value == "Naryn"){
            window.open('naryn.html', "_self");
        }else if(selectBox.value == "Talas"){
            window.open('talas.html', "_self");
        }else if(selectBox.value == "Karakol"){
            window.open('karakol.html', "_self");
        }else if(selectBox.value == "Cholpon"){
            window.open('cholpon.html', "_self");
        }else if(selectBox.value == "Batken"){
            window.open('batken.html', "_self");
        }
    })
})

