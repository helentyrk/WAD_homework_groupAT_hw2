$(function() {
    $.get("https://api.npoint.io/5b1df3d15ee8ba9cfa9a", function(posts) {
        for (post of posts){
            let div = $('<li>');
            let avatar = $('<img class="user">').attr('src', post.avatar);
            let img = $('<img class="image">').attr('src', post.img);
            let date = $('<p id= "date_time">').text(post.date_time);
            let user = $('<h3>').text(post.user);
            let body = $('<p class= "text">').text(post.text);
            let button = $('<button type="like">').text("Like");

            div.append(date);
            div.append(avatar);
            div.append(user);
            div.append(img);
            div.append(body);
            div.append(button);

            $('ul').append(div)
            

        }
    })
    
});

function openDropdown() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}
