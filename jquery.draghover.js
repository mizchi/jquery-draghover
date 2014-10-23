/*

    jquery.draghover.js

    Emulates draghover event by tracking
    dragenter / dragleave events of element + children.

    https://gist.github.com/gists/3794126
    http://stackoverflow.com/a/10310815/4196

    Example:

    $(window).draghover().on({

      'draghoverstart': function() {
        console.log('A file has been dragged into the window.');
      },

      'draghoverend': function() {
        console.log('A file has been dragged out of the window.');
      }

    });

*/

$.fn.draghover = function(options) {

  return this.each(function() {

    // create an empty collection
    var collection = $(),
        self = $(this);

    // dragenter will fire on our original element + all of its children
    self.on('dragenter', function(e) {

      // if collection is empty this must be our original element
      if (collection.size() === 0) self.trigger('draghoverstart', e);

      // add the 'entered' element to the collection
      collection = collection.add(e.target);

    });

    // dragleave will fire on our original element + all of its children
    // drop is equivalent to a dragleave
    self.on('dragleave drop', function(e) {

      // timeout is needed because Firefox 3.6 fires the dragleave event on
      // the previous element before firing dragenter on the next one
      setTimeout(function() {

        // remove 'left' element from the collection
        collection = collection.not(e.target);

        // if collection is empty we have left the original element
        // (dragleave has fired on all 'entered' elements)
        if (collection.size() === 0) self.trigger('draghoverend');

      }, 1);

    });

  });
};
