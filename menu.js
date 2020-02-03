

console.log("log");

var menu_json = {"About Me": "index.html"
, "현실" : "menu1.html"
,"꿈": "menu2.html"
,"목표": "menu3.html"
,"성과":"menu4.html"
,"명언": "wise_saying.html"
,"좋아하는 것": "menu5.html"
,"parallax scrolling" : "parallax.html"
,"괜찮은 레이아웃1": "layout1.html"
,"프런트테스트" : "front_test.html"
,"타임라인":"timeline.html"
,"나의직업 타임라인": "timeline_edit.html"
}

// 메뉴 생성
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
