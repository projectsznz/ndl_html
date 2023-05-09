/* exported appendSelectOptions */

// Function to fetch Dropdown data set to default option
function appendSelectOptions(url, requestOptions, selector, opt_val, opt_nm, form_name){
    // Drivers list Dropdown
   fetch("http://assistlysolutions.com/ndl/"+url, requestOptions)
   .then(response => response.json())
   .then(result => {
       console.log(result)
       var $select = $(selector);
       $select.html('');
       let route_data = result.data.data
       $select.append('<option value="" selected="selected">Nothing Selected</option>');
       $.each(route_data, function(index, value) {
           //Appending options to the dropdown
           // console.log(index, value)
           $select.append('<option value="' + value[opt_val]+ '"  selected="false">' + value[opt_nm] + '</option>');
       });
       $(".selectpicker").selectpicker('refresh');
       $(".selectpicker").selectpicker('val','');
   })
   .catch(error => {
       console.log('error', error)
       $('.modal-content-message').text(error)
       $('#Result-Message').modal('toggle')
   })
   .finally(() => document.getElementById(form_name).reset())

}

function appendSelectOptionsList(url, requestOptions, selector, opt_val, opt_nm, form_name){
    // Drivers list Dropdown
   fetch("http://assistlysolutions.com/ndl/"+url, requestOptions)
   .then(response => response.json())
   .then(result => {
       console.log(result)
       var $select = $(selector);
       $select.html('');
       let route_data = result.data
       $select.append('<option value="" selected="selected">Nothing Selected</option>');
       $.each(route_data, function(index, value) {
           //Appending options to the dropdown
           // console.log(index, value)
           $select.append('<option value="' + value[opt_val]+ '"  selected="false">' + value[opt_nm] + '</option>');
       });
       $(".selectpicker").selectpicker('refresh');
       $(".selectpicker").selectpicker('val','');
   })
   .catch(error => {
       console.log('error', error)
       $('.modal-content-message').text(error)
       $('#Result-Message').modal('toggle')
   })
   .finally(() => document.getElementById(form_name).reset())

}