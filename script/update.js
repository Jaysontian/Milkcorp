window.setInterval(function(){

    $("#milk").text(format(data.milk));
    $("#coins").text(format(data.coins));
    $("#rate").text(format(data.rate));

    $("#speed").text((format(1/(data.speed/1000))) + ' / sec');
    $("#price").text('$ ' + format(data.price));
    $("#cows").text(data.cows);

    $("#rank").text('Rank ' + data.rank);
    $('#nextrank').text(data.upgrades + ' / ' + data.upgradesmax);

    $("#value").text(format(data.value));


    // updating upgrade bars
    for (i=0; i < upgrades.length; i++){
        $('#bar'+i).css("width", upgrades[i].count / upgrades[i].max * 100 + '%');
        upgrades[i].cost = getcost(upgrades[i].base, upgrades[i].increment, upgrades[i].count);
        $("#upgradecost"+i).text('$ ' + format(upgrades[i].cost));

        // upgrading disabled costs
        if (upgrades[i].cost > data.coins || upgrades[i].count >= upgrades[i].max){
            $('.upgradebtn' + i).attr('disabled', true);
            if (upgrades[i].count >= upgrades[i].max){
                $('.upgradebtn' + i).remove();
            }
        }
        else{
            $('.upgradebtn' + i).attr('disabled', false);
        }
    }

    // updating research

    for (i=0; i < research.length; i++){
        if (data.researchlevel >=  research[i].level){$('.researchbtn' + i).css('display','block')}
        else{$('.researchbtn' + i).css('display','none')}
        if (research[i].cost > data.coins){$('.researchbtn' + i).attr('disabled', true);}
        else{$('.researchbtn' + i).attr('disabled', false);}
    }

    // updating ascension button

    if (data.value >= ascension[data.ascendlevel].value){$('.ascendbtn'+data.ascendlevel).attr('disabled', false);}
    else{$('.ascendbtn'+data.ascendlevel).attr('disabled', true);}

    // Unlocking research, ascension divs etc.
    if (!data.unlockresearch){$('.research').css('display','none');}
    else{$('.research').css('display','block');}
    if (!data.unlockascension){$('.ascension').css('display','none');}
    else{$('.ascension').css('display','block');}
    if (!data.unlocktown){$('.town').css('display','none');}
    else{$('.town').css('display','block');}

// News 

    if (data.value >= news[data.newsindex].value){
        type(news[data.newsindex].txt);
        //$('<p>').text(news[data.newsindex].txt).prependTo('#news-con');
        data.newsindex ++;
        if (data.newsindex > 8){
           var child = $('#news-con').children();
           child[8].remove();
        }
    }

// Places

    for (i=0; i < places.length; i++){
        if (!places[i].unlock){
            $('#place'+i).hide();
        }
        else{
            $('#place'+i).show();
        }
    }


}, 100);