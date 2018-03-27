$(document).ready(function () {

$(".target_home").on("click", function(){
  console.log("home");
  window.location.href = `/home`;
});

$(".target_search").on("click", function(){
  console.log("search");
  window.location.href = `/search`;
  });

$(".target_person").on("click", function(){
  console.log("person");

  $.get("/api/user/data",function(data){
    const ID=data.id;
    console.log(data);
    return window.location.href = `/user/${ID}`;
  });
})
});

$(".card").on("click", function(){
  let TC=$(this).data("totalClicks").val();
  let DC=$(this).data("dayClicks").val();
  TC++
  DC++
  var newPost = {
    totalClicks: TC,
    dailyClicks: DC,
    id: $(this).data("id")
  };
  $.ajax({
    method: "PUT",
    url: "/api/posts",
    data: newPost
  })
    .then(function() {
      window.location.href = "/blog";
    });
})
