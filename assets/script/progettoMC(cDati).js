function cDati(CountNB) {

    this.CountNB = CountNB; //questo per ora non serve e forse non servirà

    this.FirstClicked = true;
    this.First = undefined;
    this.Second = undefined;
    this.ClickIntro = true;

    this.Introduction = function() {
        this.ClickIntro = !this.ClickIntro;
    }

    this.Zoom = function(i) {
        if(this.FirstClicked) this.First = i; 
        else this.Second = i; 
        this.FirstClicked = !this.FirstClicked;
    }

}