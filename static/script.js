function deleteUser(userID) {
    $.ajax({
        type: 'DELETE',
        url: '/deleteUser/' + userID,
        success: function () {
            alert("User Deleted !");
            window.location.href = "/";
        }
    });
}