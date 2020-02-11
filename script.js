vowel_letters = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"]

function show_phone(){
	$("#phone").fadeIn(1000);
	$("#show_phone").fadeOut(0);
}

function get_slog()
{
	var result = []
	var input_value = $("#words").val().replace(/\s+/g,'');
	var words = input_value.split(",");
	if (words.length != 0)
	{
		words.forEach(function(word){
			word = word.toLowerCase();
			var indexes_vowel = [];
			word_split = word.split("");
			word_split.forEach(function(character, index){
					if (vowel_letters.indexOf(character) != -1)
					{
						indexes_vowel.push(index)
					}
				})
			if (indexes_vowel.length == 1)
			{
				result.push(word);
			}
			else if (indexes_vowel.length > 1)
			{
				slog = word.slice(0, indexes_vowel[0] + 1)
				result.push(slog)
			}
		})
	};
	$("#show_word").val(result);
}