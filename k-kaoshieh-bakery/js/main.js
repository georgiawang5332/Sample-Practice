<!--擋Hinet廣告用-->
//先用Open物件來替代window.open()
var Open = window.open;
//覆寫window.open()變成回傳window本身
window.open = function(){return window;};

/*footer內右邊側邊欄位*/
/*
var el = document.getElementById('blk2');
window.onscroll = function () {
    if (window.pageYOffset > -50) {
        el.classList.add("blk3");
    } else {
        el.classList.remove("blk3");
    }
};
*/