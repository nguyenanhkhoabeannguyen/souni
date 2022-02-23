$(document).ready(function(){

    $( ".character-num-1" ).click(function() {
        for (i = 1; i <= 6; i++){
            $('.character-num-'+i).removeClass('opacity-img-character');
        }
        for (i = 1; i <= 6; i++){
            $('.character-num-'+i).addClass('opacity-img-character');
        }
        $('.character-num-1').removeClass('opacity-img-character');

        $('.title-name-character').html('Maria (Priest)');
        $('.description-character').html('Resurrect immediately after death; petrify the opponent, and cause huge damage to petrified and frozen targets');
        $("#img-video-character").attr('src', '/video/Character1.4dfa0349.webm');
        $("#img-video-character").attr('width', '120%');
    });


    $( ".character-num-2" ).click(function() {
        for (i = 1; i <= 6; i++){
            $('.character-num-'+i).removeClass('opacity-img-character');
        }
        for (i = 1; i <= 6; i++){
            $('.character-num-'+i).addClass('opacity-img-character');
        }
        $('.character-num-2').removeClass('opacity-img-character');

        $('.title-name-character').html('Ark I (Shooter)');
        $('.description-character').html('Skills have hurricane and stun effects; can quickly increase the value of anger and increase the release of anger skills');
        $("#img-video-character").attr('src', '/video/Character2.aab72c88.webm');
        $("#img-video-character").attr('width', '88%');
    });

    $( ".character-num-3" ).click(function() {
        for (i = 1; i <= 6; i++){
            $('.character-num-'+i).removeClass('opacity-img-character');
        }
        for (i = 1; i <= 6; i++){
            $('.character-num-'+i).addClass('opacity-img-character');
        }
        $('.character-num-3').removeClass('opacity-img-character');

        $('.title-name-character').html('Lucifer (Warrior)');
        $('.description-character').html("Improve the team's attributes before the start of the battle, and place defense and anger in the battle.");
        $("#img-video-character").attr('src', '/video/Character3.da7719f8.webm');
        $("#img-video-character").attr('width', '105%');
    });

    $( ".character-num-4" ).click(function() {
        for (i = 1; i <= 6; i++){
            $('.character-num-'+i).removeClass('opacity-img-character');
        }
        for (i = 1; i <= 6; i++){
            $('.character-num-'+i).addClass('opacity-img-character');
        }
        $('.character-num-4').removeClass('opacity-img-character');

        $('.title-name-character').html('Harold (Knight)');
        $('.description-character').html("Use battle roars to inspire teammates before the start of the battle, and powerful charges to stun the enemy");
        $("#img-video-character").attr('src', '/video/Character4.13afafbe.webm');
        $("#img-video-character").attr('width', '100%');
    });


});