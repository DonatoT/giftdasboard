var Delete = document.querySelector('.delete');
Delete.addEventListener("click", () => {
    swal({
        title: "Delete row ?",
        text: "This action cannot be undone. Do you want to continue?",
        dangerMode: true,
        buttons: {
            cancel: true,
            confirm: {
                text: "Delete row",
                value: true, 
            },
        }
    }).then(function (isConfirm) {
        if (isConfirm) {
            swal({
                title: "row deleted",
                icon: 'success',
            }).then(function () {
                Delete.parentElement.parentElement.replaceChild();
            });
        }
        else{
            swal("Delete cancelled")
        }
    })

});

