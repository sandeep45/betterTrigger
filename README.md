# jQuery - BetterTrigger

`betterTrigger` function can be used to send custom events.
These events can be listened by jquery via `on`, `bind` etc.
These events can also be listened by another version of jQuery.
These events can also be listened by pure javascript via `addEventListener`

### Example

      $(function(){

        $(document).on("bla", function(){
          alert("in fk$'s handler for event: bla");
        });
        window.document.addEventListener("bla", function(){
          alert("in native js handler for event: bla");
        });

        // firing event `bla` via betterTrigger
        $(document).betterTrigger("bla");


        $(document).on("xyz", function(){
          alert("in fk$'s handler for event: bla");
        });
        // This handler below never runs
        window.document.addEventListener("xyz", function(){
          alert("in native js handler for event: bla");
        });

        // firing event `xyz` via Trigger
        $(document).trigger("xyz");
      });


---

[jQuery Bug Addressed](http://bugs.jquery.com/ticket/11047)


[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Events/Creating_and_triggering_events)

