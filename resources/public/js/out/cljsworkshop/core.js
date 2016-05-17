// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljsworkshop.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
cljsworkshop.core.main = (function main(){
var counter = cljs.core.atom.call(null,(0));
var button = goog.dom.getElement("button");
var display = goog.dom.getElement("clicksnumber");
display.innerHTML = cljs.core.deref.call(null,counter);

return goog.events.listen(button,"click",((function (counter,button,display){
return (function (event){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return display.innerHTML = cljs.core.deref.call(null,counter);
});})(counter,button,display))
);
});
cljsworkshop.core.main.call(null);

//# sourceMappingURL=core.js.map