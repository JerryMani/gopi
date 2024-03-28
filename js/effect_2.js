
$(()=>{

    // bubbling

    // console.log($("ul").parent())
    // $("ul").parent().addClass("first")
    // $("div").children().addClass("second")
    // $("div").find("*").addClass("second")

    //siblings

    // console.log($("h1").siblings()
    // );
    // console.log($("p").next()
    // );
    // console.log($("p").prev()
    // );
    // console.log($("ul").prevAll()
    // );

    //filtering Method

    // 1.first()
    // 2.filter()
    // 3.last()
    // 4.eq()
    // 5.slice()
    // 6.has()
    // 7.not()

    //  $("ul li").first().addClass("first")
    //  $("ul li").last().addClass("second")

    //  $("ul li").eq(4).addClass("second")

    //  $("ul li").filter(":even").addClass("second")
    //  $("ul li").filter(":odd").addClass("first")

    //   $("ul li").has().addClass("second")
        
    $("ul li").slice(2,4).addClass("second")

    //Ajax
    
    // 1.get()
    // 2.post()
    // 3.load()

   

    // $("button").click(function(){
    //     $.get("dom.html", function(data, status){
    //         alert("Data: " + data + "nStatus: " + status);
    //         console.log(status);
    //     });
    // });
   
    $(document).ready(function () {
        $("button").click(function () {
         $.post(
             "demo.html",
             {
                 name: "Cristian Ionescu",
                 city: "Bucharest",
             },
             function (data, status) {
                 alert("Data: " + data + "nStatus: " + status);
             }
         );
        });
    });



})