// $(()=>{
//     $("#b1").click(()=>{
//         $("#i1").hide(1000)
//     })
//     $("#b2").click(()=>{
//         $("#i1").show("fast")
//     })

 //toggle

//     $("#b3").click(()=>{
//         $("#i2").toggle(3000,()=>{
//             $("#paa").text("welcome to kirikalan magic show")
//             $("#paa").css({
//                 color:"white",
//                 backgroundColor:"black"
                
//             })
//             $("#paa").hide(3000)
//         })
//     })
// })

//fadein , fadeout

// $(()=>{
//     $("#b4").click(()=>{
//         $("#i3").fadeToggle(1000)
//     })

// })

//slidein, slideout


// $(()=>{
//     $("#b5").click(()=>{
//         $("#i4").slideToggle(1000)
//     })

// })

//animation

// $(()=>{
//     $("#b6").click(()=>{
//         $("#i4").animate({
//             height:"300px",
//             width:"200px"
//     });
//     $("#b6").click(()=>{
//         $("#i").animate({
//             left:"250px"
//         })
//     })
// })
// })

// animate

// $(()=>
// {
//     $("#b6").click(()=>{
//         $("#i4").animate({
//             left:"300px"
//         }).animate({
//             width:"300px"

//         }).animate({
//             height:"300px"
//         })

//     })
// })


// zoom in zoom out

$(()=>{
    $("#image").click(()=>{
        $("#image").animate({
            top:"+=50px",
            left:"+=100px",
            height:"+=50px",
            width:"+=50px"

            
        })
    })
})


$(()=>{
    $("#b7").click(()=>{
        $("#image").animate({
            top:"-=50px",
            left:"-=100px",
            height:"-=50px",
            width:"-=50px"

            
        },3000)
    })
})


//hover

// $(()=>{
//     $("#b9").mouseenter(()=>{
//         $("#b9").addClass("p")

//     })
  
//     $("#b9").mouseleave(()=>{
//         $("#b9").removeClass("p")
//     })
// })

// $(()=>{
//    let a = $("#image").attr("width")
//    console.log(a)   
// })




