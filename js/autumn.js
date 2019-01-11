var pkmn = document.getElementById('pmkn');
var bkgd = document.getElementById('bkgd');
TweenMax.to(pkmn, 3, {y:225, rotation: 360, scale: 5, delay:.5, ease:Bounce.easeOut});
TweenMax.to(bkgd, 5, {opacity: .3});;