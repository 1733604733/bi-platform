define(['template'], function (template) {
    function anonymous($data,$filename) {
        'use strict';
        $data=$data||{};
        var $utils=template.utils,$helpers=$utils.$helpers,$each=$utils.$each,indList=$data.indList,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,hasDerive=$data.hasDerive,$out='';$out+='<div class="data-sources-derive-inds c-f">\r\n    <ul class="data-sources-derive-inds-tab">\r\n        <li class="classification classification-focus j-classification f-l" id="j-tab-create"><span>创建计算列</span></li>\r\n        <li class="classification j-classification f-l" id="j-tab-select"><span>快速选择计算列</span></li>\r\n        <li class="classification j-classification f-l" id="j-tab-callback"><span>回调指标</span></li>\r\n    </ul>\r\n\r\n    <div class="norm-box" id="j-box-norm">\r\n        <div class="description">\r\n            <div class="description-create">\r\n                点击左侧指标，可进入右侧区域，参与计算；当前支持的运算包括+、-、*、/、%\r\n                <div class="derive-inds-error hide j-derive-inds-error"></div>\r\n            </div>\r\n            <div class="description-select hide">\r\n                可双击左侧指标，进入右侧区域，生成对应指标的计算列\r\n                <div class="derive-inds-error hide j-derive-inds-error"></div>\r\n            </div>\r\n        </div>\r\n        <div class="ind-cal-setting f-l">\r\n            ';
        $each(indList.data,function($value,$index){
        if($value.type == "COMMON"){
        $out+='\r\n            <div class="item ellipsis hover-bg">\r\n                <span class="j-ori-item" data-input="';
        $out+=$escape($value.name);
        $out+='" title="';
        $out+=$escape($value.name);
        $out+='（';
        $out+=$escape($value.id);
        $out+='）">';
        $out+=$escape($value.name);
        $out+='</span>\r\n                ';
        if($value.visible == 0){
        $out+='<span class="icon-letter collect j-method-type" data-id="';
        $out+=$escape($value.id);
        $out+='">';
        $out+=$escape(indList.map[$value.methodType]);
        $out+='</span>';
        }
        $out+='\r\n            </div>\r\n            ';
        }
        });
        $out+='\r\n        </div>\r\n        <div class="data-sources-derive-list">\r\n            <div class="data-sources-derive-list-create f-l" >\r\n                ';
        $each(indList.data,function($value,$index){
        $out+='\r\n                ';
        if($value.type == "CAL"){
        $out+='\r\n                <div class="item j-derive-item">\r\n                    <div class="form-common-text name">\r\n                        <input type="text" value="';
        $out+=$escape($value.caption);
        $out+='" id="';
        $out+=$escape($value.id);
        $out+='" class="j-input-datasource-address" placeholder="衍生指标名">\r\n                        <span class="form-common-text-validation hide j-validation">衍生指标名与公式不能为空</span>\r\n                    </div>\r\n                    =\r\n                    <div class="form-common-text">\r\n                        <input type="text" value="';
        $out+=$escape($value.formula);
        $out+='" class="j-value" placeholder="衍生指标公式">\r\n                        <span class="form-common-btn-extend form-common-btn-extend-absolute j-delete" title="删除此衍生指标">×</span>\r\n                    </div>\r\n                </div>\r\n                ';
        }
        $out+='\r\n                ';
        });
        $out+='\r\n                ';
        if(!hasDerive){
        $out+='\r\n                <div class="item j-derive-item">\r\n                    <div class="form-common-text name">\r\n                        <input type="text" class="j-input-datasource-address" placeholder="衍生指标名">\r\n                        <span class="form-common-text-validation hide j-validation">衍生指标名与公式不能为空</span>\r\n                    </div>\r\n                    =\r\n                    <div class="form-common-text">\r\n                        <input type="text" class="j-value" placeholder="衍生指标公式">\r\n                        <span class="form-common-btn-extend form-common-btn-extend-absolute j-delete" title="删除此衍生指标">×</span>\r\n                    </div>\r\n                </div>\r\n                ';
        }
        $out+='\r\n                <div class="item">\r\n                    <span class="text-btn fw-b j-add-derive"> + </span>\r\n                </div>\r\n                <div class="item hide j-derive-item-template">\r\n                    <div class="form-common-text name">\r\n                        <input type="text" class="j-input-datasource-address" placeholder="衍生指标名">\r\n                        <span class="form-common-text-validation hide j-validation">衍生指标名与公式不能为空</span>\r\n                    </div>\r\n                    =\r\n                    <div class="form-common-text">\r\n                        <input type="text" class="j-value" placeholder="衍生指标公式">\r\n                        <span class="form-common-btn-extend form-common-btn-extend-absolute j-delete" title="删除此衍生指标">×</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="data-sources-derive-list-select f-l hide j-data-sources-derive-list-select">\r\n                <div class="item">\r\n                    <label class="label-inds-item f-l">添加环比指标</label>\r\n                    <div class="area-inds-item j-area-inds-item-rr f-l">\r\n                        ';
        $each(indList.data,function($value,$index){
        $out+='\r\n                        ';
        if($value.type == "RR"){
        $out+='\r\n                        <div class="area-inds-item-ind j-area-inds-item-ind f-l" id="';
        $out+=$escape($value.id);
        $out+='" title="';
        $out+=$escape($value.caption);
        $out+='" name="';
        $out+=$escape($value.name);
        $out+='">\r\n                            ';
        $out+=$escape($value.caption);
        $out+='\r\n                        <span class="hide area-inds-item-ind-delete">\r\n                            x\r\n                        </span>\r\n                        </div>\r\n                        ';
        }
        $out+='\r\n                        ';
        });
        $out+='\r\n                        <input type="text" class="input-inds-item f-l"/>\r\n                    </div>\r\n                </div>\r\n                <div class="item">\r\n                    <label class="label-inds-item f-l">添加同比指标</label>\r\n                    <div class="area-inds-item j-area-inds-item-sr f-l">\r\n                        ';
        $each(indList.data,function($value,$index){
        $out+='\r\n                        ';
        if($value.type == "SR"){
        $out+='\r\n                        <div class="area-inds-item-ind j-area-inds-item-ind f-l" id="';
        $out+=$escape($value.id);
        $out+='" title="';
        $out+=$escape($value.caption);
        $out+='" name="';
        $out+=$escape($value.name);
        $out+='">\r\n                            ';
        $out+=$escape($value.caption);
        $out+='\r\n                        <span class="area-inds-item-ind-delete hide">\r\n                            x\r\n                        </span>\r\n                        </div>\r\n                        ';
        }
        $out+='\r\n                        ';
        });
        $out+='\r\n                        <input type="text" class="input-inds-item f-l"/>\r\n                    </div>\r\n                </div>\r\n            <span class="select-description f-l">\r\n                描述：双击左侧指标后进入右侧，新指标以标签的形式展现，移入出现删除按钮。添加后的指标出现在左侧指标区域\r\n            </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="norm-box" id="j-box-callbackIndex" style="display: none;">\r\n        <div class="description" style="padding: 18px 0 6px 13px">\r\n            <div class="description-create">\r\n                设置回调指标区域，在下方进行设置\r\n                <div class="derive-inds-error hide j-derive-inds-error"></div>\r\n            </div>\r\n        </div>\r\n        <div class="callback-index">\r\n            <div class="callback-index-all j-callback-index-all">\r\n                ';
        $each(indList.data,function($value,$index){
        if($value.type == "CALLBACK"){
        $out+='\r\n                <div class="callback-form-box">\r\n                    <div class="callback-form" id="';
        $out+=$escape($value.id);
        $out+='">\r\n                        <div class="callback-name">\r\n                            <div>回调指标名称:</div>\r\n                            <div>显示名称:</div>\r\n                            <div>回调地址:</div>\r\n                            <div>请求超时时间:</div>\r\n                        </div>\r\n                        <div class="callback-text">\r\n                            <input class="call-name" placeholder="由数字,字母,下划线组成并以数字开头" value="';
        $out+=$escape($value.name);
        $out+='"/>\r\n                            <input class="call-caption" placeholder="由数字,字母,汉字组成" value="';
        $out+=$escape($value.caption);
        $out+='"/>\r\n                            <input class="call-url" placeholder="回调地址" value="';
        $out+=$escape($value.url);
        $out+='"/>\r\n                            <input class="call-timeout" placeholder="由数字组成" value="';
        $out+=$escape($value.properties.timeOut);
        $out+='"/>\r\n                        </div>\r\n                    </div>\r\n                    <div class="close-retractable callback-close" title="删除">×</div>\r\n                    <div class="close-retractable callback-retractable " title="收进">-</div>\r\n                    <div class="callback-title"><div></div></div>\r\n                </div>\r\n                ';
        }
        });
        $out+='\r\n            </div>\r\n        </div>\r\n        <div class="callback-add j-callback-add" title="添加">+</div>\r\n    </div>\r\n</div>';
        return $out;
    }
    return { render: anonymous };
});