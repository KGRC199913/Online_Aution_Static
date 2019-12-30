$("#editbtn").on('click', firstClick)

function firstClick() {
    $(this).text('Save');
    $("#editbtn").removeClass("btn-primary");
    $("#editbtn").addClass("btn-danger");
    $("#editbtn").off('click').on('click', secondClick)

    $("#fname").removeAttr("disabled");
    $("#fname").attr("required", true);

    $("#lname").removeAttr("disabled");
    $("#lname").attr("required", true);

    $("#email").removeAttr("disabled");
    $("#email").attr("required", true);

    $("#pnumber").removeAttr("disabled");
    $("#pnumber").attr("required", true);

    $("#bday").removeAttr("disabled");
    $("#bday").attr("required", true);

    $("#address").removeAttr("disabled");
    $("#address").attr("required", true);

    $("#pwd-su").removeAttr("disabled");
    $("#pwd-su").attr("required", true);

    $("#pwdcf").removeAttr("disabled");
    $("#pwdcf").attr("required", true);
}

function secondClick() {
    $(this).text('Edit');
    $("#editbtn").removeClass("btn-danger");
    $("#editbtn").addClass("btn-primary");
    $("#editbtn").off('click').on('click', firstClick)

    $("#fname").removeAttr("required");
    $("#fname").attr("disabled", true);

    $("#lname").removeAttr("required");
    $("#lname").attr("disabled", true);

    $("#email").removeAttr("required");
    $("#email").attr("disabled", true);

    $("#pnumber").removeAttr("required");
    $("#pnumber").attr("disabled", true);

    $("#bday").removeAttr("required");
    $("#bday").attr("disabled", true);

    $("#address").removeAttr("required");
    $("#address").attr("disabled", true);

    $("#pwd-su").removeAttr("required");
    $("#pwd-su").attr("disabled", true);

    $("#pwdcf").removeAttr("required");
    $("#pwdcf").attr("disabled", true);
}