function initMyAccount(){switch(location.search){case"?interests":return void showElement("interest");case"?wishlist":return void showElement("wishlist");default:showElement("myorders")}}function showElement(id){switch(g_editingAddress=!1,id){case"myorders":updateInterests(),addLoadingOverlay("One moment, loading your orders..."),hideAllParents(),showEl("myorders"),loadAllOrders(3,1);break;case"personaldetails":updateInterests(),addLoadingOverlay("One moment, loading your personal details..."),hideAllParents(),showEl("personaldetails"),loadPersonalDetails(el("personaldetails_overview").value);break;case"addressbook":updateInterests(),addLoadingOverlay("One moment, loading your address book..."),hideAllParents(),showEl("addressbook"),loadAddressBook(el("addressbook_summary").value);break;case"paymentdetails":break;case"wishlist":updateInterests(),addLoadingOverlay("One moment, loading your wishlist..."),hideAllParents(),showEl("wishlist_summary"),loadWishlist();break;case"interest":updateInterests(),addLoadingOverlay("One moment, loading your interests..."),hideAllParents(),showEl("interest_summary"),loadInterests()}return!1}function hideAllParents(){hideEl("myorders"),hideEl("personaldetails"),hideEl("addressbook"),hideEl("paymentdetails"),hideEl("wishlist"),hideEl("ma_co_overlay"),hideEl("interest")}function hideAllMyOrder(){window.scrollTo(0,0),hideEl("myorders_orderlist"),hideEl("myorders_vieworder"),hideEl("myorders_editorder")}function backToAllOrders(){hideAllMyOrder(),showEl("myorders_orderlist")}function loadAllOrders(months,page){$.ajax({type:"POST",url:"?m="+months+"&page="+page,success:displayMyOrders,error:ajaxFailHandler})}function determineOrderPagination(page){for(var children=el("myorders_orderlist").childNodes,i=0;i<children.length;i++){var child=children[i];child.style.display=getAttr(child,"page")==page?"block":"none"}el("current_order_page").value=page}function nextAccountPage(){page=el("current_order_page").value,loadAllOrders(3,parseInt(page)+1)}function prevAccountPage(){page=el("current_order_page").value,loadAllOrders(3,parseInt(page)-1)}function displayMyOrders(data){hideAllMyOrder(),showEl("myorders_orderlist"),el("myorders_orderlist").innerHTML=data,removeLoadingOverlay()}function loadOrder(order_id){$.ajax({type:"POST",url:"?oid="+order_id,success:displayOrder,error:ajaxFailHandler})}function displayOrder(data){hideAllMyOrder(),showEl("myorders_vieworder"),el("myorders_vieworder").innerHTML=data}function loadCancelReturnOrder(order_id){g_cancelledItems=[],g_returnedItems=[],$.ajax({type:"POST",url:"?loadcancelreturn="+order_id,success:displayCancelReturnOrder,error:ajaxFailHandler})}function displayCancelReturnOrder(data){hideAllMyOrder(),el("myorders_editorder").innerHTML=data,showEl("myorders_editorder")}function cancelItem(element,item_id,confirm){if("0"===getAttr(element,"toggle")){setAttr(element,"toggle","1"),hideEl("quantity_fixed"+item_id);var cancel_form=el("cancel-reason-form"+item_id);return null!==cancel_form?(showEls([el("quantity_to_edit"+item_id),cancel_form]),void element.classList.add("selected")):(showEl("cancel-not-eligible"+item_id),void element.classList.add("unavailable"))}setAttr(element,"toggle","0"),showEl("quantity_fixed"+item_id);var cancel_form=el("cancel-reason-form"+item_id);if(null===cancel_form)return hideEl("cancel-not-eligible"+item_id),void element.classList.remove("unavailable");if(hideEls([el("quantity_to_edit"+item_id),el("cancel-reason-form"+item_id)]),!confirm){for(var i=0;i<g_cancelledItems.length;i++)g_cancelledItems[i].id===item_id&&g_cancelledItems.splice(i,1);element.classList.remove("selected")}}function returnItem(element,item_id,confirm){if("0"===getAttr(element,"toggle"))return hideEl("quantity_fixed"+item_id),showEls([el("quantity_to_edit"+item_id),el("return-reason-form"+item_id)]),setAttr(element,"toggle","1"),void(element.classList.contains("selected")||element.classList.contains("unavailable")||element.classList.add("selected"));if(showEl("quantity_fixed"+item_id),hideEls([el("quantity_to_edit"+item_id),el("return-reason-form"+item_id)]),setAttr(element,"toggle","0"),!confirm){for(var i=0;i<g_returnedItems.length;i++)g_returnedItems[i].id===item_id&&g_returnedItems.splice(i,1);element.classList.remove("selected")}}function cancelReasonChange(element,item_id){if(""===element.value)return hideEl("cancel-confirm"+item_id),!1;var product=el("product"+item_id);return showEl("cancel-confirm"+item_id),product.classList.add("selected"),!1}function returnReasonChange(element,item_id){if(""===element.value)return hideEl("return-confirm"+item_id),!1;var product=el("product"+item_id),uneligible=el("return-uneligible"+item_id),optgroup=element.options[element.selectedIndex].parentNode.label;return"Change of mind"===optgroup&&null!==uneligible?(showEls(uneligible),hideEl("return-confirm"+item_id),product.classList.remove("selected"),product.classList.add("unavailable"),!1):(showEl("return-confirm"+item_id),null!==uneligible&&hideEls(uneligible),product.classList.add("selected"),product.classList.remove("unavailable"),!1)}function cancelConfirm(event,item_id){event.stopPropagation();for(var qty=el("quantity_"+item_id).value,reason=el("cancel-reason"+item_id).value,i=0;i<g_cancelledItems.length;i++)g_cancelledItems[i].id===item_id&&g_cancelledItems.splice(i,1);return!(!qty||""===reason)&&(g_cancelledItems.push({id:item_id,qty:qty,reason:reason}),cancelItem(el("product"+item_id),item_id,!0),!1)}function returnConfirm(event,item_id,req_replacement){event.stopPropagation();for(var qty=el("quantity_"+item_id).value,i=0;i<g_returnedItems.length;i++)g_returnedItems[i].id===item_id&&g_returnedItems.splice(i,1);var select=el("return-reason"+item_id),optgroup=select.options[select.selectedIndex].parentNode.label,details=el("return-note"+item_id);return g_returnedItems.push({id:item_id,qty:qty,reason:select.value,reason_family:optgroup,details:details.value.trim(),replace:req_replacement}),returnItem(el("product"+item_id),item_id,!0),!1}function cancelReturnContinue(order_id){if(0===g_cancelledItems.length&&0===g_returnedItems.length)return!1;var data={cancel:JSON.stringify(g_cancelledItems),return:JSON.stringify(g_returnedItems)};return $.ajax({type:"POST",url:"?cancelreturnsubmit="+order_id,data:data,success:returnSuccess,error:ajaxFailHandler}),!1}function returnSubmit(order_id,req_collect){var data={return:JSON.stringify(g_returnedItems),req_collect:JSON.stringify(req_collect)};return $.ajax({type:"POST",url:"?returnsubmit="+order_id,data:data,success:returnSuccess,error:ajaxFailHandler}),!1}function cancelSubmit(order_id){var data={cancel:JSON.stringify(g_cancelledItems),return:JSON.stringify(g_returnedItems)};return $.ajax({type:"POST",url:"?cancelsubmit="+order_id,data:data,success:returnSuccess,error:ajaxFailHandler}),!1}function returnSuccess(data){return""===data.trim()?backToAllOrders():void(el("myorders_editorder").innerHTML=data)}function toggleOrderManageOptions(level,id,button){var element=el("ma_mo_"+level+"_"+id),toggle=getAttr(element,"toggle");element.style.display="0"===toggle?"block":"none",button.style.backgroundColor="0"===toggle?"rgb(255,165,0)":"#FFF";var toggle_val="0"===toggle?"1":"0";setAttr(element,"toggle",toggle_val)}function confirmCancelOrder(order_id){showEl("ma_co_overlay"),el("ma_co_confirmation_box").style.display="block",setAttr(el("ma_co_confirm_button"),"id",order_id)}function closeCancelConfirmation(){hideEl("ma_co_overlay"),el("ma_co_confirmation_box").style.display="none"}function cancelOrder(order_id){$.ajax({type:"POST",url:"?cancelorder="+order_id,success:showCancelledOrder,error:ajaxFailHandler})}function showCancelledOrder(data){closeCancelConfirmation(),showElement("myorders")}function cancelLine(line_id,qty){$.ajax({type:"POST",url:"?cancelorderline="+line_id+"&qty="+qty,success:showCancelledLine,error:ajaxFailHandler})}function addCancelLine(line_id,qty_element){g_cancelledItems[line_id]=qty_element.value;var btn_element=el("cancel_button_"+line_id);"btn btn-danger"===btn_element.className&&(btn_element.className="btn btn-default",btn_element.value="Cancel Item",qty_element.selectedIndex=0),"btn btn-default"===btn_element.className&&qty_element.value>0&&(btn_element.className="btn btn-danger",btn_element.value="Selected")}function confirmCancelLines(){var cancelled_lines=JSON.stringify(g_cancelledItems);$.ajax({type:"POST",url:"?cancelorderlines="+cancelled_lines,success:showCancelledOrder,error:ajaxFailHandler})}function hideAllPersonalDetails(){window.scrollTo(0,0),hideEl("personaldetails_overview"),hideEl("personaldetails_update")}function backToDetailsOverview(){hideAllPersonalDetails(),showEl("personaldetails_overview")}function loadPersonalDetails(){$.ajax({type:"POST",url:"?details=a",success:displayDetailsOverview,error:ajaxFailHandler})}function displayDetailsOverview(data){hideAllPersonalDetails(),showEl("personaldetails_overview"),el("personaldetails_overview").innerHTML=data,removeLoadingOverlay()}function displayDetailUpdate(field){return $.ajax({type:"POST",url:"?displayupdate="+field,success:displayUpdateView,error:ajaxFailHandler}),!1}function displayUpdateView(data){hideAllPersonalDetails(),showEl("personaldetails_update"),el("personaldetails_update").innerHTML=data}function updateDetails(detail){var url="";switch(detail){case"basic":if(!checkFormValidity(el("ma_personal_detail_form")))return!1;var mp_pref="&mp_email="+el("ma_mp_email").checked+"&mp_mobile="+el("ma_mp_mobile").checked+"&mp_post="+el("ma_mp_post").checked;url="?updatedetails=basic&title="+el("ma_title").value+"&forename="+el("ma_forename").value+"&surname="+el("ma_surname").value+"&phone1="+el("ma_phone1").value.trim().replace(/  +/g," ")+"&phone2="+el("ma_phone2").value.trim().replace(/  +/g," ")+mp_pref;var dob=el("ma_dob_year").value+"/"+el("ma_dob_month").value+"/"+el("ma_dob_day").value,isDOBvalid=userDOBvalidate(dob);if("//"!==dob){if(!isDOBvalid)return el("ma_dob_day").value="01",$("#dob_warning").show(),!1;url+="&dob="+dob}break;case"email":url="?updatedetails=email&e="+el("email").value+"&ec="+el("emailconfirm").value+"&p="+el("password").value;break;case"password":if(!checkFormValidity(el("ma_password_change_form")))return!1;url="?updatedetails=password&p="+el("ma_password").value+"&np="+el("ma_new_password").value+"&cnp="+el("ma_new_password_confirm").value}return $.ajax({type:"POST",url:url,success:displayUpdateFeedback,error:ajaxFailHandler}),!1}function userDOBvalidate(dob){var splitDate=dob.split("/");if(3!=splitDate.length)return!1;var date=new Date(dob);return splitDate[0]==date.getFullYear()&&splitDate[1]==date.getMonth()+1&&splitDate[2]==date.getDate()}function displayUpdateFeedback(data){loadPersonal(),$(".input-lg").each(function(){$(this).removeClass("invalid").removeClass("valid")});var result=data.split("|");if("error"!==result[0]&&"undefined"==typeof result[1])return g_localStorageEnabled&&(localStorage.removeItem("newsletter_signed_up"),localStorage.removeItem("newsletter_signed_up_ts")),void showElement("personaldetails");switch(result[1]){case"1":$("#ma_update_password_alert_text").html("Sorry, you have input your current password incorrectly. Please try again."),$("#ma_password").addClass("invalid"),$("#ma_password").val("");break;case"2":$("#ma_update_password_alert_text").html("Sorry, your new password and confirm passwords do not match. Please try again."),$("#ma_new_password_confirm").addClass("invalid"),$("#ma_new_password_confirm").val("")}showEl("ma_update_password_alert")}function togglePasswordVisibility(){var newpasswordInput=el("newpasswordInput");newpasswordInput.type="text"===newpasswordInput.type?"password":"text"}function onPasswordChange(event){var newpassword=el("ma_new_password"),valid=newpassword.value.length>=6;newpassword.style.border=valid?"1px solid green":"1px solid red",setAttr(newpassword,"valid",valid),g_inputChars.indexOf(event.keyCode)!==-1&&"paste"!==event.type&&(el("ma_new_password_confirm").style.border=el("ma_new_password").value===el("ma_new_password_confirm").value?"1px solid green":"1px solid red",el("ma_update_password").disabled=el("ma_new_password").value.length<6||el("ma_new_password").value!==el("ma_new_password_confirm").value)}function hideAllAddressBook(){window.scrollTo(0,0),hideEl("addressbook_summary"),hideEl("addressbook_edit")}function loadAddressBook(){$.ajax({type:"POST",url:"?addressbook=a",success:displayAddressBook,error:ajaxFailHandler})}function displayAddressBook(data){hideAllAddressBook(),showEl("addressbook_summary"),el("addressbook_summary").innerHTML=data,removeLoadingOverlay(),equaliseHeights("#addressbook .card")}function editAddress(address_id){g_editingAddress=!0,$.ajax({type:"POST",url:"?displayeditaddress="+address_id+"&type=update",success:displayEditAddress,error:ajaxFailHandler})}function displayAddAddress(data){hideAllAddressBook(),showEl("addressbook_edit"),el("addressbook_edit").innerHTML=data,onAddrCountryChange(el("checkout_address_country"))}function displayEditAddress(data){hideAllAddressBook(),showEl("addressbook_edit"),el("addressbook_edit").innerHTML=data,onAddrCountryChange(el("checkout_address_country")),hideAdditionalAddressFields(),$("#address_lookup_card").show(),$("#checkout_address_country").parent().parent().hide(),$("#checkout_address_number").parent().parent().hide(),$("#checkout_address_postcode").parent().parent().hide(),$("#checkout_enter_manual_address").hide(),$("#checkout_save_address").show()}function postcodeLookup(){var postcode=el("ma_ab_postcode").value,namenumber=el("ma_ab_namenumber").value;return el("ma_ab_prev_lookup").innerHTML=postcode,0===postcode.length?(el("ma_ab_postcode").style.border="1px solid red",!1):(hideEl("ma_ab_address_details"),void $.ajax({type:"POST",url:"?postcodelookup="+postcode+"&namenumber="+namenumber,success:displayPostcodeLookup,error:ajaxFailHandler}))}function displayPostcodeLookup(data){return data.length<2?(showEl("ma_ab_address_details"),void showEl("ma_ab_lookup_error")):(el("ma_ab_address_lookup").innerHTML='<div class="row"><div class="col-xs-12 col-sm-3 col-sm-offset-1 ma_addressbook_edit_label"></div><div class="col-xs-12" style="padding-left: 24px"><div class="col-xs-12 col-sm-9 col-sm-offset-3 address-item ma_addressbook_postcode_lookup_item alert alert-warning" onclick="manualAddressEntry()">Manually Enter My Address</div></div></div>',hideEl("ma_ab_lookup_error"),showEl("ma_ab_address_lookup"),void(el("ma_ab_address_lookup").innerHTML+=data))}function manualAddressEntry(){showEl("ma_ab_address_details"),hideEl("ma_ab_address_lookup"),hideEl("ma_ab_lookup_error")}function selectLookupaddress(udprn){$.ajax({type:"POST",url:"?loadUdprn="+udprn,success:populateAddressForm,error:ajaxFailHandler})}function populateAddressForm(data){var json=JSON.parse(data);showEl("ma_ab_address_details"),hideEl("ma_ab_address_lookup");var name_number_elem=el("ma_ab_namenumber"),organisation_elem=el("ma_ab_organisation"),street_elem=el("ma_ab_street"),city_elem=el("ma_ab_city");name_number_elem.value=null!==json.building_no?json.building_no:json.building_name,organisation_elem.value=json.organisation,street_elem.value=json.thoroughfare,city_elem.value=json.posttown,hasInput(name_number_elem,"ma_ab_edit_address_form","login_continue"),hasInput(street_elem,"ma_ab_edit_address_form","login_continue"),hasInput(city_elem,"ma_ab_edit_address_form","login_continue")}function saveAddress(address_id,type){var form=el("ma_ab_edit_address_form"),form_id="ma_ab_edit_address_form",ma_ab_forename=el("ma_ab_forename"),ma_ab_surname=el("ma_ab_surname"),ma_ab_telephone=el("ma_ab_telephone"),ma_ab_namenumber=el("ma_ab_namenumber"),ma_ab_postcode=el("ma_ab_postcode"),ma_ab_organisation=el("ma_ab_organisation"),ma_ab_street=el("ma_ab_street"),ma_ab_city=el("ma_ab_city"),ma_ab_country=el("ma_ab_country");return hasInput(ma_ab_forename,form_id,"login_continue"),hasInput(ma_ab_surname,form_id,"login_continue"),isValidTelephone(ma_ab_telephone,form_id,"login_continue"),hasInput(ma_ab_namenumber,form_id,"login_continue"),hasInput(ma_ab_postcode,form_id,"login_continue"),hasInput(ma_ab_street,form_id,"login_continue"),hasInput(ma_ab_street,form_id,"login_continue"),hasInput(ma_ab_city,form_id,"login_continue"),!!isFormValid(form)&&($.ajax({type:"POST",url:"?storeAddress="+type+"&id="+address_id+"&forename="+ma_ab_forename.value+"&surname="+ma_ab_surname.value+"&contactnumber="+ma_ab_telephone.value+"&building="+ma_ab_namenumber.value+"&postcode="+ma_ab_postcode.value+"&organisation="+ma_ab_organisation.value+"&street="+ma_ab_street.value+"&city="+ma_ab_city.value+"&country="+ma_ab_country.value,success:loadAddressBook,error:ajaxFailHandler}),!1)}function deleteAddress(address_id){return $.ajax({type:"POST",url:"?deleteAddress="+address_id,success:loadAddressBook,error:ajaxFailHandler}),!1}function addAddress(){return g_editingAddress=!1,$.ajax({type:"POST",url:"?addAddress=a",success:displayAddAddress,error:ajaxFailHandler}),!1}function hideAllPaymentDetails(){window.scrollTo(0,0),hideEl("paymentdetails_summary"),hideEl("paymentdetails_edit")}function loadPaymentDetails(){addLoadingOverlay("One moment, loading your card details..."),$.ajax({type:"POST",url:"?paymentDetails=a",success:displayPaymentDetails,error:ajaxFailHandler})}function displayPaymentDetails(data){hideAllParents(),hideAllPaymentDetails(),showEl("paymentdetails_summary"),showEl("paymentdetails"),el("paymentdetails_summary").innerHTML=data,removeLoadingOverlay(),equaliseHeights("#paymentdetails .card")}function editPayment(payment_id){$.ajax({type:"POST",url:"?displayeditpayment="+payment_id+"&type=update",success:displayEditPayment,error:ajaxFailHandler})}function displayEditPayment(data){hideAllParents(),hideAllPaymentDetails(),el("paymentdetails_edit").innerHTML=data,showEl("paymentdetails_edit"),showEl("paymentdetails")}function addPayment(){$.ajax({type:"POST",url:"?addPayment=a",success:displayEditPayment,error:ajaxFailHandler})}function savePayment(payment_id,type){$.ajax({type:"POST",url:"?storePayment="+type+"&id="+payment_id+"&number="+el("ma_pd_number").value+"&name_on_card="+el("ma_pd_name_on_card").value+"&card_type="+el("ma_pd_card_type").value+"&expiry_month="+el("ma_pd_expiry_month").value+"&expiry_year="+el("ma_pd_expiry_year").value,success:loadPaymentDetails,error:ajaxFailHandler})}function deletePayment(payment_id){$("#remove_payment_modal").modal("show"),el("remove_payment_id").value=payment_id}function confirmDeletePayment(){var payment_id=el("remove_payment_id").value;$("#remove_payment_modal").modal("hide"),$.ajax({type:"POST",url:"?deletePayment="+payment_id,success:loadPaymentDetails,error:ajaxFailHandler})}function hideAllWishlist(){window.scrollTo(0,0),hideEl("wishlist_summary")}function loadWishlist(){$.ajax({type:"POST",url:"?loadwishlist",success:displayWishlist,error:ajaxFailHandler})}function displayWishlist(data){var html=data.html,has_wishlist=data.has_wishlist;hideAllParents(),hideAllWishlist(),el("wishlist_summary").innerHTML=html,showEl("wishlist_summary"),showEl("wishlist");var wishlist_mh_elem=el("wishlist-icon");wishlist_mh_elem!==!1&&(wishlist_mh_elem.src=has_wishlist?"/img/like-heart-selected.png":"/img/masthead/heart.png"),equaliseHeights(".js_lister_tile_content"),equaliseHeights(".price"),equaliseHeights(".was-price"),equaliseHeights(".price-saving"),removeLoadingOverlay()}function deleteFromWishlist(prod_id,variant_id){addLoadingOverlay("One moment, updating your wishlist..."),$.ajax({type:"POST",url:"/myaccount?deletefromwishlist=1&prod_id="+prod_id+"&variant_id="+variant_id,success:loadWishlist,error:ajaxFailHandler})}function wishlistToBasket(prod_id,variant_id){addLoadingOverlay("One moment, updating your basket..."),$.ajax({type:"POST",url:"/myaccount?wishlisttobasket=1&prod_id="+prod_id+"&variant_id="+variant_id,success:wishlistUpdatePill,error:ajaxFailHandler})}function wishlistUpdatePill(){$.ajax({type:"POST",url:"/basket?action=getBasketItemCount",success:updateBasketPillCount,error:ajaxFailHandler}),loadWishlist()}function hideAllRefunds(){window.scrollTo(0,0),hideEl("refunds_overview")}function loadRefunds(){$.ajax({type:"POST",url:"?refunds=a",success:displayRefunds,error:ajaxFailHandler})}function displayRefunds(data){hideAllParents(),hideAllRefunds(),el("refunds_overview").innerHTML=data,showEl("refunds_overview"),showEl("refunds")}function hideAllCancellations(){window.scrollTo(0,0),hideEl("cancellations_overview")}function loadCancellations(){$.ajax({type:"POST",url:"?cancellations=a",success:displayCancellations,error:ajaxFailHandler})}function displayCancellations(data){hideAllParents(),hideAllCancellations(),el("cancellations_overview").innerHTML=data,showEl("cancellations_overview"),showEl("cancellations")}function resetCustomerPassword(){var password=el("ma_new_password").value,conf_password=el("ma_new_password_confirm").value,id=el("cid").value,data={p:password,pc:conf_password,id:id};$.ajax({type:"POST",url:"/reset",data:data,success:resetSuccess,error:ajaxFailHandler})}function resetSuccess(data){var json=JSON.parse(data);return"200"!=json.status?(el("reset_error").style.display="block",el("ma_new_password").value="",el("ma_new_password_confirm").value="",void(el("ma_update_password").disabled=!0)):(el("reset_form").style.display="none",el("reset_confirmation").style.display="block",void setTimeout(function(){resetContinue()},5e3))}function resetContinue(){return window.location.assign("/myaccount"),!1}function checkEmailExists(element){data={step:"emaillookup",email:element.value},$.ajax({type:"POST",url:"/login",data:data,success:showEmailExistsHelp,error:ajaxFailHandler})}function showEmailExistsHelp(data){data===!0?$("#helpBlock_email_exists").show():$("#helpBlock_email_exists").hide()}function disablePaste(e){e.preventDefault()}function onAddrCountryChange(input){$("#checkout_addr_validation_error").hide(),g_editingAddress||(hideAdditionalAddressFields(),clearAddressFields());var value=input.value;""===value&&(value="GB"),document.getElementById("checkout_address_country_flag").className="bg-"+value+"_flag";var value=!g_editingAddress&&input.value;$("#checkout_address_form input").each(function(){var form_field=$(this);form_field.removeClass("invalid_form_field").removeClass("valid_form_field"),jQuery.inArray(value,form_field.data("countries").split(","))>-1||g_editingAddress?form_field.show():form_field.hide()}),$("#checkout_save_address").hide(),"GB"!==value?($("#checkout_save_address").show(),$("#checkout_address_lookup").hide(),$("#checkout_address_lookup_wrapper").hide(),$("#checkout_address_lookup_notification").parent().parent().hide(),""==$("#addr_form_postcode_wrapper_alt").html()&&($("#addr_form_postcode_wrapper_alt").html($("#addr_form_postcode_wrapper").html()),$("#addr_form_postcode_wrapper").html("")),showAdditionalAddressFields()):($("#checkout_address_lookup").show(),$("#checkout_address_lookup_wrapper").show(),$("#checkout_enter_manual_address").show(),hideAdditionalAddressFields(),$("#checkout_address_lookup_notification").parent().parent().show(),""==$("#addr_form_postcode_wrapper").html()&&($("#addr_form_postcode_wrapper").html($("#addr_form_postcode_wrapper_alt").html()),$("#addr_form_postcode_wrapper_alt").html(""))),g_editingAddress&&($("#checkout_address_country").attr("disabled","disabled"),$("#checkout_address_postcode").attr("disabled","disabled")),populateCustomerAddrDetails()}function hideAdditionalAddressFields(){$("#checkout_address_firstname_error").hide(),$("#checkout_address_lastname_error").hide(),$("#checkout_address_contact_error").hide(),$("#checkout_address_number_error").hide(),$("#checkout_address_postcode_error").hide(),$("#checkout_address_street_error").hide(),$("#checkout_address_city_error").hide(),$("#checkout_save_address_error").hide(),$("#checkout_address_street").parent().parent().hide(),$("#checkout_address_organisation").parent().parent().hide(),$("#checkout_address_city").parent().parent().hide(),$("#checkout_address_lookup_notification").parent().parent().parent().show(),$("#checkout_save_address").hide(),$("#checkout_address_lookup_results").hide()}function showAdditionalAddressFields(){$("#checkout_address_lookup_empty").hide(),$("#checkout_address_firstname").parent().parent().show(),$("#checkout_address_lastname").parent().parent().show(),$("#checkout_address_contact").parent().parent().show(),$("#checkout_address_country").parent().parent().show(),$("#checkout_address_number").parent().parent().show(),$("#checkout_address_postcode").parent().parent().show(),$("#checkout_address_street").parent().parent().show(),$("#checkout_address_organisation").parent().parent().show(),$("#checkout_address_city").parent().parent().show(),$("#checkout_address_lookup_notification").parent().parent().hide(),$("#checkout_save_address").show(),$("#address_lookup_card").hide(),$("#checkout_enter_manual_address").hide()}function clearAddressFields(){$("#checkout_address_number").val(""),$("#checkout_address_postcode").val(""),$("#checkout_address_street").val(""),$("#checkout_address_organisation").val(""),$("#checkout_address_city").val("")}function populateCustomerAddrDetails(){void 0!==g_customerFirstname&&g_customerFirstname.length>0&&$("#checkout_address_firstname").val(g_customerFirstname),void 0!==g_customerLastname&&g_customerLastname.length>0&&$("#checkout_address_lastname").val(g_customerLastname),void 0!==g_customerContactNumber&&g_customerContactNumber.length>0&&$("#checkout_address_contact").val(g_customerContactNumber)}function lookupPostcode(){if("GB"!==$("#checkout_address_country").val())return!1;hideAdditionalAddressFields(),$("#checkout_addr_validation_error").hide(),$("#checkout_address_form .form-control").each(function(){$(this).removeClass("valid_form_field"),$(this).removeClass("invalid_form_field")}),$(".form_validation_box").hide();var postcode=$("#checkout_address_postcode").val().replace(/\s/g,"");if(0===postcode.length)return $("#checkout_enter_manual_address").hide(),$("#checkout_address_lookup_empty").show(),!1;var data={ajax:"postcodeLookup",postcode:postcode,buildingnamenumber:$("#checkout_address_number").val()};return $.ajax({type:"POST",url:"/checkout2/",data:data,success:renderPostcodeLookup,error:ajaxFailHandler}),!1}function renderPostcodeLookup(data){if($("#checkout_address_lookup_empty").hide(),$("#checkout_enter_manual_address").show(),0===data.address_arr.length)return $("#checkout_enter_manual_address").hide(),$("#checkout_address_lookup_empty").show(),!1;var html='<select class="form-control input-lg" id="address_form_postcode_results" onchange="loadPostcode( this )">';html+='<option value="">Please select address...</option>';for(var i=0;i<data.address_arr.length;i++){var address=data.address_arr[i];html+='<option value="'+address.udprn+'">'+address.display+"</option>"}$("#checkout_address_lookup_results").html(html);var notice='Please select your address from the list above, or <a class="hover" onclick="showAdditionalAddressFields()">Enter Address Manually</a>.';return data.no_number_match?notice="No matches found for "+$("#checkout_address_number").val()+" "+$("#checkout_address_postcode").val()+". Please select from addresses matching "+$("#checkout_address_postcode").val()+', retry the search, or <a class="hover" onclick="showAdditionalAddressFields()">Enter Address Manually</a>.':data.no_addresses&&(notice="No matches found for "+$("#checkout_address_number").val()+" "+$("#checkout_address_postcode").val()+'. Please retry the search, or <a class="hover" onclick="showAdditionalAddressFields()">Enter Address Manually</a>.'),$("#checkout_address_lookup_notification").html(notice),$("#checkout_address_lookup_results").show(),1===data.address_arr.length&&($("#address_form_postcode_results").val($("#address_form_postcode_results option:nth-child(2)").val()),loadPostcode(el("address_form_postcode_results"))),!1}function loadPostcode(input){var data={ajax:"loadAddress",udprn:input.value};$.ajax({type:"POST",url:"/checkout2/",data:data,success:populateAddressFields,error:ajaxFailHandler})}function populateAddressFields(data){$("#checkout_address_lookup_results, #checkout_enter_manual_address").hide();var namenumber="";null!==data.name&&null!==data.number?namenumber=data.name+" "+data.number:null!==data.name?namenumber=data.name:null!==data.number&&(namenumber=data.number),hideAdditionalAddressFields(),$("#checkout_address_udprn").val(data.udprn),$("#checkout_address_number").val(namenumber),$("#checkout_address_postcode").val(data.postcode),$("#checkout_address_street").val(data.street),$("#checkout_address_organisation").val(data.organisation),$("#checkout_address_city").val(data.city),$("#address_lookup_card_line_one").html(namenumber+" "+data.street),$("#address_lookup_card_city").html(data.city),$("#address_lookup_card_postcode").html(data.postcode),$("#address_lookup_card_organisation").html(data.organisation),$("#address_lookup_card_country").html(data.country),$("#checkout_address_country").parent().parent().hide(),$("#checkout_address_number").parent().parent().hide(),$("#checkout_address_postcode").parent().parent().hide(),$("#address_lookup_card").show(),$("#checkout_save_address").show()}function saveCustomerAddress(){$("#address_form_type").val();if(!checkFormValidity(el("checkout_address_form")))return $("#checkout_addr_validation_error").show(),$("#checkout_addr_no_addresses").hide(),!1;var is_edit=$("#checkout_address_id").val()>0,ajax_action=is_edit?"editCustomerAddress":"saveAddress",data={ajax:ajax_action,id:$("#checkout_address_id").val(),udprn:$("#checkout_address_udprn").val(),country_code:$("#checkout_address_country").val(),firstname:$("#checkout_address_firstname").val(),lastname:$("#checkout_address_lastname").val(),namenumber:$("#checkout_address_number").val(),contactnumber:$("#checkout_address_contact").val(),street:$("#checkout_address_street").val(),organisation:$("#checkout_address_organisation").val(),city:$("#checkout_address_city").val(),postcode:$("#checkout_address_postcode").val(),myaccount:!0};$("#checkout_addr_validation_error, #checkout_address_firstname_characters, #checkout_address_street_error_symbols, #checkout_address_postcode_error_symbols").hide();for(var property in data)if(data.hasOwnProperty(property)){var key=property,val=data[property];if("myaccount"!=key&&val.length){if(key.indexOf("firstname")>-1||key.indexOf("lastname")>-1){var regex=/^[^"]*$/;if(val.length&&regex.test(val))continue;return $("#checkout_addr_validation_error, #checkout_address_firstname_characters").show(),$("#checkout_addr_no_addresses").hide(),$("#checkout_address_lastname, #checkout_address_firstname").removeClass("valid_form_field"),!1}if(val.length){if(key.indexOf("contactnumber")>-1){var regex=/^[0-9\s]*$/;if(regex.test(val))continue;return $("#checkout_addr_validation_error").show(),$("#checkout_addr_no_addresses").hide(),!1}var regex=/^[^"]*$/;if(key.indexOf("namenumber")>-1||key.indexOf("postcode")>-1){if(regex.test(val))continue;return $("#checkout_address_number, #checkout_address_postcode").removeClass("valid_form_field").addClass("invalid_form_field"),$("#checkout_addr_validation_error, #checkout_address_postcode_error_symbols").show(),$("#checkout_addr_no_addresses").hide(),!1}if(key.indexOf("street")>-1||key.indexOf("organisation")>-1||key.indexOf("city")>-1){if(regex.test(val))continue;return $("#checkout_address_street, #checkout_address_organisation, #checkout_address_city").removeClass("valid_form_field").addClass("invalid_form_field"),$("#checkout_addr_validation_error, #checkout_address_street_error_symbols").show(),$("#checkout_addr_no_addresses").hide(),!1}if(!regex.test(val))return $("#checkout_addr_validation_error").show(),$("#checkout_addr_no_addresses").hide(),!1}}}return $.ajax({type:"POST",url:"/checkout2/",data:data,success:onAddressSaveComplete,error:ajaxFailHandler}),$("#checkout_address_firstname_characters").hide(),$("#checkout_address_street").hide(),!1}function onAddressSaveComplete(data){return g_editingAddress=!1,showElement("addressbook"),!1}function loadInterests(){$.ajax({type:"POST",url:"?loadinterests",success:renderInterestsOpts,error:ajaxFailHandler})}function renderInterestsOpts(data){var html=data.html,interests=data.interest_arr;for(hideAllParents(),el("interest_summary").innerHTML=html,i=0;i<interests.length;i++){var interest=interests[i],card=document.getElementById(interest+"-card");"input"==card.tagName.toLowerCase()?card.checked=!0:card.click(),document.getElementById(interest+"-pref").classList.toggle("selected")}showEl("interest_summary"),showEl("interest"),removeLoadingOverlay()}function updateInterests(manual){if(g_madeChange===!0){for(var interest_opt=document.querySelectorAll("input.hidden-check"),interest_arr=[],i=0;i<interest_opt.length;i++){var interest=interest_opt[i];interest.checked===!0&&interest_arr.push(interest.name)}var data={interest:interest_arr};addLoadingOverlay("One moment, updating your interests..."),1==manual&&$.ajax({type:"POST",url:"?editinterests",data:data,success:loadInterests,error:ajaxFailHandler}),g_madeChange=!1}}function toggleInterest(source,interest){var card=el(source),interest_check=el(interest);interest_check.checked=!interest_check.checked,card.classList.toggle("selected"),g_madeChange=!0;var str=$(card).find("img").attr("src");if(!str)return!1;var n=str.lastIndexOf("/"),result=str.substring(n+1),orange="";card.classList.contains("selected")&&(orange="orange/"),$(card).find("img").attr("src","/img/marketing_icons/"+orange+result)}function toggleAdvancedInterest(){g_madeChange=!0}function saveInterests(){for(var interest_opt=document.querySelectorAll("input.hidden-check"),interest_arr=[],i=0;i<interest_opt.length;i++){var interest=interest_opt[i];interest.checked===!0&&interest_arr.push(interest.name)}var data={interest:interest_arr,mp_opted_in:el("login_interests_mp").checked};addLoadingOverlay("One moment, updating your interests..."),$.ajax({type:"POST",url:"/myaccount?saveinterests",data:data,success:onInterestSave,error:ajaxFailHandler})}function onInterestSave(data){return data?void window.location.replace("/"+data):void window.location.replace("/")}var g_inputChars=[8,32,48,49,50,51,52,53,54,55,56,57,59,61,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111,163,173,188,190,191,192,219,220,221,222],g_cancelledItems=[],g_returnedItems=[],g_editingAddress=!1,g_madeChange=!1;window.onbeforeunload=function(e){updateInterests(!1)};