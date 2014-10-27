window.prosole = new Prosole();

function Prosole(){
	var self = this;
	self._group = function(){
		console.groupCollapsed(arguments[0]);
		for (var i = 1; i < arguments.length; i++) {
			console.log(arguments[i]);
		};
		console.groupEnd();
	}
	return 'Hi!';
};

Prosole.prototype.theme = function(message, look){
		if(arguments.length < 2){
			console.log([
					'%cThis function requires two parameters, a message and a style.',
					'%cExample: %cprosole.theme("This is awesome", "solarDark")'
				].join('\n'),
				'font-weight: bold;margin-left:-7px;',
				'font-weight: regular;',
				'font-style: italic; color: green;'
			);
			return;
		}

		var defaults = function(){
			var defaultStyling = [
				'padding: 3px 5px;',
				'margin-left: -6px;',
				'font-size: 25px;'
			]
			return defaultStyling.join('');
		}
		var themes = {
			clown: [
				'color: rgb(165, 255, 0);',
				'font-family: "Comic Sans MS", cursive, sans-serif;',
				'background-image: url(http://code.divshot.com/geo-bootstrap/img/microfab.gif);',
				defaults()
			],
			solarDark: [
				'background-color: #002B36;',
				'color: #93A1A1;',
				'font-family: consolas;',
				defaults()
			],
			solarLight: [
				'background-color: #EEE8D5;',
				'color: #839496;',
				'font-family: consolas;',
				defaults()
			]
		}
		var string = '%c' + message;
		var style = themes[look].join('');
		console.log(string, style);
}

Prosole.prototype.clown = function(){
	if(!arguments.length){
		console.log([
				'%cThis function requires at least one parameter, generally a message.',
				'%cExample: %cprosole.clown("Amazing Debug Message Here!!")'
			].join('\n'),
			'font-weight: bold;margin-left:-7px;',
			'font-weight: regular;',
			'font-style: italic; color: green;'
		);
		return;
	}

	function annoyingColors(){
		var i = 0;
		var colors = [
			'#FF0000',
			'#FF5A00',
			'#FFB400',
			'#FFff00',
			'#A5ff00',
			'#4Bff00',
			'#00ff00',
			'#00ff5A',
			'#00ffB4',
			'#00ffff',
			'#00B4ff',
			'#005Aff',
			'#0000ff',
			'#0000ff',
			'#4B00ff',
			'#A500ff',
			'#FF00ff',
			'#FF00B4'
		];
		var max = colors.length;
		return function(){
			i = ((i + 1) == max) ? 0 : i;
			return colors[i++];
		}
	};

	var args = Array.prototype.slice.call(arguments);
	var fullText = args.join(' ').split('');
	var colorGenerator = annoyingColors();

	var baseStyle = [
		'padding: 3px 5px;',
		'margin-left: -6px;',
		'font-size: 25px;',
		'color: rgb(165, 255, 0);',
		'font-family: "Comic Sans MS", cursive, sans-serif;',
		'background-image: url(http://code.divshot.com/geo-bootstrap/img/microfab.gif);',
	].join('');
	
	var string = '';
	var style = [];

	fullText.forEach(function(letter){
		string += '%c' + letter;
		style.push(baseStyle + 'color:' + colorGenerator());
	});

	var logArgs = [string].concat(style);

	console.log.apply(console, logArgs);

}

Prosole.prototype.hammer = function(){
	var emptySpace = '                             ';
	var style = [
		'background-image:url(http://code.divshot.com/geo-bootstrap/img/test/mchammer.gif);',
		'background-repeat-y: no-repeat;',
		'font-size: 90px;'
	].join('');
	console.log('%c' + emptySpace, style)
}