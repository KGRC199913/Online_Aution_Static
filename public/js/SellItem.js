$('#itemImg').change(function (e) {
    var fReader = new FileReader();
    fReader.onload = function (e) {
        document.getElementById('previewPrimaryImage').src = e.target.result;
    };
    fReader.readAsDataURL(this.files[0]);
});