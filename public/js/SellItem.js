$(document).ready(function () {
    var editor = new FroalaEditor('#itemDesc', {
        height: 400,
    });
})

$('#itemImg').change(function (e) {

    var fReader = new FileReader();
    fReader.onload = function (e) {
        document.getElementById('previewPrimaryImage').src = e.target.result;
    };
    fReader.readAsDataURL(this.files[0]);
});