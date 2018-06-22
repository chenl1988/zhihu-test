/* 换比例截图部分图片 */
export function resizeImg(img_){
    let parent = img_.target.parentNode;

    var width = parent.offsetWidth;
    var height = parent.offsetHeight;
    var img = new Image();

    img.src = img_.target.getAttribute("src");
    var scale = Math.max(width / img_.target.offsetWidth, height / img_.target.offsetHeight);
    var newWidth = img_.target.offsetWidth * scale;
    var newHeight = img_.target.offsetHeight * scale;

    img_.target.width = newWidth;
    img_.target.height = newHeight;
    img_.target.style.marginLeft = (width - newWidth) / 2 + "px";
    img_.target.style.marginTop = (height - newHeight) / 2 + "px";

    parent.style.width = width;
    parent.style.height = height;
    parent.style.overflow = "hidden";
}