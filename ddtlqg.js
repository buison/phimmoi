$(document).ready(function(){
//Daodien
$(".daodien_remove .dd_remove").each(function() {
var e = $(this).text();e.substr(0, 10).match("ĐD ") && (e = e.replace("ĐD ", ""), 
$(this).html('<a href="/search/label/ĐD '+e+'?&max-results=20" class="movie_dd director">'+e+'</a>')),
$(".movie_dd").parent(".dd_remove").replaceWith(function() {return $(this).contents()}), 
$(".daodien_remove").replaceWith(function() {return $(this).contents()})}), 
$(".dd_remove").remove();
//Theloai
$(".theloai_remove .tl_remove").each(function() {
var e = $(this).text();e.substr(0, 10).match("Phim ") && (e = e.replace("Phim ", ""), 
$(this).html('<a href="/search/label/Phim '+e+'?&max-results=20" class="movie_tl category">'+e+'</a>,')),
$(".movie_tl").parent(".tl_remove").replaceWith(function() {return $(this).contents()}), 
$(".theloai_remove").replaceWith(function() {return $(this).contents()})}), 
$(".tl_remove").remove();
//Quocgia
$(".quocgia_remove .qg_remove").each(function() {
var e = $(this).text();e.substr(0, 10).match("QG ") && (e = e.replace("QG ", ""), 
$(this).html('<a href="/search/label/QG '+e+'?&max-results=20" class="movie_qg country">'+e+'</a>')),
$(".movie_qg").parent(".qg_remove").replaceWith(function() {return $(this).contents()}), 
$(".quocgia_remove").replaceWith(function() {return $(this).contents()})}), 
$(".qg_remove").remove()

});