/**
 * Created by Iryna_Petrenko1 on 7/14/2017.
 */
function Controller(view, model) {

    view.navigateImgHandler(HandleNavigateImg.bind(this));
    view.addLikeHandler(HandleAddLikes.bind(this));
    function HandleAddLikes () {
        model.setLike();
        const countLikesGet = model.getLike();
        view.addLikes(countLikesGet);
    }
    function HandleNavigateImg() {
        model.setImg();
        const imgSrc=model.getImg();
        const countLikesGet = model.getLike();
        view.changeData(imgSrc,countLikesGet);
    }
}



