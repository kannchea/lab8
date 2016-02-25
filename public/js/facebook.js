function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  $('.facebookLogin').hide();
  $('#name').html('<h1>' + response.name + '</h1>');
  $('#facebookPhoto #photo').attr("src", "https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/12565604_497607050364341_3462417487607272347_n.jpg?oh=a268cde07320fecc4357de171cd428fc&oe=575F6829");
}