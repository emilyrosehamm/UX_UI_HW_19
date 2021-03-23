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
    