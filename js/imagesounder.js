var soundies = document.getElementsByClassName("soundy-image");
var sounds = [];
var playings = [];

var i = 0;
for(const soundy of soundies)
{
	sounds.push(new Audio(soundy.dataset.sfx));
	playings.push(false);
	soundy.dataset.id = i;

	soundy.addEventListener("click", () => {
		var id = parseInt(soundy.dataset.id);
		console.log(soundy.dataset.id);
		playings[id] = !playings[id];
		if(playings[id])
		{
			sounds[id].play();
		}
		else
		{
			sounds[id].pause();
		}
	});
	i++;
}
