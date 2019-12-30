$('#categoryDropdownItem').on('click', function () {
    $('#adminManageContent').html(`
    <div class="row">
        <div class="col-lg-4 col-sm-12">
            <button id="add-btn" class="btn btn-floating deep-purple px-1"><img src="/asset/icon/1x/add.png" alt="Add"></button>
        </div>
        <div class="col-lg-7 col-sm-12" style="margin-top: 18px; margin-right: 10px">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </div>    
    </div>    
    <table class="table">
    <thead style="border-top: 0.5px solid black">
    <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Subcategory</th>
        <th scope="col">Control</th>
    </tr>
    </thead>
    <tbody id="category-table-body">
    <tr>
        <th scope="row">1</th>
        <td>Electronics</td>
        <td>Smartphone</td>
        <td style="padding: 10px !important;">
        <div>
            <button class="btn btn-info px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/delete.png" alt="Delete"></button>
            <button class="btn btn btn-success px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/update.png" alt="Update"></button> 
        </div>
        </td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Electronics</td>
        <td>Laptop</td>
        <td style="padding: 10px !important;">
        <div>
            <button class="btn btn-info px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/delete.png" alt="Delete"></button>
            <button class="btn btn btn-success px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/update.png" alt="Update"></button> 
        </div>
        </td>
    </tr>
    </tbody>

</table>`);
});
$('#productDropdownItem').on('click', function () {
    $('#adminManageContent').html(`
    <div class="row">
        <div class="col-lg-4 col-sm-12">
            <button id="add-btn" class="btn btn-floating deep-purple px-1"><img src="/asset/icon/1x/add.png" alt="Add"></button>
        </div>
        <div class="col-lg-7 col-sm-12" style="margin-top: 18px; margin-right: 10px">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </div>    
    </div>    
    <table class="table">
    <thead style="border-top: 0.5px solid black">
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Category</th>
        <th scope="col">Subcategory</th>
        <th scope="col">Item Name</th>
        <th scope="col">Seller</th>
        <th scope="col">Control</th>
    </tr>
    </thead>
    <tbody id="category-table-body">
    <tr>
        <th scope="row">1</th>
        <th scope="col">Electronics</th>
        <th scope="col">Smartphone</th>
        <th scope="col">Pixel 2 XL</th>
        <th scope="col">xxCATxx</th>
        <td style="padding: 10px !important;">
        <div>
            <button class="btn btn-info px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/delete.png" alt="Delete"></button>
            <button class="btn btn btn-success px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/update.png" alt="Update"></button> 
        </div>
        </td>
    </tr>
        <tr>
        <th scope="row">2</th>
        <th scope="col">Electronics</th>
        <th scope="col">Smartphone</th>
        <th scope="col">Pixel 3 XL</th>
        <th scope="col">xxCATxx</th>
        <td style="padding: 10px !important;">
        <div>
            <button class="btn btn-info px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/delete.png" alt="Delete"></button>
            <button class="btn btn btn-success px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/update.png" alt="Update"></button> 
        </div>
        </td>
    </tr>
    </tbody>
</table>`);
});
$('#userDropdownItem').on('click', function () {
    $('#adminManageContent').html(`
    <div class="row">
        <div class="col-lg-4 col-sm-12">
            <button id="add-btn" class="btn btn-floating deep-purple px-1"><img src="/asset/icon/1x/add.png" alt="Add"></button>
        </div>
        <div class="col-lg-7 col-sm-12" style="margin-top: 18px; margin-right: 10px">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </div>    
    </div>    
    <table class="table">
    <thead style="border-top: 0.5px solid black">
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Username</th>
        <th scope="col">Type</th>
        <th scope="col">Email</th>
        <th scope="col">Control</th>
    </tr>
    </thead>
    <tbody id="category-table-body">
    <tr>
        <th scope="row">1</th>
        <th scope="col">Admin</th>
        <th scope="col">admin</th>
        <th scope="col">admin@example.com</th>
        <td style="padding: 10px !important;">
        <div>
            <button class="btn btn-info px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/delete.png" alt="Delete"></button>
            <button class="btn btn btn-success px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/update.png" alt="Update"></button> 
        </div>
        </td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <th scope="col">xxxCATxxx</th>
        <th scope="col">seller</th>
        <th scope="col">cutecat@abc.xyz</th>
        <td style="padding: 10px !important;">
        <div>
            <button class="btn btn-info px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/delete.png" alt="Delete"></button>
            <button class="btn btn btn-success px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/update.png" alt="Update"></button> 
        </div>
        </td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <th scope="col">meg</th>
        <th scope="col">bidder</th>
        <th scope="col">meg@ghi.mno</th>
        <td style="padding: 10px !important;">
        <div>
            <button class="btn btn-info px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/delete.png" alt="Delete"></button>
            <button class="btn btn btn-success px-1" style="padding: 5px !important;"><img src="/asset/icon/1x/update.png" alt="Update"></button> 
        </div>
        </td>
    </tr>
    </tbody>
</table>`);
});
