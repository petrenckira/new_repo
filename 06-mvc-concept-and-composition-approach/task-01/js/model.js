/**
 * Created by Iryna_Petrenko1 on 7/14/2017.
 */
function Model() {
    this.data = [
        {
            src: "img/animals.jpg",
            countOfLikes: 0
        },
        {
            src: "img/dog.jpg",
            countOfLikes: 0
        },
        {
            src: "img/nature.jpg",
            countOfLikes: 0
        }

    ];
    this.currentCounts=0;
    this.setLike=function () {
        this.data[this.currentCounts].countOfLikes+=1;
    };
    this.getLike=function () {
        return this.data[this.currentCounts].countOfLikes;
    };
    this.setImg=function () {
            this.nextImg();
    };
    this.getImg=function () {
        return this.data[this.currentCounts].src;
    };
    this.nextImg=function () {
        if(this.currentCounts>=2){
            this.currentCounts=0;
        }
        else
            this.currentCounts++;

    };

}
