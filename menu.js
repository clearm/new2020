

console.log("log");

var menu_json = {"About Me": "index.html"
, "현실" : "menu1.html"
,"꿈": "menu2.html"
,"목표": "menu3.html"
,"성과":"menu4.html"
}

function fn_makeMenu(selected_key)
{
    var menu_li = '';
    $.each(menu_json, function(key,val) {
        var sel = (key == selected_key) ? "active" : "";

        menu_li += '<li class="nav-item"><a class="nav-link '+sel+'" href="'+val+'"> '+key+'</a></li>';
    });

    $("#collapsibleNavbar ul > *").remove();
    $("#collapsibleNavbar ul ").append(menu_li);
}

fn_makeMenu(selected_menu);
