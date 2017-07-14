/**
 * Created by Iryna_Petrenko1 on 7/14/2017.
 */



function View() {
    this.imgSrc=document.querySelector("img");
    this.countOfLikes=document.querySelector("#count-likes");
    let addLikesButton=document.querySelector("#like-add");
    console.log(addLikesButton);
    const nextButton=document.querySelector("#next");
    this.navigateImgHandler=function (handler) {
        nextButton.addEventListener("click", handler);
    };

    this.addLikeHandler=function (handler) {
        addLikesButton.addEventListener("click", handler);
    };
    this.addLikes=function (countOfLikes) {
        this.countOfLikes.innerHTML=""+countOfLikes;
    };
    this.changeData=function (imgSrc, likes) {
        this.imgSrc.setAttribute("src", imgSrc);
        this.countOfLikes.innerHTML=likes;

    };

}

