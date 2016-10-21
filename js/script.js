$(document).ready(function() {

	var questionsAndAnswers = [
		{
			question: "Feral cats can become happy housecats:",
			choices: ["Never. Once a wild child, always a wild child.", "Sometimes. With proper care, temperament and a bit of time.", "Always. Love and food is all you need."],
			answer: "Sometimes. With proper care, temperament and a bit of time."
		},
		{
			question: "Kittens born to feral cats will themselves be feral.",
			choices: ["Always true. Their mums teach them to fear humans.", "True IF they're born in the wild and have no contact with humans for the first several months of their lives.", "Pretty much false if the kittens are socialized early enough (and many can still be socialized later)."],
			answer: "Pretty much false if the kittens are socialized early enough (and many can still be socialized later)."
		},
		{
			question: "Once a feral cat is trapped and demonstrates its refusal to live with humans, it will never trust humans again.",
			choices: ["True. The experience just reinforces the idea that humans and predators and scary.", "Sometimes true. It may take a year or longer for the cat to trust you and some never will, but some may change their minds with time and care.", "Totally false. All cats can be socialized and happy with humans; you just need to keep trying."],
			answer: "Sometimes true. It may take a year or longer for the cat to trust you and some never will, but some may change their minds with time and care."
		},
		{
			question: "It's best for feral cats to give birth in the wild instead of being trapped and forced to do so in the care of humans.",
			choices: ["Yes. These are wild animals who have given birth by themselves for many thousands of years. Why mess with nature?", "No. Complications can arise: some cats may require c-sections, some kittens may not be properly breathing at first, some cats are so exhausted, they're unable to care properly for their newborn kittens in the critical minutes and hours following birth.", "Sometimes. Giving birth in the wild means more kittens will die out there, reducing cat overpopulation, but friendly cats should be brought in to socialize and adopt their kittens."],
			answer: "No. Complications can arise: some cats may require c-sections, some kittens may not be properly breathing at first, some cats are so exhausted, they're unable to care properly for their newborn kittens in the critical minutes and hours following birth."
		},
		{
			question: "TNR (trap-neuter-release) programs are:",
			choices: ["An ideal solution. Every cat everywhere should be spayed/neutered immediately. In fact, pet shops and breeders should be shut down and forced to spay/neuter their charges. Private citizens should be fined if they don't comply, as well.", "A good option. But this should only apply to feral cats. Housecats should be free to reproduce, as they've proven themselves to make good pets.", "Kind of an awful idea. Who are we to take away the chance to have babies from a species whose environment we've already encroached on so heavily? At least let them have this.", "The best option we currently have. They help reduce cat overpopulation (and the misery and needless cat death that goes along with it) but may someday become obsolete, if all shelters are empty and there are more loving homes available than cats to fill them."],
			answer: "The best option we currently have. They help reduce cat overpopulation (and the misery and needless cat death that goes along with it) but may someday become obsolete, if all shelters are empty and there are more loving homes available than cats to fill them."
		}
	];

	var currentQuestionIndex = 0;
	var userScore = 0;
	var questionNumber = 1;

	function presentQuestion() {
		var currentQuestion = questionsAndAnswers[currentQuestionIndex];
		for (var i = 0; i < currentQuestion.choices.length; i++) {
			$('ul').append('<li><input type="radio" name="choice" value="' + i + '"/>' + currentQuestion.choices[i] + '</li>');
			$('#statement').text(currentQuestion.question);
		};
	}

	$('#newGameButton').on('click', function() {
		questionNumber = 1;
		userScore = 0;
		$('#gameOver').hide();
		$(this).hide();
		$(this).text("Play Again?");
		$('.question').show();
		presentQuestion();
		$('#progress h3').text("Question " + questionNumber + " of 5");
		$('#progress h2').text("Current score: " + userScore);
		$('#progress').show();
	});

	$('ul').on('click', 'li', function() {
			$('li').remove();
			//console.log(questionsAndAnswers[currentQuestionIndex].answer);
			if ($(this).text() === questionsAndAnswers[currentQuestionIndex].answer) {
				userScore++;
			};
			currentQuestionIndex++;
			questionNumber++;
			
			if (currentQuestionIndex < questionsAndAnswers.length) {
				presentQuestion();
				$('#progress h3').text("Question " + questionNumber + " of 5");
				$('#progress h2').text("Current score: " + userScore);
			}
			else {
				currentQuestionIndex = 0;
				$('.question').hide();
				if (userScore < 3) {
					$('#gameOver h1').text("Oooooh, burn, y'all should learn more about wild kitties. Your final score is: " + userScore + " out of 5.");
				}
				else if (userScore == 3) {
					$('#gameOver h1').text("Congrats, you know a thing or two about wild kitties. Thanks for playing! Your final score is: " + userScore + " out of 5.");
				}
				else {
					$('#gameOver h1').text("Look at you, wild kitty master! Go forth and spread your wisdom! Your final score is: " + userScore + " out of 5.");
				};
				$('#progress').hide();
				$('#gameOver').show();
				$('#newGameButton').show();
			}
	});
});