$('#categoryDropdownItem').on('click', function () {
    $('#adminManageContent').html("{{>categoryListAdmin}}");
});
$('#productDropdownItem').on('click', function () {
    alert($(this).text());
});
$('#userDropdownItem').on('click', function () {
    alert($(this).text());
});