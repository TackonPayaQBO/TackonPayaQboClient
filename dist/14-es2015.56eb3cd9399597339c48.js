(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{AgMk:function(b,e,d){"use strict";d.r(e),d.d(e,"ThemeModule",function(){return c});var o=d("SVse"),t=d("iInd"),i=d("NuRj"),n=d("8Y7J");const a=[{path:"",data:{title:"Theme"},children:[{path:"",redirectTo:"colors"},{path:"colors",component:(()=>{class b{constructor(b){this._document=b}themeColors(){Array.from(this._document.querySelectorAll(".theme-color")).forEach(b=>{const e=Object(i.getStyle)("background-color",b),d=this._document.createElement("table");d.innerHTML=`\n        <table class="w-100">\n          <tr>\n            <td class="text-muted">HEX:</td>\n            <td class="font-weight-bold">${Object(i.rgbToHex)(e)}</td>\n          </tr>\n          <tr>\n            <td class="text-muted">RGB:</td>\n            <td class="font-weight-bold">${e}</td>\n          </tr>\n        </table>\n      `,b.parentNode.appendChild(d)})}ngOnInit(){this.themeColors()}}return b.\u0275fac=function(e){return new(e||b)(n.Mb(o.d))},b.\u0275cmp=n.Gb({type:b,selectors:[["ng-component"]],decls:131,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"icon-drop"],[1,"card-body"],[1,"row"],[1,"col-xl-2","col-md-3","col-sm-4","col-6","mb-4"],[1,"bg-primary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-secondary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-success","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-danger","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-warning","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-info","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-dark","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"row","mb-3"],[1,"bg-gray-100","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-200","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-300","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-400","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-500","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-600","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-700","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-800","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-900","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-indigo","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-purple","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-pink","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-red","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-orange","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-yellow","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-green","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-teal","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-cyan","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"]],template:function(b,e){1&b&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Nb(3,"i",3),n.yc(4," Theme colors "),n.Rb(),n.Sb(5,"div",4),n.Sb(6,"div",5),n.Sb(7,"div",6),n.Nb(8,"div",7),n.Sb(9,"h6"),n.yc(10,"Brand Primary Color"),n.Rb(),n.Rb(),n.Sb(11,"div",6),n.Nb(12,"div",8),n.Sb(13,"h6"),n.yc(14,"Brand Secondary Color"),n.Rb(),n.Rb(),n.Sb(15,"div",6),n.Nb(16,"div",9),n.Sb(17,"h6"),n.yc(18,"Brand Success Color"),n.Rb(),n.Rb(),n.Sb(19,"div",6),n.Nb(20,"div",10),n.Sb(21,"h6"),n.yc(22,"Brand Danger Color"),n.Rb(),n.Rb(),n.Sb(23,"div",6),n.Nb(24,"div",11),n.Sb(25,"h6"),n.yc(26,"Brand Warning Color"),n.Rb(),n.Rb(),n.Sb(27,"div",6),n.Nb(28,"div",12),n.Sb(29,"h6"),n.yc(30,"Brand Info Color"),n.Rb(),n.Rb(),n.Sb(31,"div",6),n.Nb(32,"div",13),n.Sb(33,"h6"),n.yc(34,"Brand Light Color"),n.Rb(),n.Rb(),n.Sb(35,"div",6),n.Nb(36,"div",14),n.Sb(37,"h6"),n.yc(38,"Brand Dark Color"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(39,"div",1),n.Sb(40,"div",2),n.Nb(41,"i",3),n.yc(42," Grays "),n.Rb(),n.Sb(43,"div",4),n.Sb(44,"div",15),n.Sb(45,"div",6),n.Nb(46,"div",16),n.Sb(47,"h6"),n.yc(48,"Gray 100 Color"),n.Rb(),n.Rb(),n.Sb(49,"div",6),n.Nb(50,"div",17),n.Sb(51,"h6"),n.yc(52,"Gray 200 Color"),n.Rb(),n.Rb(),n.Sb(53,"div",6),n.Nb(54,"div",18),n.Sb(55,"h6"),n.yc(56,"Gray 300 Color"),n.Rb(),n.Rb(),n.Sb(57,"div",6),n.Nb(58,"div",19),n.Sb(59,"h6"),n.yc(60,"Gray 400 Color"),n.Rb(),n.Rb(),n.Sb(61,"div",6),n.Nb(62,"div",20),n.Sb(63,"h6"),n.yc(64,"Gray 500 Color"),n.Rb(),n.Rb(),n.Sb(65,"div",6),n.Nb(66,"div",21),n.Sb(67,"h6"),n.yc(68,"Gray 600 Color"),n.Rb(),n.Rb(),n.Sb(69,"div",6),n.Nb(70,"div",22),n.Sb(71,"h6"),n.yc(72,"Gray 700 Color"),n.Rb(),n.Rb(),n.Sb(73,"div",6),n.Nb(74,"div",23),n.Sb(75,"h6"),n.yc(76,"Gray 800 Color"),n.Rb(),n.Rb(),n.Sb(77,"div",6),n.Nb(78,"div",24),n.Sb(79,"h6"),n.yc(80,"Gray 900 Color"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(81,"div",1),n.Sb(82,"div",2),n.Nb(83,"i",3),n.yc(84," Additional colors "),n.Rb(),n.Sb(85,"div",4),n.Sb(86,"div",5),n.Sb(87,"div",6),n.Nb(88,"div",25),n.Sb(89,"h6"),n.yc(90,"Blue Color"),n.Rb(),n.Rb(),n.Sb(91,"div",6),n.Nb(92,"div",26),n.Sb(93,"h6"),n.yc(94,"Light Blue Color"),n.Rb(),n.Rb(),n.Sb(95,"div",6),n.Nb(96,"div",27),n.Sb(97,"h6"),n.yc(98,"Indigo Color"),n.Rb(),n.Rb(),n.Sb(99,"div",6),n.Nb(100,"div",28),n.Sb(101,"h6"),n.yc(102,"Purple Color"),n.Rb(),n.Rb(),n.Sb(103,"div",6),n.Nb(104,"div",29),n.Sb(105,"h6"),n.yc(106,"Pink Color"),n.Rb(),n.Rb(),n.Sb(107,"div",6),n.Nb(108,"div",30),n.Sb(109,"h6"),n.yc(110,"Red Color"),n.Rb(),n.Rb(),n.Sb(111,"div",6),n.Nb(112,"div",31),n.Sb(113,"h6"),n.yc(114,"Orange Color"),n.Rb(),n.Rb(),n.Sb(115,"div",6),n.Nb(116,"div",32),n.Sb(117,"h6"),n.yc(118,"Yellow Color"),n.Rb(),n.Rb(),n.Sb(119,"div",6),n.Nb(120,"div",33),n.Sb(121,"h6"),n.yc(122,"Green Color"),n.Rb(),n.Rb(),n.Sb(123,"div",6),n.Nb(124,"div",34),n.Sb(125,"h6"),n.yc(126,"Teal Color"),n.Rb(),n.Rb(),n.Sb(127,"div",6),n.Nb(128,"div",35),n.Sb(129,"h6"),n.yc(130,"Cyan Color"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb())},encapsulation:2}),b})(),data:{title:"Colors"}},{path:"typography",component:(()=>{class b{constructor(){}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=n.Gb({type:b,selectors:[["ng-component"]],decls:189,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table"],[1,"highlighter-rouge"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],[1,"bd-example"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(b,e){1&b&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.yc(3," Headings "),n.Rb(),n.Sb(4,"div",3),n.Sb(5,"p"),n.yc(6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),n.Rb(),n.Sb(7,"table",4),n.Sb(8,"thead"),n.Sb(9,"tr"),n.Sb(10,"th"),n.yc(11,"Heading"),n.Rb(),n.Sb(12,"th"),n.yc(13,"Example"),n.Rb(),n.Rb(),n.Rb(),n.Sb(14,"tbody"),n.Sb(15,"tr"),n.Sb(16,"td"),n.Sb(17,"p"),n.Sb(18,"code",5),n.yc(19,"<h1></h1>"),n.Rb(),n.Rb(),n.Rb(),n.Sb(20,"td"),n.Sb(21,"span",6),n.yc(22,"h1. Bootstrap heading"),n.Rb(),n.Rb(),n.Rb(),n.Sb(23,"tr"),n.Sb(24,"td"),n.Sb(25,"p"),n.Sb(26,"code",5),n.yc(27,"<h2></h2>"),n.Rb(),n.Rb(),n.Rb(),n.Sb(28,"td"),n.Sb(29,"span",7),n.yc(30,"h2. Bootstrap heading"),n.Rb(),n.Rb(),n.Rb(),n.Sb(31,"tr"),n.Sb(32,"td"),n.Sb(33,"p"),n.Sb(34,"code",5),n.yc(35,"<h3></h3>"),n.Rb(),n.Rb(),n.Rb(),n.Sb(36,"td"),n.Sb(37,"span",8),n.yc(38,"h3. Bootstrap heading"),n.Rb(),n.Rb(),n.Rb(),n.Sb(39,"tr"),n.Sb(40,"td"),n.Sb(41,"p"),n.Sb(42,"code",5),n.yc(43,"<h4></h4>"),n.Rb(),n.Rb(),n.Rb(),n.Sb(44,"td"),n.Sb(45,"span",9),n.yc(46,"h4. Bootstrap heading"),n.Rb(),n.Rb(),n.Rb(),n.Sb(47,"tr"),n.Sb(48,"td"),n.Sb(49,"p"),n.Sb(50,"code",5),n.yc(51,"<h5></h5>"),n.Rb(),n.Rb(),n.Rb(),n.Sb(52,"td"),n.Sb(53,"span",10),n.yc(54,"h5. Bootstrap heading"),n.Rb(),n.Rb(),n.Rb(),n.Sb(55,"tr"),n.Sb(56,"td"),n.Sb(57,"p"),n.Sb(58,"code",5),n.yc(59,"<h6></h6>"),n.Rb(),n.Rb(),n.Rb(),n.Sb(60,"td"),n.Sb(61,"span",11),n.yc(62,"h6. Bootstrap heading"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(63,"div",1),n.Sb(64,"div",2),n.yc(65," Headings "),n.Rb(),n.Sb(66,"div",3),n.Sb(67,"p"),n.Sb(68,"code",5),n.yc(69,".h1"),n.Rb(),n.yc(70," through "),n.Sb(71,"code",5),n.yc(72,".h6"),n.Rb(),n.yc(73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),n.Rb(),n.Sb(74,"div",12),n.Sb(75,"p",6),n.yc(76,"h1. Bootstrap heading"),n.Rb(),n.Sb(77,"p",7),n.yc(78,"h2. Bootstrap heading"),n.Rb(),n.Sb(79,"p",8),n.yc(80,"h3. Bootstrap heading"),n.Rb(),n.Sb(81,"p",9),n.yc(82,"h4. Bootstrap heading"),n.Rb(),n.Sb(83,"p",10),n.yc(84,"h5. Bootstrap heading"),n.Rb(),n.Sb(85,"p",11),n.yc(86,"h6. Bootstrap heading"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(87,"div",1),n.Sb(88,"div",2),n.yc(89," Display headings "),n.Rb(),n.Sb(90,"div",3),n.Sb(91,"p"),n.yc(92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),n.Sb(93,"strong"),n.yc(94,"display heading"),n.Rb(),n.yc(95,"\u2014a larger, slightly more opinionated heading style."),n.Rb(),n.Sb(96,"div",13),n.Sb(97,"table",4),n.Sb(98,"tbody"),n.Sb(99,"tr"),n.Sb(100,"td"),n.Sb(101,"span",14),n.yc(102,"Display 1"),n.Rb(),n.Rb(),n.Rb(),n.Sb(103,"tr"),n.Sb(104,"td"),n.Sb(105,"span",15),n.yc(106,"Display 2"),n.Rb(),n.Rb(),n.Rb(),n.Sb(107,"tr"),n.Sb(108,"td"),n.Sb(109,"span",16),n.yc(110,"Display 3"),n.Rb(),n.Rb(),n.Rb(),n.Sb(111,"tr"),n.Sb(112,"td"),n.Sb(113,"span",17),n.yc(114,"Display 4"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(115,"div",1),n.Sb(116,"div",2),n.yc(117," Inline text elements "),n.Rb(),n.Sb(118,"div",3),n.Sb(119,"p"),n.yc(120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),n.Sb(121,"strong"),n.yc(122,"display heading"),n.Rb(),n.yc(123,"\u2014a larger, slightly more opinionated heading style."),n.Rb(),n.Sb(124,"div",12),n.Sb(125,"p"),n.yc(126,"You can use the mark tag to "),n.Sb(127,"mark"),n.yc(128,"highlight"),n.Rb(),n.yc(129," text."),n.Rb(),n.Sb(130,"p"),n.Sb(131,"del"),n.yc(132,"This line of text is meant to be treated as deleted text."),n.Rb(),n.Rb(),n.Sb(133,"p"),n.Sb(134,"s"),n.yc(135,"This line of text is meant to be treated as no longer accurate."),n.Rb(),n.Rb(),n.Sb(136,"p"),n.Sb(137,"ins"),n.yc(138,"This line of text is meant to be treated as an addition to the document."),n.Rb(),n.Rb(),n.Sb(139,"p"),n.Sb(140,"u"),n.yc(141,"This line of text will render as underlined"),n.Rb(),n.Rb(),n.Sb(142,"p"),n.Sb(143,"small"),n.yc(144,"This line of text is meant to be treated as fine print."),n.Rb(),n.Rb(),n.Sb(145,"p"),n.Sb(146,"strong"),n.yc(147,"This line rendered as bold text."),n.Rb(),n.Rb(),n.Sb(148,"p"),n.Sb(149,"em"),n.yc(150,"This line rendered as italicized text."),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(151,"div",1),n.Sb(152,"div",2),n.yc(153," Description list alignment "),n.Rb(),n.Sb(154,"div",3),n.Sb(155,"p"),n.yc(156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),n.Sb(157,"code",5),n.yc(158,".text-truncate"),n.Rb(),n.yc(159," class to truncate the text with an ellipsis."),n.Rb(),n.Sb(160,"div",12),n.Sb(161,"dl",18),n.Sb(162,"dt",19),n.yc(163,"Description lists"),n.Rb(),n.Sb(164,"dd",20),n.yc(165,"A description list is perfect for defining terms."),n.Rb(),n.Sb(166,"dt",19),n.yc(167,"Euismod"),n.Rb(),n.Sb(168,"dd",20),n.Sb(169,"p"),n.yc(170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),n.Rb(),n.Sb(171,"p"),n.yc(172,"Donec id elit non mi porta gravida at eget metus."),n.Rb(),n.Rb(),n.Sb(173,"dt",19),n.yc(174,"Malesuada porta"),n.Rb(),n.Sb(175,"dd",20),n.yc(176,"Etiam porta sem malesuada magna mollis euismod."),n.Rb(),n.Sb(177,"dt",21),n.yc(178,"Truncated term is truncated"),n.Rb(),n.Sb(179,"dd",20),n.yc(180,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),n.Rb(),n.Sb(181,"dt",19),n.yc(182,"Nesting"),n.Rb(),n.Sb(183,"dd",20),n.Sb(184,"dl",18),n.Sb(185,"dt",22),n.yc(186,"Nested definition list"),n.Rb(),n.Sb(187,"dd",23),n.yc(188,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb())},encapsulation:2}),b})(),data:{title:"Typography"}}]}];let r=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.Kb({type:b}),b.\u0275inj=n.Jb({imports:[[t.g.forChild(a)],t.g]}),b})(),c=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.Kb({type:b}),b.\u0275inj=n.Jb({imports:[[o.c,r]]}),b})()}}]);