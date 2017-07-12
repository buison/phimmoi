function dpg(a){if(-1!=a.indexOf("|")){var b=a.split("|")[1].split("(")[0];return""!=b?b.replace(/\)/gi,""):"Đang cập nhật"}return"Đang cập nhật"};
function dcp(a){return a.replace(/(\[.*?\])/gi,'').split("|")[0].replace(/(\(.*?\))/gi,'');}; // Tên chính + phụ 
function dc(a){return-1!=a.indexOf(a)?a.split("-")[0].replace(/(\[.*?\])/gi,"").replace(/(\(.*?\))/gi,''):a};  //Tên Chính
function dp(a){if(-1!=a.indexOf("-")){var b=a.split("-")[1].split("(")[0];return""!=b?b.replace(/\)/gi,"").replace(/(\[.*?\])/gi,''):"Đang cập nhật"}return"Đang cập nhật"};
function dtt(a){if(-1!=a.indexOf("[")){var b=a.split("[")[1].replace("","").split("+")[0].split("]")[0];return""!=b?b.replace(/\)/gi,""):"Bản Đẹp"}return"Bản Đẹp"};

function dt(a){if(a.indexOf('[')!=-1){var b=a.split('[')[1].split('/')[0];if(b!='')return b.replace(/\]/gi,'');else return 'Bản Đẹp';}else{return 'Bản Đẹp';};};
function dn(a){if(a.indexOf('(')!=-1){var b=a.split('(')[1].split('|')[0];if(b!='')return b.replace(/\)/gi,'').replace(/(\[.*?\])/gi,'');
else return "Đang cập nhật";}else{return "Đang cập nhật";};}; //Năm

function rutgon(a,b){for(var i=a.split('<'),j=0;j<i.length;j++){-1!=i[j].indexOf('>')&&(i[j]=i[j].substring(i[j].indexOf('>')+1,i[j].length));};i=i.join('');return i.substring(0,b-1);};
function clearSearch(a){document.getElementById('keyword').value='';};
numposts=40;String.prototype.GetValue=function (a){a=RegExp('(^|&)'+a+'=([^&]*)(&|$)');a=this.substr(this.indexOf('?')+1).match(a);return null!=a?unescape(a[2]):null;};
var str=location.href,page=str.GetValue('page'),view=str.GetValue('v'),homepageurl=''+urlhome+'',urllength=homepageurl.length;
void 0==page&&(page=1);
void 0==view&&(view='full');
if(str.indexOf('search/label/')!=-1){
if(str.indexOf('?')!=-1){
var str1=str.split('?')[0],label=str1.substring(urllength+13,str1.length);}
else{label=str.substring(urllength+13,str.length);}
var textlabel='/-/'+label, textpage='search/label/'+label;}
else{textpage=textlabel='';}
function removeHtmlTag(strx){if(strx.indexOf("<")!=-1){
var s = strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);}}strx = s.join("");
}return strx.trim();}
