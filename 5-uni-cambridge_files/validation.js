function isValidEmail(event,continue_element){if(exists(continue_element)&&exists(event.target)){var input_element=event.target;continue_element=el(continue_element);var re=/\S+@\S+\.\S+/;is_valid=re.test(input_element.value);var value=is_valid?"1":"0";if(setAttr(input_element,"valid",value),is_valid)return removeClass(continue_element,"continue-disabled"),void enableElement(continue_element);addClass(continue_element,"continue-disabled"),disableElement(continue_element)}}function isEmailConfirmed(element,email,form_id,continue_id){var valid=email==element.value?"1":"0";element.style.border=valid?"1px solid green":"1px solid red",setAttr(element,"valid",valid),el(continue_id).disabled=!isFormValid(el(form_id))}function isPasswordConfirmed(element,form_id,continue_id){var password=el("ma_new_password").value,valid=element.value==password;element.style.border=valid?"1px solid green":"1px solid red",setAttr(element,"valid",valid),el(continue_id).disabled=!isFormValid(el(form_id))}function isValidTelephone(element,form_id,continue_id){var valid=11==element.value.length&&!isNaN(element.value)||13==element.value.length&&"+"==element.value.charAt(0);element.style.border=valid?"1px solid green":"1px solid red",setAttr(element,"valid",valid),el(continue_id).disabled=!isFormValid(el(form_id))}function hasInput(element,form_id,continue_id){var valid=element.value.length>0;element.style.border=valid?"1px solid green":"1px solid red",element.dataset.valid=valid,setAttr(element,"valid",valid),el(continue_id).disabled=!isFormValid(el(form_id))}function hasNumericInput(element,form_id,continue_id){var valid=element.value.length>0&&!isNaN(element.value.length);element.style.border=valid?"1px solid green":"1px solid red",setAttr(element,"valid",valid),el(continue_id).disabled=!isFormValid(el(form_id))}function hasExpiryMonth(element,form_id,continue_id,year_id){var valid=!isNaN(element.value)&&element.value.length<=2&&element.value.length>0,year=el(year_id).value;isNaN(year)||(valid=year>g_curr_year||year==g_curr_year&&element.value>=g_curr_month),element.style.border=valid?"1px solid green":"1px solid red",setAttr(element,"valid",valid),el(continue_id).disabled=!isFormValid(el(form_id))}function hasExpiryYear(element,form_id,continue_id,month_id){var valid=!isNaN(element.value)&&4==element.value.length,month=el(month_id);element.value<g_curr_year&&(valid=!1),isNaN(month.value)||(!valid||element.value==g_curr_year&&month.value<g_curr_month?(valid=!1,month.style.border="1px solid red",setAttr(month,"valid","0")):(month.style.border="1px solid green",setAttr(month,"valid","1"))),element.style.border=valid?"1px solid green":"1px solid red",setAttr(element,"valid",valid),el(continue_id).disabled=!isFormValid(el(form_id))}function hasValidCVV(element,form_id,continue_id){var valid=!isNaN(element.value)&&(3===element.value.length||4===element.value.length);element.style.border=valid?"1px solid green":"1px solid red",setAttr(element,"valid",valid),el(continue_id).disabled=!isFormValid(el(form_id))}function formatExpiryMonth(element,form_id,continue_id,year_id){var element_value=element.value;1==element_value.length&&(element.value="0"+element_value),hasExpiryMonth(element,form_id,continue_id,year_id)}function formatExpiryYear(element,form_id,continue_id,month_id){var element_value=element.value;2==element_value.length&&(element.value="20"+element_value),hasExpiryYear(element,form_id,continue_id,month_id)}function isFormValid(form){return formValid=!0,$(form).children().each(function(){var element=$(this);"1"==element.data("validate")&&element.data("valid")&&(formValid=!1,element.style.border="1px solid red")}),formValid}function enterKeyHandler(event,target_to_click){target_to_click=void 0!==target_to_click&&el(target_to_click),target_to_click&&13===event.keyCode&&(target_to_click.disabled||$(target_to_click).click())}function determineKeyInputAction(event,input,type){var keynum=event.charCode||event.keyCode||0;switch(type){case"billingpostcodelookup":if(13===keynum)return event.preventDefault(),$("#billing_lookup_postcode").trigger("click"),!1;break;case"deliverypostcodelookup":if(13===keynum)return event.preventDefault(),lookupPostcode(),!1;break;case"preventdefault":if(13===keynum)return event.preventDefault(),!1}}function generalValidation(input,form_id,is_submit){if("1"!=input.getAttribute("data-validate")||1==input.getAttribute("data-skip")&&0==input.value)return $(input).addClass("valid_form_field"),!0;var value=input.value,type=input.getAttribute("data-validatetype");$(input).removeClass("valid_form_field invalid_form_field");var valid=!1;switch(type){case"notempty":valid=value.trim().replace(/,/g,"").length>0;break;case"words":value=value.trim(),valid=!/[^A-Za-z0-9 .'"£%?!,@$#:^*`~()_\/\-\n]+/gm.test(value)&&value.length>0;break;case"postcodelookup":valid=value.length>0;break;case"cardnumber":cardValidate(input);break;case"creditcardexpirymonth":value=value.replace(/\s+/g,""),valid=!isNaN(value)&&(1===value.length||2===value.length)&&value<=12&&value>0;break;case"creditcardexpiryyear":if(value=value.replace(/\s+/g,""),isNaN(value))break;var full_year=parseInt(value)+2e3,current_year=Date().getFullYear;if(full_year<current_year){valid=!1;break}valid=2==value.length&&full_year>=g_curr_year;break;case"creditcardcvv":value=value.replace(/\D/g,""),input.value=value,valid=3===value.length||4===value.length;break;case"telephone":if("+"===value.charAt(0)){value=value.substr(1),value=value.replace(/\D/g,""),input.value="+"+value,valid=value.trim().length>0;break}value=value.replace(/\D/g,""),input.value=value,valid=value.trim().length>0;break;case"email":var re=/\S+@\S+\.\S+/;valid=re.test(value)&&value.length>3;break;case"emailconfirmation":valid=input.getAttribute("data-emailvalue").toLowerCase()===value.toLowerCase();break;case"password":valid=value.length>=6;break;case"passwordconfirmation":var password=el(input.getAttribute("data-passwordelement")).value;valid=value===password&&value.length>0;break;case"verificationcode":$("#"+input.id+"_warning").hide(),valid=6===value.length;break;case"currency_gbp":input.value=value=value.replace(/[^\d.]+/g,""),valid=value.length>0;break;case"currency_euro":input.value=value=value.replace(/[^\d,.]+/g,""),valid=value.length>0;break;case"file":if(input.files.length>5){valid=!1;break}for(var i=0;i<input.files.length;i++){var file=input.files[i],idxDot=file.name.lastIndexOf(".")+1,extFile=file.name.substr(idxDot,file.name.length).toLowerCase();if("jpg"!=extFile&&"jpeg"!=extFile&&"png"!=extFile&&"pdf"!=extFile&&"doc"!=extFile&&"docx"!=extFile&&"mp4"!=extFile&&"mov"!=extFile||!(file.size<5242880)){valid=!1;break}valid=!0}break;case"option":valid=0!==input.selectedIndex}valid_string=valid?"1":"0",input.dataset.valid=valid_string;var css_class=valid?"valid_form_field":"invalid_form_field";$(input).addClass(css_class);var depends_on=input.dataset.linkedElement;void 0!==depends_on&&0==el(depends_on).dataset.valid&&(valid=!1);var error_el_id="#"+input.dataset.errorElement||"#"+input.id+"_error",error_el=$(error_el_id);void 0==error_el||valid?error_el.hide():error_el.show()}function checkFormValidity(form,wrapping_element){if("1"==form.getAttribute("data-skip")&&0==form.value)return!0;var valid=!0;return wrapping_element=void 0===wrapping_element?" ":"#"+wrapping_element+" ",$(form).find(wrapping_element+"input, textarea, select").each(function(){$(this).is(":hidden")||(generalValidation(this,form.id,!0),"1"==this.getAttribute("data-skip")&&0==this.value||"1"==this.getAttribute("data-validate")&&"0"==this.getAttribute("data-valid")&&(valid=!1))}),valid}var g_curr_date=new Date,g_curr_month=g_curr_date.getMonth(),g_curr_year=g_curr_date.getFullYear();