$(document).ready(function () {
    $(".tab li").click(function (e) {
        e.preventDefault();
        var _id=$(this).data("tab");
        // console.log(_id);

        $(".actions .active").removeClass("active");
        $(this).addClass("active");

        $(".box.active").removeClass("active");
        $("#tab-" + _id).addClass("active");

    })
})