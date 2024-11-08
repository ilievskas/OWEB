var niza= new Array("аудио","желка","малер","пилот","оддел","љубов","капка","цреша","јадро","фраза")
var pom;
var br_pogodoci=5;
var selectWord;

function StartNewGame(){
    selectWord=niza[Math.floor(Math.random()*niza.length)];
    pom=Array(selectWord.length).fill("_");
    br_pogodoci=5;

    var i,j;

    i=Math.floor(Math.random()*selectWord.length)
    j=Math.floor(Math.random()*selectWord.length)

    while(i==j){
        j=Math.floor(Math.random()*selectWord.length)
    }

    pom[i]=selectWord[i];
    pom[j]=selectWord[j];

    
    document.getElementById('zbor').innerText=pom.join(" ");
    document.getElementById('bukva').value="";
    

}


function checkLetter(){
    var input=document.getElementById('bukva').value.toLowerCase();
    document.getElementById('bukva').value="";
    var najdov=0;
   

    for(var i=0; i<selectWord.length; i++){
        if(selectWord[i]==input && pom[i]=="_"){
            pom[i]=input;
            najdov=1;
        }
    }

    if(najdov==0){
        br_pogodoci--; 
        if(br_pogodoci==0){
            window.alert("Не го погодивте зборот. Играта заврши! Зборот кој го баравме беше:" + selectWord);
            br_pogodoci=5;

        }

    }else{
        if(!pom.includes("_")){
            window.alert("БРАВО! Го погоди зборот!");
            br_pogodoci=5;

        }else{
            document.getElementById("zbor").innerText=pom.join(" ");
        }
    }
}




window.addEventListener("load",StartNewGame,false)