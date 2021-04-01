console.log("your index.js file is loaded correctly!")
$ (document).ready (function () {
    $(".contactmebutton").click (function () {
        $(".popup").fadeIn("slow");   
        });
        $(".close").click (function () {
            $(".popup").fadeOut("slow");   
            });   
});

$(".contact").click (function () {
    $(".popup").fadeIn("slow");
    });
    $(".close").click (function () {
    $(".popup").fadeOut("slow");   
    });   
    
    $(document).click(function(event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).popup(".contact").length) {
          $("body").find(".popup").removeClass("visible");
        }
      });
      