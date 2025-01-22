$(document).ready(function () {
    $('#dugme4').click(function () {
        let kolku_ima = parseInt($('#brLike4').text().trim());
        let vrednost = $('#dugme4').text().trim();

        if(vrednost === 'ми се допаѓа👍🏻'){
            kolku_ima++;
            $('#brLike4').text(kolku_ima);
            $('#dugme4').text('не ми се допаѓа');
        }else{
            kolku_ima--;
            $('#brLike4').text(kolku_ima);
            $('#dugme4').text('ми се допаѓа👍🏻');
        }
    });

    $('#dugme5').click(function () {
        let kolku_ima = parseInt($('#brLike5').text().trim());
        let vrednost = $('#dugme5').text().trim();

        if(vrednost === 'ми се допаѓа👍🏻'){
            kolku_ima++;
            $('#brLike5').text(kolku_ima);
            $('#dugme5').text('не ми се допаѓа');
        }else{
            kolku_ima--;
            $('#brLike5').text(kolku_ima);
            $('#dugme5').text('ми се допаѓа👍🏻');
        }
    });

    $('#dugme6').click(function () {
        let kolku_ima = parseInt($('#brLike6').text().trim());
        let vrednost = $('#dugme6').text().trim();

        if(vrednost === 'ми се допаѓа👍🏻'){
            kolku_ima++;
            $('#brLike6').text(kolku_ima);
            $('#dugme6').text('не ми се допаѓа');
        }else{
            kolku_ima--;
            $('#brLike6').text(kolku_ima);
            $('#dugme6').text('ми се допаѓа👍🏻');
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