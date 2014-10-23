# jquery.draghover.js

Emulates draghover event by tracking
dragenter / dragleave events of element + children.

https://gist.github.com/gists/3794126
http://stackoverflow.com/a/10310815/4196

# Example:

```javascript
$(window).draghover().on({

	'draghoverstart': function() {
		console.log('A file has been dragged into the window.');
	},

	'draghoverend': function() {
		console.log('A file has been dragged out of the window.');
	}

});
```
