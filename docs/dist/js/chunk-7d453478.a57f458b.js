(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d453478"],{"163a":function(e,t,n){"use strict";var a=n("336e"),o=n.n(a);o.a},"244e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[e._v("公司基本信息管理")]),n("DataGrid",{staticStyle:{height:"100%"},attrs:{pagination:!0,total:e.total,pageSize:e.pageSize,pagePosition:e.pagePosition,data:e.companyTable},scopedSlots:e._u([{key:"detail",fn:function(t){return[n("div",[n("Row",{staticClass:"expand-row"},[n("i-col",{attrs:{span:"8"}},[n("span",{staticClass:"expand-key"},[e._v("注册资金: ")]),n("span",{staticClass:"expand-value"},[e._v(e._s(t.row.register_captial))])]),n("i-col",{attrs:{span:"8"}},[n("span",{staticClass:"expand-key"},[e._v("通讯地址: ")]),n("span",{staticClass:"expand-value"},[e._v(e._s(t.row.company_address))])]),n("i-col",{attrs:{span:"8"}},[n("span",{staticClass:"expand-key"},[e._v("开户银行: ")]),n("span",{staticClass:"expand-value"},[e._v(e._s(t.row.bank_name))])])],1),n("Row",[n("i-col",{attrs:{span:"8"}},[n("span",{staticClass:"expand-key"},[e._v("bank_account: ")]),n("span",{staticClass:"expand-value"},[e._v(e._s(t.row.bank_account))])]),n("i-col",{attrs:{span:"8"}},[n("span",{staticClass:"expand-key"},[e._v("银行账户: ")]),n("span",{staticClass:"expand-value"},[e._v(e._s(t.row.bank_account))])]),n("i-col",{attrs:{span:"8"}},[n("span",{staticClass:"expand-key"},[e._v("员工总数: ")]),n("span",{staticClass:"expand-value"},[e._v(e._s(t.row.total_employee))])])],1)],1)]}}])},[n("GridColumn",{attrs:{expander:!0,width:"30"}}),n("GridColumn",{attrs:{field:"company_num",title:"公司编号",width:"120px"}}),n("GridColumn",{attrs:{field:"company_name",title:"公司名称",width:"200px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("span",{directives:[{name:"Tooltip",rawName:"v-Tooltip",value:t.row.company_name,expression:"scope.row.company_name"}]},[e._v(e._s(t.row.company_name))])]}}])}),n("GridColumn",{attrs:{field:"company_nature",title:"公司性质",width:"120px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("span",{directives:[{name:"Tooltip",rawName:"v-Tooltip",value:t.row.company_nature,expression:"scope.row.company_nature"}]},[e._v(e._s(t.row.company_nature))])]}}])}),n("GridColumn",{attrs:{field:"company_website",title:"网址",width:"40px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("div",{staticClass:"item"},[n("a",{attrs:{href:t.row.company_website,target:"_blank"}},[e._v("链接")])])]}}])}),n("GridColumn",{attrs:{field:"organize_code",title:"组织机构代码",width:"170px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("span",{directives:[{name:"Tooltip",rawName:"v-Tooltip",value:t.row.organize_code,expression:"scope.row.organize_code"}]},[e._v(e._s(t.row.organize_code))])]}}])}),n("GridColumn",{attrs:{field:"license_code",title:"营业执照注册号",width:"170px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("span",{directives:[{name:"Tooltip",rawName:"v-Tooltip",value:t.row.license_code,expression:"scope.row.license_code"}]},[e._v(e._s(t.row.license_code))])]}}])}),n("GridColumn",{attrs:{field:"main_business",title:"主营业务",width:"170px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("span",{directives:[{name:"Tooltip",rawName:"v-Tooltip",value:t.row.main_business,expression:"scope.row.main_business"}]},[e._v(e._s(t.row.main_business))])]}}])}),n("GridColumn",{attrs:{field:"legal_representative",title:"法人",width:"50px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("span",{directives:[{name:"Tooltip",rawName:"v-Tooltip",value:t.row.legal_representative,expression:"scope.row.legal_representative"}]},[e._v(e._s(t.row.legal_representative))])]}}])}),n("GridColumn",{attrs:{field:"superior_company",title:"上级主管公司",width:"120px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("span",{directives:[{name:"Tooltip",rawName:"v-Tooltip",value:t.row.superior_company,expression:"scope.row.superior_company"}]},[e._v(e._s(t.row.superior_company))])]}}])}),n("GridColumn",{attrs:{title:"操作",width:"120px"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("LinkButton",{attrs:{iconCls:"icon-ok",toggle:!0},on:{click:function(n){e.confirmClick(t.row)}}},[e._v("确认")]),n("LinkButton",{attrs:{iconCls:"icon-cancel",toggle:!0,disabled:!0}},[e._v("删除")])]}}])})],1)],2)},o=[],i=(n("96cf"),n("3040")),s=n("c93e"),r=(n("cadf"),n("551c"),n("097d"),n("eb82")),c=n("2f62"),p=n("c276"),l={name:"provider-certificationmanagement-index6",data:function(){return{total:20,pageSize:10,pagePosition:"bottom",companyTable:[]}},created:function(){this.createCompanyTable()},mounted:function(){},computed:Object(s["a"])({},Object(c["e"])("d2admin/user",["info"])),methods:{createCompanyTable:function(e){var t=this;Object(r["b"])(JSON.stringify({user_id:p["a"].cookies.get("uuid"),flag:"0"})).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=n,t.companyTable=a;case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log("err: ",e)})},confirmClick:function(e){var t=e;t.flag="1",Object(r["c"])(t).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(e)}),this.createCompanyTable(),console.log(e)}}},u=l,d=(n("163a"),n("2877")),_=Object(d["a"])(u,a,o,!1,null,"cd2cf45a",null);_.options.__file="index6.vue";t["default"]=_.exports},"336e":function(e,t,n){},eb82:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return s});var a=n("9bd2");function o(e){return Object(a["a"])({url:"/provider/company/create",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/provider/company/retrieve",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/provider/company/update",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-7d453478.a57f458b.js.map