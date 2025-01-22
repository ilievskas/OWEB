$(document).ready(function () {

    $('#dugme1').click(function () {
        let kolku_ima = parseInt($('#brLike1').text().trim());
        let vrednost = $('#dugme1').text().trim();

        if(vrednost === 'ми се допаѓа👍🏻'){
            kolku_ima++;
            $('#brLike1').text(kolku_ima);
            $('#dugme1').text('не ми се допаѓа');
        }else{
            kolku_ima--;
            $('#brLike1').text(kolku_ima);
            $('#dugme1').text('ми се допаѓа👍🏻');
        }
    });

    $('#dugme2').click(function () {
        let kolku_ima = parseInt($('#brLike2').text().trim());
        let vrednost = $('#dugme2').text().trim();

        if(vrednost === 'ми се допаѓа👍🏻'){
            kolku_ima++;
            $('#dugme2').text('не ми се допаѓа');
            $('#brLike2').text(kolku_ima);
        }else{
            kolku_ima--;
            $('#dugme2').text('ми се допаѓа👍🏻');
            $('#brLike2').text(kolku_ima);
        }
    });

    $('#dugme3').click(function () {
        let kolku_ima = parseInt($('#brLike3').text().trim());
        let vrednost = $('#dugme3').text().trim();

        if(vrednost === 'ми се допаѓа👍🏻'){
            kolku_ima++;
            $('#dugme3').text('не ми се допаѓа');
            $('#brLike3').text(kolku_ima);
        }else{
            kolku_ima--;
            $('#dugme3').text('ми се допаѓа👍🏻');
            $('#brLike3').text(kolku_ima);
        }
    });

     $('.komentar').click(function() {
            const indeks = $(this).data('index'); // Земи го индексот од data атрибутот
            const vrednosta = $(`#comment${indeks}`).val().trim();
        
            if (vrednosta != '') { // Провери дали има внесен коментар
                const nov = $('<li>').text(vrednosta);
        
                const deletebtn = $('<button>').text('избриши').addClass('delete-kopce').click(function () {
                        $(nov).remove();
                    });
        
                nov.append(deletebtn);
                $(`#commentsSection${indeks}`).append(nov);
                $(`#comment${indeks}`).val(''); // Исчисти го полето
            } else {
                alert("Поставете некој коментар пред да го пратите.");
            }
    });
        




})