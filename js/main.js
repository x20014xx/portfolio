jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['img/DSC03160.jpg','img/img13.jpg','img/img14.jpg'], // 切り替える背景画像を指定
        interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    });
});
