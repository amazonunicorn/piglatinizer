$( "document" ).ready(function() {
    $("button").click(function(){
        $(".output").text("");
        var sentence =$(".input").val();
        var words = sentence.split(' ');
        var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
        words.forEach(function(word){
            var firstLetter=word[0].toLowerCase();
            if (vowels.includes(firstLetter)) {
                console.log(true);
                var vowelWord= word + "ay ";
                $('.output').append(vowelWord);
            }else{
                  console.log(false);
                var conWord= word.slice(1) + firstLetter + "ay ";
                $('.output').append(conWord);
            }

            });

        });


    });