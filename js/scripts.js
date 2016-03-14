$(function() {
  var flavors = ['Birthday Cake', 'Black Raspberry Crunch', 'Caramel Praline', 'Chocolate Brownies', 'Cookies and Dough', 'Banana Cream Pie', 'Banana Peanut Butter Ripple'];

  $('button').click(function() {
    flavors.forEach(function(flavorRaw) {
      flavor = flavorRaw.replace(/\s+/g, '-').toLowerCase();  // replace space w/dash
console.log(flavor);
      $('#results').append('<div class="col-xs-6 col-md-4"><div class="thumbnail"><img src="images/' + flavor + '.jpg' + '" alt="' + flavorRaw + '"><div class="caption"><h4>' + flavorRaw + '</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p></div></div></div>')
    });  //forEach

  });

});
