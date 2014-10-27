Prosole
=======
_When your Chrome DevTools console just isn't fun enough..._

I was browsing the Chrome API reference for DevTools and discovered a wealth of interesting methods on the `console` object that I began playing around with. What started as an honest attempt at learning somehting new devolved into making a novelty wrapper for `console.log`. This might evolve further in the future or it might stay right where it is. Either way, I'm pushing it now just in case I forget all about it because frankly, _the world needs this_.

Methods
--
Below is a brief reference of the current methods available. 

###**prosole.theme(String, String)**  
Prints a message to the console using the theme specified in the second parameter.  

Example:  
![Theme Example](http://i.imgur.com/iefbKTY.png?1)  

Themes Available:  
- solarDark
- solarLight
- clown

###**prosole.clown(String)**  
Print message to console in obnoxious 90s-style color.  

Example:  
![Clown Example](http://i.imgur.com/Ey0uQnf.png)


###**prosole.hammer()**  
Self explanetory

Example:  
![Hammer Example](http://i.imgur.com/HnjchI2.gif)

##Credits

Thanks to Google for providing [the documentation](https://developer.chrome.com/devtools/docs/console-api) to get me started on this journey... and Chrome I guess. Also a big thanks to Divshot for making [Geo Bootstrap](http://divshot.github.com/geo-bootstrap) from which I stole all of the obnoxiousness. Also, finally, to [Ethan Schoonover](http://ethanschoonover.com/) for Solarized, which is always lovely. 
