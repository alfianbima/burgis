// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_SingleFilter.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"settings-container"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"fieldsSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" data-dojo-props\x3d\'searchAttr:"displayName",required:true,intermediateChanges:true\' class\x3d"fields-select dijit-form-FilteringSelect"\x3e\x3c/div\x3e\r\n    \x3cselect data-dojo-attach-point\x3d"operatorsSelect" data-dojo-type\x3d"dijit/form/Select" class\x3d"operator-select dijit-form-Select restrict-select-width"\x3e\r\n      \x3coption value\x3d"none"\x3e${nls.none}\x3c/option\x3e\r\n    \x3c/select\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"attributeValueContainer" class\x3d"attribute-value-container"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"valueProviderContainer" class\x3d"value-provider-container"\x3e\x3c/div\x3e\r\n      \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"valueTypeSetNode" title\x3d"${nls.setInputType}" class\x3d"value-type-set jimu-icon jimu-icon-setting"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv role\x3d"button" tabindex\x3d"0" aria-label\x3d"\'${nls.deleteText}\'" class\x3d"jimu-icon jimu-icon-delete" data-dojo-attach-point\x3d"btnDelete"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"askvalues"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"cbxAskValues" label\x3d"${nls.askForValues}" class\x3d"jimu-trailing-margin6"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"cbxCaseSensitive" label\x3d"${nls.caseSensitive}" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"promptSection" class\x3d"prompt"\x3e\r\n    \x3ctable data-dojo-attach-point\x3d"promptTable" cellpadding\x3d"0" cellspacing\x3d"0" class\x3d"prompt-table" style\x3d"width:100%;"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cspan\x3e${nls.prompt}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second-td"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"promptTB" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true" style\x3d"width:257px;" class\x3d"dijit-form-ValidationTextBox" \x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cspan\x3e${nls.hint}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second-td"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"hintTB" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true" style\x3d"width:257px;" class\x3d"dijit-form-ValidationTextBox" \x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"relativeDatesTr" class\x3d"relative-start-date-tr"\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"startDateOptions"\x3e${nls.dateOptions}\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second-td"\x3e\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"custom_start_date" data-dojo-props\x3d\'title:"${nls.custom}"\'\x3e\x3c/div\x3e\r\n              \x3cspan\x3e${nls.custom}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"today_start_date" data-dojo-props\x3d\'title:"${nls.today}"\'\x3e\x3c/div\x3e\r\n              \x3cspan\x3e${nls.today}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"yesterday_start_date" data-dojo-props\x3d\'title:"${nls.yesterday}"\'\x3e\x3c/div\x3e\r\n              \x3cspan\x3e${nls.yesterday}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"tomorrow_start_date" data-dojo-props\x3d\'title:"${nls.tomorrow}"\'\x3e\x3c/div\x3e\r\n              \x3cspan\x3e${nls.tomorrow}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"relativeDatesTr" class\x3d"relative-end-date-tr"\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"endDateOptions"\x3e${nls.endDateOptions}\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second-td"\x3e\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"custom_end_date" data-dojo-props\x3d\'title:"${nls.custom}"\'\x3e\x3c/div\x3e\r\n              \x3cspan\x3e${nls.custom}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"today_end_date" data-dojo-props\x3d\'title:"${nls.today}"\'\x3e\x3c/div\x3e\r\n              \x3cspan\x3e${nls.today}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"yesterday_end_date" data-dojo-props\x3d\'title:"${nls.yesterday}"\'\x3e\x3c/div\x3e\r\n              \x3cspan\x3e${nls.yesterday}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"tomorrow_end_date" data-dojo-props\x3d\'title:"${nls.tomorrow}"\'\x3e\x3c/div\x3e\r\n              \x3cspan\x3e${nls.tomorrow}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"cascadeTr" class\x3d"cascade-tr"\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cdiv style\x3d"margin-bottom:5px;"\x3e${nls.listValues}:\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second-td"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"cascadeSelect" class\x3d"cascade-select restrict-select-width" style\x3d"width:100%;"\x3e\r\n              \x3coption value\x3d"none"\x3e${nls.noneCascadeFilterTip}\x3c/option\x3e\r\n              \x3coption value\x3d"previous"\x3e${nls.previousCascadeFilterTip}\x3c/option\x3e\r\n              \x3coption value\x3d"all"\x3e${nls.allCascadeFilterTip}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/_SingleFilter.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/keys dijit/a11yclick dijit/focus dojo/query dojo/store/Memory jimu/utils jimu/filterUtils dijit/Tooltip dojo/mouse jimu/dijit/_filter/ValueProviderFactory dijit/popup jimu/dijit/CheckBox dijit/form/Select dijit/form/FilteringSelect dijit/form/ValidationTextBox".split(" "),function(y,z,w,
A,B,C,f,d,p,h,k,x,r,l,D,m,q,v,E,t,u){return z([w,A,B,y],{templateString:C,baseClass:"jimu-single-filter",declaredClass:"jimu.dijit._SingleFilter",nls:null,url:null,layerInfo:null,popupFieldsInfo:[],stringFieldType:"",dateFieldType:"",numberFieldTypes:[],supportFieldTypes:[],part:null,OPERATORS:null,enableAskForValues:!1,isHosted:!1,valueProviderFactory:null,valueProvider:null,dateOptionsObj:{status:!1},allDates:[q.VIRTUAL_DATE_CUSTOM,q.VIRTUAL_DATE_TODAY,q.VIRTUAL_DATE_YESTERDAY,q.VIRTUAL_DATE_TOMORROW],
runtime:!1,widgetId:"",postMixInProperties:function(){this.supportFieldTypes=[];this.supportFieldTypes.push(this.stringFieldType);this.supportFieldTypes.push(this.dateFieldType);this.supportFieldTypes=this.supportFieldTypes.concat(this.numberFieldTypes);this.nls=window.jimuNls.filterBuilder;this.nls.deleteText=window.jimuNls.common.deleteText},postCreate:function(){this.inherited(arguments);this._initSelf();this.own(h(this.valueTypeSetNode,x,f.hitch(this,this._onValueTypeSetClick)));this.own(h(this.btnDelete,
x,f.hitch(this,function(){this._destroySelf()})));this.own(h(document,"click",f.hitch(this,function(a){a=a.target;d.isDescendant(a,this.valueTypePopupNode)&&!d.hasClass(a,"value-type-popup-icon")||this._closeEsriPopup()})));this.customDijit&&this.own(h(window,"resize",f.hitch(this,function(){this._closeEsriPopup()})))},toJson:function(){var a={fieldObj:"",operator:"",valueObj:"",interactiveObj:"",caseSensitive:!1},b=this._getFieldObjByUI();if(!b)return null;a.fieldObj=b;b=this._getOperatorByUI();
if(!b)return null;a.operator=b;a.caseSensitive=this.cbxCaseSensitive.getStatus()&&this.cbxCaseSensitive.getValue();b=this._getValueTypeByUI();var c=this._isUseAskForValues();if(c){if(!this.promptTB.validate())return this._showValidationErrorTip(this.promptTB),null;a.interactiveObj={prompt:m.sanitizeHTML(this.promptTB.get("value")),hint:m.sanitizeHTML(this.hintTB.get("value")),cascade:"none"};this.dateOptionsObj.status&&(1===this.dateOptionsObj.num?a.interactiveObj.virtualDates=this._getRelativeDatesByUI("start"):
(a.interactiveObj.virtualDates1=this._getRelativeDatesByUI("start"),a.interactiveObj.virtualDates2=this._getRelativeDatesByUI("end")));if("unique"===b||"multiple"===b)a.interactiveObj.cascade=this.cascadeSelect.get("value")}a.valueObj={isValid:!0,type:""};c=c?this.valueProvider.tryGetValueObject():this.valueProvider.getValueObject();if(!c)return null;c.type=b;a.valueObj=c;return a},_getRelativeDatesByUI:function(a){var b=[];p.forEach(this.allDates,function(c){this[c+"_"+a+"_date"].checked&&b.push(c)},
this);return b},_removeRelativeDateChangeEvents:function(){p.forEach(this.allDates,function(a){var b=this[a+"_start_date"];b.changeEvent&&b.changeEvent.remove();2===this.dateOptionsObj.num&&(a=this[a+"_end_date"],a.changeEvent&&a.changeEvent.remove())},this)},_getFieldObjByUI:function(){var a=this._getSelectedFilteringItem(this.fieldsSelect);if(!a)return null;var b="";0!==this.popupFieldsInfo.length&&(b=m.getDateFieldFormatByFieldName(this.popupFieldsInfo,a.name));return{name:a.name,label:a.name,
dateFormat:b,shortType:a.shortType,type:a.type}},_getOperatorByUI:function(){var a=this.operatorsSelect.get("value");"none"===a&&(a=null);return a},showDelteIcon:function(){d.setStyle(this.btnDelete,"display","inline-block")},hideDeleteIcon:function(){d.setStyle(this.btnDelete,"display","none")},_showCaseSensitive:function(){d.setStyle(this.cbxCaseSensitive.domNode,"display","inline-block")},_hideCaseSensitive:function(){d.setStyle(this.cbxCaseSensitive.domNode,"display","none")},_showAndEnableCaseSensitive:function(){this.cbxCaseSensitive.setStatus(!0);
this._showCaseSensitive()},_hideAndDisableCaseSensitive:function(){this.cbxCaseSensitive.setStatus(!1);this._hideCaseSensitive()},_initSelf:function(){this.isHosted&&(this.cbxCaseSensitive.setValue(!1),this.cbxCaseSensitive.setStatus(!1),this.cbxCaseSensitive.domNode.title=this.nls.notSupportCaseSensitiveTip);this.own(h(this.fieldsSelect,"MouseEnter",f.hitch(this,this._updateFieldsSelectTitle)));this.own(h(this.operatorsSelect,"MouseEnter",f.hitch(this,this._updateOperatorsSelectTitle)));this.enableAskForValues?
(d.setStyle(this.cbxAskValues.domNode,"display","inline-block"),d.setStyle(this.promptSection,"display","block"),this.own(h(this.cbxAskValues,"status-change",f.hitch(this,this._onCbxAskValuesStatusChanged))),this.cbxAskValues.onChange=f.hitch(this,this._onCbxAskValuesClicked)):(d.setStyle(this.cbxAskValues.domNode,"display","none"),d.setStyle(this.promptSection,"display","none"));var a=this.layerInfo.fields;a&&0<a.length&&(a=p.filter(a,f.hitch(this,function(b){return 0<=this.supportFieldTypes.indexOf(b.type)})),
0<a.length&&(this._initValueTypeUI(),this._enableAllValueTypeOptions(),this._initFieldsSelect(a),this.part?this._showPart(this.part):this._resetByFieldAndOperator(),setTimeout(f.hitch(this,function(){this._bindFieldsSelectChangeAndOperatorChangeEvents()}),10)))},_bindFieldsSelectChangeAndOperatorChangeEvents:function(){this._removeFieldsSelectChangeAndOperatorChangeEvents();this.fieldsSelect&&(this._handle1=h(this.fieldsSelect,"change",f.hitch(this,this._onFieldsSelectChange)));this.operatorsSelect&&
(this._handle2=h(this.operatorsSelect,"change",f.hitch(this,this._onOperatorsSelectChange)))},_removeFieldsSelectChangeAndOperatorChangeEvents:function(){this._handle1&&this._handle1.remove();this._handle2&&this._handle2.remove();this._handle2=this._handle1=null},_isServiceSupportDistinctValues:function(a,b){if(this._isStreamServer(a))return!1;a=b.currentVersion?b:b.toJson().layerDefinition;return 10.1<=parseFloat(a.currentVersion)},_isStreamServer:function(a){a=(a||"").replace(/\/*$/g,"");return/\/StreamServer$/gi.test(a)},
_updateFieldsSelectTitle:function(){this.fieldsSelect.domNode.title="";var a=this._getSelectedFilteringItem(this.fieldsSelect);a&&(this.fieldsSelect.domNode.title=a.displayName||a.alias||a.name)},_updateOperatorsSelectTitle:function(){this.operatorsSelect.domNode.title="";var a=this.operatorsSelect.get("value");a&&(a=this.operatorsSelect.getOptions(a),this.operatorsSelect.domNode.title=a.label,d.setAttr(this.operatorsSelect.domNode,"aria-label",a.label))},_showValidationErrorTip:function(a){try{!a.validate()&&
a.domNode&&a.focusNode&&(a.focusNode.focus(),a.focusNode.blur())}catch(b){console.error(b)}},_getSelectedFilteringItem:function(a){if(a.validate()){var b=a.get("item");if(b)return b}this._showValidationErrorTip(a);return null},_getShortTypeByFieldType:function(a){return a===this.stringFieldType?"string":a===this.dateFieldType?"date":0<=this.numberFieldTypes.indexOf(a)?"number":null},_initFieldsSelect:function(a){a=p.map(a,f.hitch(this,function(c,e){var g=f.mixin({},c);g.id=e;g.shortType=this._getShortTypeByFieldType(c.type);
g.alias||(g.alias=g.name);c="";"string"===g.shortType?c=this.nls.string:"number"===g.shortType?c=this.nls.number:"date"===g.shortType&&(c=this.nls.date);g.displayName=g.alias+" ("+c+")";return g}));if(0<a.length){var b=new D({data:a});this.fieldsSelect.set("store",b);this.fieldsSelect.set("value",a[0].id)}setTimeout(f.hitch(this,function(){this.fieldsSelect&&this.fieldsSelect.focusNode&&this.fieldsSelect.focusNode.focus()}),2);this._updateOperatorsByFieldsSelect()},_showPart:function(a){if((this.part=
a)&&this.part.fieldObj&&this.part.operator&&this.part.valueObj){this._removeFieldsSelectChangeAndOperatorChangeEvents();var b=this.part.fieldObj.name;a=this.part.operator;this.part.caseSensitive=!!this.part.caseSensitive;b=this.fieldsSelect.store.query({name:b});0!==b.length&&(b=b[0])&&(this.fieldsSelect.set("value",b.id),this._updateOperatorsByFieldsSelect(),this.operatorsSelect.set("value",a),this._resetByFieldAndOperator(this.part),a=this.part.interactiveObj)&&(this.cbxAskValues.check(),this._updatePrompt(),
this.promptTB.set("value",a.prompt||""),this.hintTB.set("value",a.hint||""),"unique"===this.part.valueObj.type||"multiple"===this.part.valueObj.type?this.cascadeSelect.set("value",a.cascade):this.cascadeSelect.set("value","none"))}},_onFieldsSelectChange:function(){this._updateOperatorsByFieldsSelect();this._resetByFieldAndOperator()},_updateOperatorsByFieldsSelect:function(){this._updateFieldsSelectTitle();this.operatorsSelect.removeOption(this.operatorsSelect.getOptions());this.operatorsSelect.addOption({value:"none",
label:this.nls.none});var a=this._getSelectedFilteringItem(this.fieldsSelect);a&&(this.operatorsSelect.shortType=a.shortType,a=t.getOperatorsByShortType(a.shortType,this.isHosted),this.operatorsSelect.removeOption(this.operatorsSelect.getOptions()),p.forEach(a,f.hitch(this,function(b){this.operatorsSelect.addOption({value:b,label:this.nls[b]})})))},_onOperatorsSelectChange:function(){this._resetByFieldAndOperator()},_updateValueTypeClass:function(){d.removeClass(this.domNode,"value-type");d.removeClass(this.domNode,
"field-type");d.removeClass(this.domNode,"unique-type");d.removeClass(this.domNode,"support-cascade");var a=this._getValueTypeByUI();"value"===a?(d.addClass(this.domNode,"value-type"),this.cascadeSelect.set("value","none")):"field"===a?(d.addClass(this.domNode,"field-type"),this.cascadeSelect.set("value","none")):(d.addClass(this.domNode,"unique-type"),this.cascadeSelect.set("value","previous"),a=!0,a=this._getSelectedFilteringItem(this.fieldsSelect),a=m.getCodedValuesOrTypesCount(a,this.layerInfo),
(a=0<a?m.isCodedValuesSupportFilter(this.layerInfo,a):!0)?(this.cascadeSelect.set("value","previous"),d.addClass(this.domNode,"support-cascade")):this.cascadeSelect.set("value","none"))},_enableValueTypeSelectOption:function(a,b){a=l("li[data-type\x3d"+a+"]",this.valueTypePopupNode)[0];b?(d.removeClass(a,"disabled"),d.setAttr(a,"aria-disabled","false")):(d.addClass(a,"disabled"),d.setAttr(a,"aria-disabled","true"))},_setVisibleValueTypeSelectOption:function(a,b){a=l("li[data-type\x3d"+a+"]",this.valueTypePopupNode)[0];
b?d.setStyle(a,"display","block"):d.setStyle(a,"display","none")},_calcValueTypePosition:function(a){a=d.position(a.target);var b=d.position(document.body).w;var c=d.position(document.body).h;var e=d.getStyle(this.valueTypePopupNode,"width"),g=d.getStyle(this.valueTypePopupNode,"height");c=c-a.y-16-10>=g?a.y+16+10:a.y-g-10;b=b-a.x>=e?a.x:a.x+16-e;window.isRTL&&(b=a.x+16>=e?a.x+16-e:a.x);return{left:b,top:c}},_onValueTypeSetClick:function(a){u.open({popup:this.customDijit,around:a.target});var b=this._calcValueTypePosition(a);
u.open({x:b.left,y:b.top,popup:this.customDijit});a.stopPropagation();m.isInNavMode()&&r.focus(this.valueTypePopupDelBtn)},_onValueTypeClick:function(a){var b=d.getAttr(a.currentTarget,"data-type");d.hasClass(a.currentTarget,"disabled")?a.stopPropagation():(l("li",this.valueTypePopupNode).forEach(function(c){d.removeClass(c,"selected")}),d.addClass(a.currentTarget,"selected"),this._resetByFieldAndOperator(null,b),this._closeEsriPopup())},_enableValueTypeOption:function(a){this._enableValueTypeSelectOption("value",
a)},_enableFieldTypeOption:function(a){this._enableValueTypeSelectOption("field",a)},_enableUniqueTypeOption:function(a){this._enableValueTypeSelectOption("unique",a)},_enableUniquePredefinedTypeOption:function(a){this.runtime?this._setVisibleValueTypeSelectOption("uniquePredefined",!1):this._enableValueTypeSelectOption("uniquePredefined",a)},_enableValuesTypeOption:function(a){this._enableValueTypeSelectOption("values",a)},_enableMultipleTypeOption:function(a){this._enableValueTypeSelectOption("multiple",
a)},_enableMultiplePredefinedTypeOption:function(a){this.runtime?this._setVisibleValueTypeSelectOption("multiplePredefined",!1):this._enableValueTypeSelectOption("multiplePredefined",a)},_enableAllValueTypeOptions:function(){this._enableValueTypeOption(!0);this._enableFieldTypeOption(!0);this._enableUniqueTypeOption(!0);this._enableUniquePredefinedTypeOption(!0);this._enableMultipleTypeOption(!0);this._enableMultiplePredefinedTypeOption(!0)},_disableAllValueTypeOptions:function(){this._enableValueTypeOption(!1);
this._enableFieldTypeOption(!1);this._enableUniqueTypeOption(!1);this._enableUniquePredefinedTypeOption(!1);this._enableMultipleTypeOption(!1);this._enableMultiplePredefinedTypeOption(!1)},_resetByFieldAndOperator:function(a,b){this._updateOperatorsSelectTitle();this.valueProvider&&this.valueProvider.destroy();this._hideCaseSensitive();this._disableAllValueTypeOptions();a||(a={fieldObj:"",operator:"",valueObj:"",interactiveObj:"",caseSensitive:!1},a.fieldObj=this._getFieldObjByUI(),a.operator=this._getOperatorByUI());
a.widgetId=this.widgetId;var c=[],e=null;a.fieldObj&&a.operator&&(c=this.valueProviderFactory.getSupportedValueTypes(a.fieldObj.name,a.operator),a.valueObj?e=a.valueObj.type:(e=b&&0<=c.indexOf(b)?b:c[0],a.valueObj={type:e}),0<=c.indexOf("value")&&this._enableValueTypeOption(!0),0<=c.indexOf("field")&&this._enableFieldTypeOption(!0),0<=c.indexOf("unique")&&this._enableUniqueTypeOption(!0),0<=c.indexOf("values")&&this._enableValuesTypeOption(!0),0<=c.indexOf("uniquePredefined")&&this._enableUniquePredefinedTypeOption(!0),
0<=c.indexOf("multiple")&&this._enableMultipleTypeOption(!0),0<=c.indexOf("multiplePredefined")&&this._enableMultiplePredefinedTypeOption(!0),"value"===e?(this._enableValueTypeOption(!0),this.dateOptionsObj.status=!1,d.removeClass(this.domNode,"support-relative-start-date"),d.removeClass(this.domNode,"support-relative-end-date"),this._initDateOptionsUI(a)):"field"===e?this._enableFieldTypeOption(!0):"unique"===e?this._enableUniqueTypeOption(!0):"values"===e?this._enableValuesTypeOption(!0):"uniquePredefined"===
e?this._enableUniquePredefinedTypeOption(!0):"multiple"===e?this._enableMultipleTypeOption(!0):"multiplePredefined"===e&&this._enableMultiplePredefinedTypeOption(!0),this._updateValueTypeUI(e));0<c.length?(this.valueProvider=this.valueProviderFactory.getValueProvider(a,this.runtime),this.valueProvider.placeAt(this.valueProviderContainer),this.valueProvider.setValueObject(a.valueObj),this.own(h(this.valueProvider,"change",f.hitch(this,function(g,n){g&&this.dateOptionsObj.status&&this[g+"_"+n+"_date"].setValue(!0);
this.emit("change")}))),this.valueProvider.bindChangeEvents(),this.valueProvider.isBlankValueProvider()?(d.addClass(this.valueProvider.domNode,"hidden"),d.addClass(this.attributeValueContainer,"hidden")):d.removeClass(this.attributeValueContainer,"hidden"),(b=t.getOperatorInfo(a.operator))&&e&&(b[e]&&b[e].supportCaseSensitive&&this._showCaseSensitive(),a&&this.cbxCaseSensitive.setValue(a.caseSensitive))):d.addClass(this.attributeValueContainer,"hidden");this._updateWhenValueRadioChanged();this.emit("change")},
_initDateOptionsUI:function(a){a.fieldObj.type===this.dateFieldType&&(this.dateOptionsObj=t.isSupportVirtualDates(a.operator),this.dateOptionsObj.status&&(1===this.dateOptionsObj.num?(this._initDateOptions(a.interactiveObj.virtualDates,"start"),this.startDateOptions.innerHTML=this.nls.dateOptions):(this._initDateOptions(a.interactiveObj.virtualDates1,"start"),this._initDateOptions(a.interactiveObj.virtualDates2,"end"),d.addClass(this.domNode,"support-relative-end-date"),this.startDateOptions.innerHTML=
this.nls.startDateOptions),d.addClass(this.domNode,"support-relative-start-date")))},_initDateOptions:function(a,b){a||(a=this.allDates);p.forEach(this.allDates,function(c){var e=this[c+"_"+b+"_date"];e.changeEvent&&e.changeEvent.remove();e.setValue(0<=a.indexOf(c));e.changeEvent=h(e,"change",f.hitch(this,this._onShowTooltipCBXsChange,e,c,b))},this)},_onShowTooltipCBXsChange:function(a,b,c){if(a&&!1===a.checked){var e="";if(this._isCurrentDateOptIsSelected(b,c))e=this.nls.notUncheckedCurrent;else if(this._isDateOptionsAllHide(c))e=
this.nls.atLeastOne;else return;a.check();v.hide();v.show(e,a.domNode);this.own(h.once(a.domNode,E.leave,f.hitch(this,function(){v.hide(a.domNode)})))}},_isDateOptionsAllHide:function(a){var b=!0;p.some(this.allDates,function(c){if(!0===this[c+"_"+a+"_date"].checked)return b=!1,!0},this);return b},_isCurrentDateOptIsSelected:function(a,b){var c=this.valueProvider.getValueObject();if(c)if("start"===b)if(1===this.dateOptionsObj.num){if(!c.virtualDate&&a===q.VIRTUAL_DATE_CUSTOM||c.virtualDate===a)return!0}else{if(!c.virtualDate1&&
a===q.VIRTUAL_DATE_CUSTOM||c.virtualDate1===a)return!0}else if(!c.virtualDate2&&a===q.VIRTUAL_DATE_CUSTOM||c.virtualDate2===a)return!0;return!1},_updateWhenValueRadioChanged:function(){this._updatePrompt(!1,!0);this._updateValueTypeClass()},_onCbxAskValuesClicked:function(){this._updateRequiredProperty();this._updatePrompt(!0)},_onCbxAskValuesStatusChanged:function(){this._updateRequiredProperty()},_isUseAskForValues:function(){var a=this._getValueTypeByUI();return"uniquePredefined"===a||"multiplePredefined"===
a?!0:this.cbxAskValues.status&&this.cbxAskValues.checked},_isValueRequired:function(){return!this._isUseAskForValues()},_updateRequiredProperty:function(){var a=this._isValueRequired();this.valueProvider.setRequired(a)},_getValueTypeByUI:function(){var a=l("li.selected",this.valueTypePopupNode)[0];return a?d.getAttr(a,"data-type"):null},_closeEsriPopup:function(){this.customDijit&&u.close(this.customDijit)},_destroyEsriPopup:function(){this.customDijit&&(this.customDijit.destroy(),u.close(this.customDijit))},
_initValueTypeUI:function(){if(!this.valueTypePopupNode){this.valueTypePopupNode=document.createElement("DIV");d.addClass(this.valueTypePopupNode,"value-type-popup");this.valueTypePopupNode.innerHTML='\x3cdiv class\x3d"value-type-popup-header"\x3e\x3cspan class\x3d"value-type-popup-title jimu-ellipsis" title\x3d"'+this.nls.setInputType+'"\x3e'+this.nls.setInputType+'\x3c/span\x3e\x3cspan role\x3d"button" tabindex\x3d"0" aria-label\x3d"'+this.nls.deleteText+'" class\x3d"value-type-popup-icon jimu-icon jimu-icon-delete"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul role\x3d"listbox" tabindex\x3d"0"\x3e\x3cli role\x3d"option" tabindex\x3d"-1" data-type\x3d"value" title\x3d"'+
this.nls.value+'"\x3e\x3cspan\x3e'+this.nls.value+'\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\x3cli role\x3d"option" tabindex\x3d"-1" data-type\x3d"field" title\x3d"'+this.nls.field+'"\x3e\x3cspan\x3e'+this.nls.field+'\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\x3cli role\x3d"option" tabindex\x3d"-1" data-type\x3d"unique" title\x3d"'+this.nls.unique+'"\x3e\x3cspan\x3e'+this.nls.unique+'\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\x3cli role\x3d"option" tabindex\x3d"-1" data-type\x3d"uniquePredefined" title\x3d"'+
this.nls.uniquePredefined+'"\x3e\x3cspan\x3e'+this.nls.uniquePredefined+'\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\x3cli role\x3d"option" tabindex\x3d"-1" data-type\x3d"multiple" title\x3d"'+this.nls.multiple+'"\x3e\x3cspan\x3e'+this.nls.multiple+'\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\x3cli role\x3d"option" tabindex\x3d"-1" data-type\x3d"multiplePredefined" title\x3d"'+this.nls.multiplePredefined+'"\x3e\x3cspan\x3e'+this.nls.multiplePredefined+"\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\x3c/ul\x3e";
this.customDijit=new w({baseClass:"jimu-filter-valueType",domNode:this.valueTypePopupNode});this.valueTypePopupDelBtn=l(".value-type-popup-icon",this.valueTypePopupNode)[0];this.own(h(this.valueTypePopupDelBtn,"click",f.hitch(this,function(b){this._closeEsriPopup();b.stopPropagation()})));this.own(h(this.valueTypePopupDelBtn,"keydown",f.hitch(this,function(b){b.keyCode===k.ENTER||b.keyCode===k.SPACE||b.keyCode===k.ESCAPE?(b.stopPropagation(),this._closeEsriPopup(),m.isInNavMode()&&r.focus(this.valueTypeSetNode)):
b.shiftKey||b.keyCode!==k.TAB||this.valueTypeList.focus()})));this.valueTypeList=l("ul",this.valueTypePopupNode)[0];var a=l("li",this.valueTypePopupNode);this.own(h(this.valueTypeList,"focus",f.hitch(this,function(){this.selectedValueType=l("li.selected",this.valueTypePopupNode)[0];this.selectedValueType.focus()})));this.own(h(this.valueTypeList,"keydown",f.hitch(this,function(b){if(b.keyCode===k.TAB)b.shiftKey?(b.preventDefault(),this.valueTypePopupDelBtn.focus()):(b.preventDefault(),this._closeEsriPopup(),
m.isInNavMode()&&r.focus(this.valueTypeSetNode));else{var c=!1;if(b.keyCode===k.DOWN_ARROW){var e=this.selectedValueType;for(b=0;b<a.length-1;b++)if(c){if("none"!==d.getStyle(a[b],"display")){e=a[b];break}}else a[b]===this.selectedValueType&&(c=!0)}else if(b.keyCode===k.UP_ARROW)for(e=this.selectedValueType,b=a.length-1;0<=b;b--)if(c){if("none"!==d.getStyle(a[b],"display")){e=a[b];break}}else a[b]===this.selectedValueType&&(c=!0);else if(b.keyCode===k.HOME)e=a[0];else if(b.keyCode===k.END)for(b=a.length-
1;0<=b;b--)if("none"!==d.getStyle(a[b],"display")){e=a[b];break}e&&(this.selectedValueType=e,e.focus())}})));this.own(h(a,"click",f.hitch(this,function(b){this._onValueTypeClick(b)})));this.own(h(a,"keydown",f.hitch(this,function(b){b.keyCode===k.ENTER&&(this._onValueTypeClick(b),d.hasClass(b.target,"disabled")||this.valueTypeSetNode.focus())})));this.own(h(this.valueTypePopupNode,"keydown",f.hitch(this,function(b){b.keyCode===k.ESCAPE&&(b.stopPropagation(),r.focus(this.valueTypePopupDelBtn))})))}},
_updateValueTypeUI:function(a){l("li",this.valueTypePopupNode).forEach(function(b){d.removeClass(b,"selected")});if(a=l("li[data-type\x3d"+a+"]",this.valueTypePopupNode)[0])return d.addClass(a,"selected")},_updatePrompt:function(a,b){this.promptTB.set("value","");this.hintTB.set("value","");this.cbxAskValues.setStatus(!0);!a&&b&&this.cbxAskValues.uncheck(!0);d.setStyle(this.promptTable,"display","table");b=this.operatorsSelect.get("value");var c=this.nls[b],e=!1,g=this._getValueTypeByUI(),n=t.getOperatorInfo(b);
n&&g&&(n=n[g])&&n.supportAskForValue&&(e=!0);e||(this.cbxAskValues.uncheck(!0),this.cbxAskValues.setStatus(!1));n=this.cbxAskValues.getValue();(g=0<=["uniquePredefined","multiplePredefined"].indexOf(g)?!0:!1)?this.cbxAskValues.check(!0):a?n?this.cbxAskValues.check(!0):this.cbxAskValues.uncheck(!0):e?this.cbxAskValues.status||this.cbxAskValues.check(!0):this.cbxAskValues.uncheck(!0);this.cbxAskValues.status&&this.cbxAskValues.checked?(d.setStyle(this.promptTable,"display","table"),(a=this._getSelectedFilteringItem(this.fieldsSelect))&&
"none"!==b&&this.promptTB.set("value",(a.alias||a.name)+" "+c)):d.setStyle(this.promptTable,"display","none");g?(this.cbxAskValues.setStatus(!1),this.cascadeSelect.setDisabled(!0)):this.cascadeSelect.setDisabled(!1)},_destroySelf:function(){this.destroy()},destroy:function(){this._removeFieldsSelectChangeAndOperatorChangeEvents();this.dateOptionsObj.status&&this._removeRelativeDateChangeEvents();this._destroyEsriPopup();this.inherited(arguments)}})});