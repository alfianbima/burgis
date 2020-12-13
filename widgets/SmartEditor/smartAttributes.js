// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/Evented dojo dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/on dojo/query dijit/registry jimu/filterUtils jimu/dijit/Filter jimu/BaseWidgetSetting".split(" "),function(t,u,v,q,l,e,w,n,x,y,A,z){return v([z,t],{_attrInspector:null,_fieldValidation:null,_feature:null,_fieldInfo:null,_gdbRequiredFields:null,_notEditableFields:null,_fieldNameToAlias:null,_fieldsWithRules:null,_attTable:null,_filterUtils:null,_mapLayer:null,OPERATORS:null,constructor:function(){this.inherited(arguments);
q.mixin(this,arguments[0]);String.prototype.endsWith||(String.prototype.endsWith=function(b,c){if(void 0===c||c>this.length)c=this.length;return this.substring(c-b.length,c)===b});this.useFieldName=!1;this._mapLayer=this._feature.getLayer();this._attTable=n("td.atiLabel",this._attrInspector.domNode);if(0<this._attTable.length){var a=this._attTable[0];a&&a.hasAttribute("data-fieldname")&&(this.useFieldName=!0)}this._processLayer();this._filterUtils=new y;this.OPERATORS=q.clone(this._filterUtils.OPERATORS);
void 0!==this._attTable&&null!==this._attTable&&this._bindEvents()},_processLayer:function(){this._gdbRequiredFields=[];this._notEditableFields=[];this._fieldsWithRules=[];l.forEach(this._fieldInfo,function(a){if(!0===this.useFieldName||!1===a.hasOwnProperty("label"))var b=a.fieldName;else b=a.label,0<=b.indexOf('\x3ca class\x3d"asteriskIndicator"\x3e *\x3c/a\x3e')&&(b=b.replace('\x3ca class\x3d"asteriskIndicator"\x3e *\x3c/a\x3e',""));!1===a.nullable&&!0===a.isEditable&&this._gdbRequiredFields.push(b);
!1!==a.isEditable&&!1!==a.isEditableSettingInWebmap||this._notEditableFields.push(b);this._fieldValidation&&this._fieldValidation.hasOwnProperty(a.fieldName)&&this._fieldsWithRules.push(b)},this)},toggleFields:function(a){a="undefined"!==typeof a&&null!==a?a:!0;if(void 0!==this._attTable&&null!==this._attTable&&void 0!==this._fieldValidation&&null!==this._fieldValidation&&void 0!==this._feature&&null!==this._feature){var b=null,c=[],d;l.forEach(this._fieldInfo,q.hitch(this,function(f){if(!0===this.useFieldName||
!1===f.hasOwnProperty("label"))var g=f.fieldName;else g=f.label,0<=g.indexOf('\x3ca class\x3d"asteriskIndicator"\x3e *\x3c/a\x3e')&&(g=g.replace('\x3ca class\x3d"asteriskIndicator"\x3e *\x3c/a\x3e',""));b=null;d=this.validateField(f.fieldName);b=d[1];if("Required"===b&&"esriFieldTypeDate"===f.type){var h=this._getDijitForField(f.fieldName);h&&1<h.length&&null===h[1].get("value")&&(d[2]=!1)}d[2]&&"esriFieldTypeDate"===f.type&&(h=this._getDijitForField(f.fieldName))&&1<h.length&&null===h[0].get("value")&&
(d[2]=!1);!1===d[2]&&c.push({fieldName:f.fieldName});!0===d[0]&&this.toggleFieldOnAttributeInspector(g,b,d[2],a)}));return c}},_getDijitForField:function(a){var b;l.some(this._attrInspector._currentLInfo.fieldInfos,q.hitch(this,function(c){if(c.fieldName===a)return b=c.dijit,!0}));return b},validateField:function(a){var b=null;if(this._fieldValidation.hasOwnProperty(a)){if(0===this._fieldValidation[a].length)return[!1,null,!0];var c=[!1,null,null];l.some(this._fieldValidation[a],function(d){if(void 0!==
d.filter&&null!==d.filter&&(b=d.filter,c=[!0,null,null],this.processFilter(b,this._feature)))return"Required"===d.actionName?!1===this._feature.attributes.hasOwnProperty(a)?(c=[!0,d.actionName,!1],!0):null===this._feature.attributes[a]||""===this._feature.attributes[a]?(c=[!0,d.actionName,!1],!0):this.myIsNaN(this._feature.attributes[a])?(c=[!0,d.actionName,!1],!0):(c=[!0,d.actionName,!0],!0):(c=[!0,d.actionName,null,d.submitWhenHidden],!0)},this);return c}return[!1,null,null]},_bindEvents:function(){void 0!==
this._attTable&&null!==this._attTable&&0<this._attTable.length&&l.forEach(this._attTable,function(a){a=this._getRowInfo(a);-1!==this._fieldsWithRules.indexOf(a[3])&&"dijit.form.FilteringSelect"===a[2].declaredClass&&w(a[2],"change",q.hitch(this,this._smartComboValidate()))},this)},process_relative_date:function(a,b,c){var d=new Date,f=this._isNumeric(b);if(void 0===a||null===a||""===a)return b;if(a==this.OPERATORS.dateOperatorMinutes&&!0===f)return d.setMinutes(d.getMinutes()-b);if(a==this.OPERATORS.dateOperatorHours&&
!0===f)return d.setHours(d.getHours()-b);if(a==this.OPERATORS.dateOperatorDays&&!0===f)return d.setDate(d.getDate()-b);if(a==this.OPERATORS.dateOperatorWeeks&&!0===f)return d.setDate(d.getDate()-7*b);if(a==this.OPERATORS.dateOperatorMonths&&!0===f)return d.setMonth(d.getMonth()-b);if(a==this.OPERATORS.dateOperatorYears&&!0===f)return d.setFullYear(d.getFullYear()-b);if("today"==a.toLowerCase())return(new Date(d.setDate(d.getDate()))).setHours(23,59,59,999);if("tomorrow"==a.toLowerCase())return(new Date(d.setDate(d.getDate()+
1))).setHours(23,59,59,999);if("yesterday"==a.toLowerCase())return(new Date(d.setDate(d.getDate()-1))).setHours(23,59,59,999);if("thisweek"==a.toLowerCase()){var g=(new Date(d.setDate(d.getDate()-d.getDay()))).setHours(0,0,0,0),h=(new Date(d.setDate(d.getDate()-d.getDay()+6))).setHours(23,59,59,999);return!0===c?g:h}if("thismonth"==a.toLowerCase())return g=(new Date(d.getFullYear(),d.getMonth(),1)).getTime(),h=(new Date(d.getFullYear(),d.getMonth()+1,0)).setHours(23,59,59,999),!0===c?g:h;if("thisquarter"==
a.toLowerCase()){a=new Date(d.getTime());var k=a.getFullYear();a.setHours(0,0,0,0);b=(new Date(k,2,31)).setHours(23,59,59,999);f=(new Date(k,5,30)).setHours(23,59,59,999);var m=(new Date(k,8,30)).setHours(23,59,59,999);k=(new Date(k,11,31)).setHours(23,59,59,999);a<=b&&(g=(new Date(d.getFullYear(),0,1)).getTime(),h=f);a<=f&&(g=b,h=f);a<=m&&(g=f,h=m);a<=k&&(g=m,h=k);return!0===c?g:h}return"thisyear"==a.toLowerCase()?(h=(new Date(d.getFullYear(),11,31)).setHours(23,59,59,999),g=(new Date(d.getFullYear(),
0,1)).getTime(),!0===c?g:h):b},process_part:function(a){var b=null,c=null,d=null,f=null,g=null,h=null;a.valueObj.hasOwnProperty("value")&&(b=void 0===a.valueObj.virtualDate||null===a.valueObj.virtualDate?null:a.valueObj.virtualDate,g=void 0===a.valueObj.range||null===a.valueObj.range?null:a.valueObj.range,c=a.valueObj.value);a.valueObj.hasOwnProperty("value1")&&(b=void 0===a.valueObj.virtualDate1||null===a.valueObj.virtualDate1?null:a.valueObj.virtualDate1,null===b&&(b=void 0===a.valueObj.virtualDate||
null===a.valueObj.virtualDate?null:a.valueObj.virtualDate),g=void 0===a.valueObj.range1||null===a.valueObj.range1?null:a.valueObj.range1,c=a.valueObj.value1);a.valueObj.hasOwnProperty("value2")&&(d=void 0===a.valueObj.virtualDate2||null===a.valueObj.virtualDate2?null:a.valueObj.virtualDate2,null===d&&(d=void 0===a.valueObj.virtualDate||null===a.valueObj.virtualDate?null:a.valueObj.virtualDate),h=void 0===a.valueObj.range2||null===a.valueObj.range2?null:a.valueObj.range2,f=a.valueObj.value2);"esriFieldTypeDate"==
a.fieldObj.type&&(a.operator==this.OPERATORS.dateOperatorInTheLast?(null!==g&&(c=this.process_relative_date(g,c)),null!==h&&(f=this.process_relative_date(h,f))):a.operator==this.OPERATORS.dateOperatorNotInTheLast?(null!==g&&(c=this.process_relative_date(g,c)),null!==h&&(f=this.process_relative_date(h,f))):a.operator==this.OPERATORS.dateOperatorIsIn?(c=this.process_relative_date(b,c,!0),f=this.process_relative_date(d,f,!1)):a.operator==this.OPERATORS.dateOperatorIsNotIn?(c=this.process_relative_date(b,
c,!0),f=this.process_relative_date(d,f,!1)):(null!==b&&(c=this.process_relative_date(b,c,!1)),null!==d&&(f=this.process_relative_date(d,f,!1))));return[c,f]},processFilter:function(a){var b=[];l.forEach(a.parts,function(c){if(c.hasOwnProperty("parts"))b.push(this.processFilter(c,this._feature));else{var d=this.process_part(c),f=d[0];d=d[1];switch(c.valueObj.type){case "value":b.push(this.validatePart(c.operator,this._feature.attributes[c.fieldObj.name],f,d,c.caseSensitive));break;case "unique":b.push(this.validatePart(c.operator,
this._feature.attributes[c.fieldObj.name],f,d,c.caseSensitive));break;case "field":this._feature.attributes.hasOwnProperty(f)&&(f=this._feature.attributes[f]),b.push(this.validatePart(c.operator,this._feature.attributes[c.fieldObj.name],f,d,c.caseSensitive))}}},this);return this.ruleValid(b,a.logicalOperator)},ruleValid:function(a,b){var c=!1;if(void 0===b||null===b)b="OR";l.some(a,function(d){if("OR"===b){if(!0===d)return c=!0;c=!1}else{if(!1===d)return c=!1,!0;c=!0}});return c},myIsNaN:function(a){return a!==
a},_isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},validatePart:function(a,b,c,d,f){var g=null;if(void 0===a||null===a)return!1;0===a.lastIndexOf("string",0)?!1===f&&(void 0!==b&&null!==b&&(b=String(b).toUpperCase()),void 0!==c&&null!==c&&(c=String(c).toUpperCase()),void 0!==d&&null!==d&&(d=String(d).toUpperCase())):0===a.lastIndexOf("date",0)&&(void 0!==c&&null!==c&&(c=new Date(c)),void 0!==d&&null!==d&&(d=new Date(d)));switch(a){case this.OPERATORS.stringOperatorIs:if(b===c)return!0;
break;case this.OPERATORS.stringOperatorIsNot:if(b!==c)return!0;break;case this.OPERATORS.stringOperatorStartsWith:if(null===b&&null===c)return!0;if(null===b&&null!==c)break;if(null!==b&&null===c)break;if(0===b.lastIndexOf(c,0))return!0;break;case this.OPERATORS.stringOperatorEndsWith:if(null===b&&null===c)return!0;if(null===b&&null!==c)break;if(null!==b&&null===c)break;return b.endsWith(c);case this.OPERATORS.stringOperatorContains:if(null===b&&null===c)return!0;if(null===b&&null!==c)break;if(null!==
b&&null===c)break;if(0<=String(b).toUpperCase().indexOf(c.toUpperCase()))return!0;break;case this.OPERATORS.stringOperatorDoesNotContain:if(null===b&&null===c)break;if(null===b&&null!==c||null!==b&&null===c||!(0<=String(b).toUpperCase().indexOf(c.toUpperCase())))return!0;break;case this.OPERATORS.stringOperatorIsBlank:return void 0===b||null===b||""===b;case this.OPERATORS.stringOperatorIsNotBlank:return void 0!==b&&null!==b&&""!==b;case this.OPERATORS.numberOperatorIs:if(this._isNumeric(b))return String(b)===
String(c);break;case this.OPERATORS.numberOperatorIsNot:if(this._isNumeric(b))return String(b)!==String(c);break;case this.OPERATORS.numberOperatorIsAtLeast:if(this._isNumeric(b)&&this._isNumeric(c))return Number(b)>=Number(c);break;case this.OPERATORS.numberOperatorIsLessThan:if(this._isNumeric(b)&&this._isNumeric(c))return Number(b)<Number(c);break;case this.OPERATORS.numberOperatorIsAtMost:if(this._isNumeric(b)&&this._isNumeric(c))return Number(b)<=Number(c);break;case this.OPERATORS.numberOperatorIsGreaterThan:if(this._isNumeric(b)&&
this._isNumeric(c))return Number(b)>Number(c);break;case this.OPERATORS.numberOperatorIsBetween:if(this._isNumeric(b)&&this._isNumeric(c)&&this._isNumeric(d))return Number(b)>Number(c)&&Number(b)<Number(d);break;case this.OPERATORS.numberOperatorIsNotBetween:if(this._isNumeric(b)&&this._isNumeric(c)&&this._isNumeric(d))return Number(b)<=Number(c)||Number(b)>=Number(d);break;case this.OPERATORS.numberOperatorIsBlank:if(null===b||void 0===b||!1===this._isNumeric(b))return!0;break;case this.OPERATORS.numberOperatorIsNotBlank:if(null!==
b&&void 0!==b&&!0===this._isNumeric(b))return!0;break;case this.OPERATORS.dateOperatorIsOn:if(void 0===b||null===b)break;if(void 0===c||null===c)break;g=new Date(b);return c.toDateString()===g.toDateString();case this.OPERATORS.dateOperatorIsNotOn:if(void 0===b||null===b)break;if(void 0===c||null===c)break;g=new Date(b);return c.toDateString()!==g.toDateString();case this.OPERATORS.dateOperatorIsBefore:if(null===b||void 0===b)break;if(void 0===c||null===c)break;return b<c.getTime();case this.OPERATORS.dateOperatorIsAfter:if(null===
b||void 0===b)break;if(void 0===c||null===c)break;return b>c.getTime();case this.OPERATORS.dateOperatorIsOnOrBefore:if(null===b||void 0===b)break;if(void 0===c||null===c)break;return b<=c.getTime();case this.OPERATORS.dateOperatorIsOnOrAfter:if(null===b||void 0===b)break;if(void 0===c||null===c)break;return b>=c.getTime();case this.OPERATORS.dateOperatorInTheLast:if(null===b||void 0===b)break;if(void 0===c||null===c)break;return b>c.getTime()&&b<=(new Date).getTime();case this.OPERATORS.dateOperatorNotInTheLast:if(null===
b||void 0===b)break;if(void 0===c||null===c)break;return b<=c.getTime()||b>=(new Date).getTime();case this.OPERATORS.dateOperatorIsIn:if(null===b||void 0===b)break;if(void 0===c||null===c)break;if(void 0===d||null===d)break;return b>=c.getTime()&&b<=d.getTime();case this.OPERATORS.dateOperatorIsNotIn:if(null===b||void 0===b)break;if(void 0===c||null===c)break;if(void 0===d||null===d)break;return b<c.getTime()||b>d.getTime();case this.OPERATORS.dateOperatorIsBetween:if(null===b||void 0===b)break;if(void 0===
c||null===c)break;if(void 0===d||null===d)break;return b>=c.getTime()&&b<=d.getTime();case this.OPERATORS.dateOperatorIsNotBetween:if(null===b||void 0===b)break;if(void 0===c||null===c)break;if(void 0===d||null===d)break;return b<c.getTime()||b>d.getTime();case this.OPERATORS.dateOperatorIsBlank:if(null===b||void 0===b)return!0;break;case this.OPERATORS.dateOperatorIsNotBlank:if(null!==b&&void 0!==b)return!0}return!1},_processChildNodes:function(a,b){a.disabled=b;!0===b?a.style&&(a.style.pointerEvents=
"none"):a.style&&(a.style.pointerEvents="auto");l.forEach(a.childNodes,function(c){c.disabled=b;!0===b?c.style&&(c.style.pointerEvents="none"):c.style&&(c.style.pointerEvents="auto");0<c.childNodes.length&&this._processChildNodes(c,b)},this)},_smartComboValidate:function(){this.toggleFields()},_getRowInfo:function(a){var b=a.parentNode.childNodes[1].childNodes[0],c=null,d=null;1<a.parentNode.childNodes[1].childNodes.length&&(c=a.parentNode.childNodes[1].childNodes[1],e.contains(c,"esriCTValuePickerButton")&&
(d=a.parentNode.childNodes[1].childNodes[1],c=null),3===a.parentNode.childNodes[1].childNodes.length&&(d=a.parentNode.childNodes[1].childNodes[2]));var f=!0===this.useFieldName?a.hasAttribute("data-fieldname")?a.getAttribute("data-fieldname"):a.childNodes[0].data:a.childNodes[0].data;a=a.parentNode;var g=x.getEnclosingWidget(b);return[b,a,g,f,c,d]},_removeRequireFieldMarkings:function(a,b,c){var d=null;void 0===c||null===c?(e.contains(a,"dijitComboBoxError")&&e.remove(a,"dijitComboBoxError"),e.contains(a,
"dijitTextBoxError")&&e.remove(a,"dijitTextBoxError"),e.contains(a,"dijitValidationTextBox")&&e.remove(a,"dijitValidationTextBox"),e.contains(a,"dijitValidationTextBoxError")&&e.remove(a,"dijitValidationTextBoxError"),e.contains(a,"dijitError")&&e.remove(a,"dijitError"),d=n(".dijitValidationContainer",b),l.forEach(d,function(f){f.parentNode.removeChild(f)})):(d=q.isFunction(c.isValid)?c.isValid():!0,"dijit.form.TextBox"===c.declaredClass&&!0===d?(e.contains(a,"dijitTextBoxError")&&e.remove(a,"dijitTextBoxError"),
e.contains(a,"dijitValidationTextBox")&&e.remove(a,"dijitValidationTextBox"),e.contains(a,"dijitValidationTextBoxError")&&e.remove(a,"dijitValidationTextBoxError"),e.contains(a,"dijitError")&&e.remove(a,"dijitError"),d=n(".dijitValidationContainer",b),l.forEach(d,function(f){f.parentNode.removeChild(f)})):"dijit.form.ValidationTextBox"===c.declaredClass&&!0===d?(e.contains(a,"dijitTextBoxError")&&e.remove(a,"dijitTextBoxError"),e.contains(a,"dijitTextBoxDisabled")&&e.remove(a,"dijitTextBoxDisabled"),
e.contains(a,"dijitValidationTextBoxError")&&e.remove(a,"dijitValidationTextBoxError"),e.contains(a,"dijitError")&&e.remove(a,"dijitError")):"dijit.form.DateTextBox"===c.declaredClass&&!0===d?(e.contains(a,"dijitTextBoxError")&&e.remove(a,"dijitTextBoxError"),e.contains(a,"dijitValidationTextBox")&&e.remove(a,"dijitValidationTextBox"),e.contains(a,"dijitValidationTextBoxError")&&e.remove(a,"dijitValidationTextBoxError"),e.contains(a,"dijitError")&&e.remove(a,"dijitError"),d=n(".dijitValidationContainer",
b),l.forEach(d,function(f){f.parentNode.removeChild(f)})):"dijit.form.TimeTextBox"===c.declaredClass&&!0===d?(e.contains(a,"dijitTextBoxError")&&e.remove(a,"dijitTextBoxError"),e.contains(a,"dijitValidationTextBox")&&e.remove(a,"dijitValidationTextBox"),e.contains(a,"dijitValidationTextBoxError")&&e.remove(a,"dijitValidationTextBoxError"),e.contains(a,"dijitError")&&e.remove(a,"dijitError"),d=n(".dijitValidationContainer",b),l.forEach(d,function(f){f.parentNode.removeChild(f)})):"dijit.form.FilteringSelect"===
c.declaredClass&&!0===d?(e.contains(a,"dijitTextBoxError")&&e.remove(a,"dijitTextBoxError"),e.contains(a,"dijitComboBoxError")&&e.remove(a,"dijitComboBoxError"),e.contains(a,"dijitError")&&e.remove(a,"dijitError"),e.contains(a,"dijitValidationTextBoxError")&&e.remove(a,"dijitValidationTextBoxError")):!0===d&&(e.contains(a,"dijitComboBoxError")&&e.remove(a,"dijitComboBoxError"),e.contains(a,"dijitTextBoxError")&&e.remove(a,"dijitTextBoxError"),e.contains(a,"dijitValidationTextBox")&&e.remove(a,"dijitValidationTextBox"),
e.contains(a,"dijitValidationTextBoxError")&&e.remove(a,"dijitValidationTextBoxError"),e.contains(a,"dijitError")&&e.remove(a,"dijitError"),d=n(".dijitValidationContainer",b),l.forEach(d,function(f){f.parentNode.removeChild(f)})))},_removeRedAst:function(a,b){-1===this._gdbRequiredFields.indexOf(b)&&(a=n("a.asteriskIndicator",a),0<a.length&&l.forEach(a,function(c){c.parentNode.removeChild(c)}))},_removeHideRule:function(a){e.contains(a,"hideField")&&e.remove(a,"hideField")},_removeDisableRule:function(a,
b){-1===this._notEditableFields.indexOf(a)&&(e.contains(b,"dijitTextBoxDisabled")&&e.remove(b,"dijitTextBoxDisabled"),e.contains(b,"dijitComboBoxDisabled")&&e.remove(b,"dijitComboBoxDisabled"),e.contains(b,"dijitValidationTextBoxDisabled")&&e.remove(b,"dijitValidationTextBoxDisabled"),e.contains(b,"dijitDisabled")&&e.remove(b,"dijitDisabled"));this._processChildNodes(b,!1)},_remove:function(a,b,c,d,f){this._removeRequireFieldMarkings(c,d,f);this._removeRedAst(a[0],b);this._removeDisableRule(b,c);
this._removeHideRule(d)},toggleFieldOnAttributeInspector:function(a,b,c,d){d="undefined"!==typeof d&&null!==d?d:!0;if(void 0===this._gdbRequiredFields||null===this._gdbRequiredFields)this._gdbRequiredFields=[];if(void 0===this._notEditableFields||null===this._notEditableFields)this._notEditableFields=[];if(void 0!==this._attTable&&null!==this._attTable){if(0<this._attTable.length){var f=u.filter(this._attTable,q.hitch(this,function(r){return r.childNodes&&0<r.childNodes.length?!0===this.useFieldName?
r.hasAttribute("data-fieldname")?r.getAttribute("data-fieldname")===a:r.childNodes[0].data===a:r.childNodes[0].data===a:!1})),g=null;if(null!==f&&0<f.length){var h=this._getRowInfo(f[0]),k=h[0];g=h[4];var m=h[5],p=h[1];h=h[2];if(void 0!==h&&null!==h)switch(b){case "Hide":this._removeRequireFieldMarkings(k,p,h);this._removeRedAst(f[0],a);this._removeDisableRule(a,k);g&&this._removeDisableRule(a,g);m&&e.remove(m,"disabled");e.add(p,"hideField");break;case "Disabled":this._removeRedAst(f[0],a);this._removeHideRule(p);
this._removeRequireFieldMarkings(k,p,h);e.add(k,["dijitValidationTextBox","dijitTextBoxDisabled","dijitComboBoxDisabled","dijitValidationTextBoxDisabled","dijitDisabled"]);this._processChildNodes(k,!0);null!==g&&(this._removeRequireFieldMarkings(g,p,h),e.add(g,["dijitValidationTextBox","dijitTextBoxDisabled","dijitComboBoxDisabled","dijitValidationTextBoxDisabled","dijitDisabled"]),this._processChildNodes(g,!0));m&&e.add(m,"disabled");break;case "Required":this._removeDisableRule(a,k);g&&this._removeDisableRule(a,
g);m&&e.remove(m,"disabled");this._removeHideRule(p);!0===c?(this._removeRequireFieldMarkings(k,p,h),g&&e.contains(g,"dijitTextBoxError","dijitError")&&e.remove(g,"dijitTextBoxError","dijitError")):"dijit.form.TextBox"===h.declaredClass?(g=n(".dijitValidationContainer",p),0===g.length&&(b=document.createElement("div"),b.setAttribute("class","dijitReset dijitValidationContainer"),c=document.createElement("input"),c.setAttribute("class","dijitReset dijitInputField dijitValidationIcon dijitValidationInner"),
c.setAttribute("value","x"),c.setAttribute("type","text"),c.setAttribute("tabindex","-1"),c.setAttribute("readonly","readonly"),c.setAttribute("role","presentation"),b.appendChild(c),k.insertBefore(b,k.childNodes[0])),e.add(k,["dijitTextBoxError","dijitValidationTextBox","dijitValidationTextBoxError","dijitError"])):"dijit.form.ValidationTextBox"===h.declaredClass?(g=n(".dijitValidationContainer",p),e.add(k,["dijitTextBoxError","dijitValidationTextBox","dijitValidationTextBoxError","dijitError"])):
"dijit.form.FilteringSelect"===h.declaredClass?e.add(k,["dijitTextBoxError","dijitComboBoxError","dijitError","dijitValidationTextBoxError"]):h.get("value")?(e.remove(k,"dijitTextBoxError","dijitError"),g&&e.add(g,["dijitTextBoxError","dijitError"])):e.add(k,["dijitTextBoxError","dijitError"]);k=n("a.asteriskIndicator",f[0]);b=n("span.atiRequiredField",f[0]);-1===this._gdbRequiredFields.indexOf(a)&&0===k.length&&0===b.length&&(k=document.createElement("a"),k.setAttribute("class","asteriskIndicator"),
k.innerHTML=" *",f[0].appendChild(k));break;case "Value":break;default:d&&(this._remove(f,a,k,p,h),m&&e.remove(m,"disabled"),g&&this._removeDisableRule(a,g))}}}this.emit("onFieldToggle")}}})});