


function Like(){
    const button=document.getElementById("btn1");
    const brlajkovi=document.getElementById("brLike1");

    let count=parseInt(brlajkovi.textContent);
    if(button.textContent=="ми се допаѓа👍🏻"){
        count++;
        document.getElementById("brLike1").innerText=count;
        button.textContent="не ми се допаѓа";
    }else{
        count--;
        document.getElementById("brLike1").innerText=count;
        button.textContent="ми се допаѓа👍🏻";


    }
    brlajkovi.textContent=count;
}

function Like2(){
    const button=document.getElementById("btn2");
    const brlajkovi=document.getElementById("brLike2");

    let count=parseInt(brlajkovi.textContent);
    if(button.textContent=="ми се допаѓа👍🏻"){
        count++;
        document.getElementById("brLike2").innerText=count;
        button.textContent="не ми се допаѓа";
    }else{
        count--;
        document.getElementById("brLike2").innerText=count;
        button.textContent="ми се допаѓа👍🏻";


    }
    brlajkovi.textContent=count;
}

function Like3(){
    const button=document.getElementById("btn3");
    const brlajkovi=document.getElementById("brLike3");

    let count=parseInt(brlajkovi.textContent);
    if(button.textContent=="ми се допаѓа👍🏻"){
        count++;
        document.getElementById("brLike3").innerText=count;
        button.textContent="не ми се допаѓа";
    }else{
        count--;
        document.getElementById("brLike3").innerText=count;
        button.textContent="ми се допаѓа👍🏻";


    }
    brlajkovi.textContent=count;
}


function Like4(){
    const button=document.getElementById("btn4");
    const brlajkovi=document.getElementById("brLike4");

    let count=parseInt(brlajkovi.textContent);
    if(button.textContent=="ми се допаѓа👍🏻"){
        count++;
        document.getElementById("brLike4").innerText=count;
        button.textContent="не ми се допаѓа";
    }else{
        count--;
        document.getElementById("brLike4").innerText=count;
        button.textContent="ми се допаѓа👍🏻";


    }
    brlajkovi.textContent=count;
}

function Like5(){
    const button=document.getElementById("btn5");
    const brlajkovi=document.getElementById("brLike5");

    let count=parseInt(brlajkovi.textContent);
    if(button.textContent=="ми се допаѓа👍🏻"){
        count++;
        document.getElementById("brLike5").innerText=count;
        button.textContent="не ми се допаѓа";
    }else{
        count--;
        document.getElementById("brLike5").innerText=count;
        button.textContent="ми се допаѓа👍🏻";


    }
    brlajkovi.textContent=count;
}

function Like6(){
    const button=document.getElementById("btn6");
    const brlajkovi=document.getElementById("brLike6");

    let count=parseInt(brlajkovi.textContent);
    if(button.textContent=="ми се допаѓа👍🏻"){
        count++;
        document.getElementById("brLike6").innerText=count;
        button.textContent="не ми се допаѓа";
    }else{
        count--;
        document.getElementById("brLike6").innerText=count;
        button.textContent="ми се допаѓа👍🏻";


    }
    brlajkovi.textContent=count;
}




    document.getElementById("btn1").addEventListener("click",Like(),false);
    document.getElementById("btn2").addEventListener("click",Like(),false);
    document.getElementById("btn3").addEventListener("click",Like(),false);
    document.getElementById("btn4").addEventListener("click",Like(),false);
    document.getElementById("btn5").addEventListener("click",Like(),false);
    document.getElementById("btn6").addEventListener("click",Like(),false);



    function postComment1() {
        
        let commentText = document.getElementById('comment1').value;
        
        
        if (commentText.trim() !== "") {
            
            let newComment = document.createElement("li");
            newComment.innerText = commentText;

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Избриши";

            deleteButton.classList.add('delete-kopce');
        deleteButton.onclick = function() {
            newComment.remove();  
        };

        newComment.appendChild(deleteButton);
    
            
            document.getElementById('commentsSection1').appendChild(newComment);
    
           
            document.getElementById('comment1').value = "";
        } else {
            alert("Поставете некој коментар пред да го пратите.");
        }
    }

    function postComment2() {
        
        let commentText = document.getElementById('comment2').value;
        
        
        if (commentText.trim() !== "") {
           
            let newComment = document.createElement("li");
            newComment.innerText = commentText;

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Избриши";
            deleteButton.classList.add('delete-kopce');
        
        
        deleteButton.onclick = function() {
            newComment.remove();  
        };

        newComment.appendChild(deleteButton);
    
            
            document.getElementById('commentsSection2').appendChild(newComment);
    
            
            document.getElementById('comment2').value = "";
        } else {
            alert("Поставете некој коментар пред да го пратите.");
        }
    }

    function postComment3() {
        
        let commentText = document.getElementById('comment3').value;
        
        
        if (commentText.trim() !== "") {
           
            let newComment = document.createElement("li");
            newComment.innerText = commentText;

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Избриши";
            deleteButton.classList.add('delete-kopce');
        
        
        deleteButton.onclick = function() {
            newComment.remove();  
        };

        newComment.appendChild(deleteButton);
    
            
            document.getElementById('commentsSection3').appendChild(newComment);
    
            
            document.getElementById('comment3').value = "";
        } else {
            alert("Поставете некој коментар пред да го пратите.");
        }
    }

    function postComment4() {
        
        let commentText = document.getElementById('comment4').value;
        
        
        if (commentText.trim() !== "") {
            
            let newComment = document.createElement("li");
            newComment.innerText = commentText;

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Избриши";
            deleteButton.classList.add('delete-kopce');
        
        
        deleteButton.onclick = function() {
            newComment.remove(); 
        };

        newComment.appendChild(deleteButton);
            document.getElementById('commentsSection4').appendChild(newComment);
            document.getElementById('comment4').value = "";
        } else {
            alert("Поставете некој коментар пред да го пратите.");
        }
    }

    function postComment5() {
       
        let commentText = document.getElementById('comment5').value;
       
        if (commentText.trim() !== "") {
            
            let newComment = document.createElement("li");
            newComment.innerText = commentText;

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Избриши";
            deleteButton.classList.add('delete-kopce');
        
        deleteButton.onclick = function() {
            newComment.remove(); 
        };

        newComment.appendChild(deleteButton);
    
           
            document.getElementById('commentsSection5').appendChild(newComment);
    
           
            document.getElementById('comment5').value = "";
        } else {
            alert("Поставете некој коментар пред да го пратите.");
        }
    }

    function postComment6() {
      
        let commentText = document.getElementById('comment6').value;
        
       
        if (commentText.trim() !== "") {
           
            let newComment = document.createElement("li");
            newComment.innerText = commentText;

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Избриши";
            deleteButton.classList.add('delete-kopce');
      
        deleteButton.onclick = function() {
            newComment.remove(); 
        };

        newComment.appendChild(deleteButton);
    
           
            document.getElementById('commentsSection6').appendChild(newComment);
    
            
            document.getElementById('comment6').value = "";
        } else {
            alert("Поставете некој коментар пред да го пратите.");
        }
    }

    

    document.getElementById("komentar1").addEventListener("click",postComment1,false);
    document.getElementById("komentar2").addEventListener("click",postComment2,false);
    document.getElementById("komentar3").addEventListener("click",postComment3,false);
    document.getElementById("komentar4").addEventListener("click",postComment4,false);
    document.getElementById("komentar5").addEventListener("click",postComment5,false);
    document.getElementById("komentar6").addEventListener("click",postComment6,false);
   


