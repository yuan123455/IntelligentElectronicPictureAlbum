(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/createbusiness/createbusiness"],{"0059":function(n,t,i){"use strict";i.r(t);var o=i("13b7"),a=i.n(o);for(var e in o)"default"!==e&&function(n){i.d(t,n,(function(){return o[n]}))}(e);t["default"]=a.a},"04d5":function(n,t,i){"use strict";var o;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return e})),i.d(t,"a",(function(){return o}));var a=function(){var n=this,t=n.$createElement;n._self._c},e=[]},"13b7":function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i("6362"));function a(n){return n&&n.__esModule?n:{default:n}}var e={data:function(){return{region:["北京市","北京市","东城区"],name:"",company:"",phone:"",mposition:"",mail:"",joinpasswd:"",id:0,flag:!1}},methods:{create:function(){var t=o.default.getRSA("mpid=4");n.request({url:"http://pituan.gzcywx.com/mobile/mipianadmin/add_mp_do",data:{name:this.name,company:this.company,phone:this.phone,mposition:this.mposition,mail:this.mail,joinpasswd:this.joinpasswd,sign:t},method:"POST",success:function(n){console.log(n)}})},ph:function(){var t=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;""==this.phone?n.showToast({title:"请输入手机号后重试",icon:"none"}):t.test(this.phone)||(n.showToast({title:"请输入正确的手机号码",icon:"none"}),this.phone="")},mai:function(){var t=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;""==this.mail?n.showToast({title:"请输入邮箱后重试",icon:"none"}):t.test(this.mail)||(n.showToast({title:"请输入正确的邮箱",icon:"none"}),this.phone="")},getList:function(){var n=this;o.default.getData("mobile/mipianadmin/mplist","sign=0",getApp().globalData.key).then((function(t){var i=t.data.result;for(var o in i)if(i[o].id==n.id)return n.name=i[o].name,n.company=i[o].company,n.phone=i[o].phone,n.mposition=i[o].mposition,n.mail=i[o].mail,void(n.joinpasswd=i[o].joinpasswd)}))},save:function(){n.request({url:"https://pituan.gzcywx.com/mobile/mipianadmin/edit_mp_do",data:{name:this.name,company:this.company,phone:this.phone,mposition:this.mposition,mail:this.mail,joinpasswd:this.joinpasswd},method:"POST",success:function(n){console.log(n)}})}},onLoad:function(n){n.id&&(this.id=n.id,this.flag=!0,this.getList())}};t.default=e}).call(this,i("543d")["default"])},"2cf1":function(n,t,i){"use strict";(function(n){i("988a");o(i("66fd"));var t=o(i("4032"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,i("543d")["createPage"])},4032:function(n,t,i){"use strict";i.r(t);var o=i("04d5"),a=i("0059");for(var e in a)"default"!==e&&function(n){i.d(t,n,(function(){return a[n]}))}(e);i("944d");var s,u=i("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"2ab5db09",null,!1,o["a"],s);t["default"]=c.exports},"726f":function(n,t,i){},"944d":function(n,t,i){"use strict";var o=i("726f"),a=i.n(o);a.a}},[["2cf1","common/runtime","common/vendor"]]]);