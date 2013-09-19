/**
* `betterTrigger` function can be used to send custom events.
* These events can be listened by jquery via `on`, `bind` etc.
* These events can also be listened by another version of jQuery.
* These events can also be listened by pure javascript via `addEventListener`
*
* @see Bug: http://bugs.jquery.com/ticket/11047
* @see MDN Doc: https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Events/Creating_and_triggering_events
*
* MIT
* @author Sandeep Arneja
* @url https://github.com/sandeep45
**/

(function($){
      $.fn.betterTrigger = function(evtName){
        return this.each(function() {
          if(window.Event && window.dispatchEvent){
            var customEvent = new Event(evtName);
            window.document.dispatchEvent(customEvent);
          }else{
            $(this).trigger(evtName);
          }
        });
      };
})(jQuery);