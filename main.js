const Header = document.querySelector('header')
const Heading = document.querySelector('.Heading h1')
const Welcome = document.querySelector('.Welcome')
const LadyPhoto = document.querySelector('.LadyPhoto')
const FirstMainText = document.querySelector('.Welcome .sticky-div .FirstSide h3')
const SecondMainText = document.querySelector('.Welcome .sticky-div .SecondSide h3')
const BackgroundTextOne = document.querySelector('.Welcome .sticky-div .FirstSide p')
const BackgroundTextTwo = document.querySelector('.Welcome .sticky-div .SecondSide p')
const StickyDiv = document.querySelector('.Welcome .sticky-div')
const CentralSide = document.querySelector('.Welcome .sticky-div .CentralSide')
const BatteryFiller = document.querySelector('.Welcome .sticky-div .CentralSide .Battery .Filler')
const LadyText = document.querySelector('.LadyPhoto h2')
const LadyPicture = document.querySelector('.LadyPhoto img')
const PhonesParent = document.querySelector('.IphonesMeans')
const PhonesHeading = document.querySelector('.IphonesMeans h2')
const PhonesSecondary = document.querySelector('.IphonesMeans p')
const PhonesPictures = document.querySelectorAll('.IphonesMeans .Pictures img')

const SliderParent = document.querySelector('.SliderParent')
const SliderEffect = document.querySelector('.SliderParent .box')
const ControlInputs = document.querySelectorAll('.SliderParent .PartOne .List:nth-child(2) .item:nth-child(2) .Radios input')
const FirstBigs = document.querySelectorAll('.SliderParent .big')
const SliderItemsOne = document.querySelectorAll('.SliderParent .item')
const OpacitySlide = document.querySelector('.SliderParent .PartTwo .item:nth-child(1) img')
const CentralText = document.querySelector('.SliderParent .PartOne .List:nth-child(2) .item:nth-child(2) h2')
const SpecialOne = document.querySelector('.SliderParent .PartOne .List:nth-child(3) .item:nth-child(2) img')
const PhonesFirstSlide = document.querySelector('.SliderParent .PartOne .List:nth-child(3) .item:first-child img')
const FrontOfPhone = document.querySelector('.SliderParent .PartTwo .item:nth-child(2) img')
const FromSide = document.querySelector('.SliderParent .PartOne .List:nth-child(2) .item:first-child img')

const SecondSlider = document.querySelector('.HardSlider')
const SliderItemsTwo = document.querySelectorAll('.HardSlider .PhonesSlider .item')
const SliderControlers = document.querySelectorAll('.HardSlider .Controls button')
const ScrollTexts = document.querySelectorAll('.HardSlider .text .ScrollText')
const EasiestThing = document.querySelector('.Easieast h2')

const DetectorPar = document.querySelector('.Detector')
const DetectorButton = document.querySelector('.Detector .box')
const DetectorArrow = document.querySelector('.Detector button')
const DetectorText = document.querySelector('.Detector p')

const All = document.querySelector('body > .box')
const Rightone = document.querySelector('.RightOne')
const LeftGoer = document.querySelector('.RightOne .all')

const CancelR = document.querySelector('.RightOne .all .undo-r')
const LineR = document.querySelector('.lineof')

Rightone.onscroll = () => {
    LeftGoer.style.left = Math.max(-Rightone.scrollTop * 1.25, -1538) + 'px';
    LineR.style.background = `linear-gradient(90deg, #a3a3a3 ${Math.min(Rightone.scrollTop * .105, 100)}%, #dbdbdb ${Math.min(Rightone.scrollTop * .105, 100)}%)`;
}

let bool = true;
let pbool = true;
let Counter = 0;

DetectorButton.onclick = () => {
    All.style.translate = `-100% 0`;
    Rightone.style.left = 0;
    document.body.style.overflow = 'hidden';
}
CancelR.onclick = () => {
    All.style.translate = `0 0`;
    Rightone.style.left = 100 + '%';
    document.body.style.overflow = 'visible';
}

SliderControlers[1].onclick = () => {
    if (bool) {
        if (Counter < 5) {
            Counter++
            if (Counter <= 4) {
                SliderItemsTwo[Counter - 1].style.opacity = 0;
                SliderItemsTwo[Counter - 1].style.scale = .8;
                SliderItemsTwo[Counter + 1].style = '--loc: 1;';
                SliderItemsTwo[Counter].style = '--loc: 0;';
            } else {
                SliderItemsTwo[Counter].style = '--loc: 0;';
                SliderItemsTwo[Counter - 1].style = '--loc: 0;';
                SliderItemsTwo[Counter - 1].style.opacity = 0;
                SliderItemsTwo[Counter - 1].style.scale = .8;
            }
            SliderControlers[0].disabled = false;
        } else {
            Counter = 5;
        }
        if (Counter == 5) {
            SliderControlers[1].disabled = true;
        }
        bool = false;
        setTimeout(() => {
            bool = true;
        }, 350);
    } else {
        return false;
    }
}
SliderControlers[0].onclick = () => {
    if (pbool) {
        setTimeout(() => {
            pbool = true;
        }, 350);
        pbool = false;
        Counter--
        if (Counter > 0) {
            SliderControlers[1].disabled = false;
            SliderItemsTwo[Counter - 1].style = '--loc: 0;';
            SliderItemsTwo[Counter - 1].style.opacity = 1;
            SliderItemsTwo[Counter - 1].style.scale = 1;
            SliderItemsTwo[Counter].style = '--loc: 1;';
            SliderItemsTwo[Counter + 1].style = '--loc: 2;';
            SliderItemsTwo[Counter + 2].style = '--loc: 3;';
            SliderItemsTwo[Counter + 3].style = '--loc: 4;';
            SliderItemsTwo[Counter + 4].style = '--loc: 5;';
            SliderItemsTwo[Counter + 5].style = '--loc: 6;';
            SliderItemsTwo[0].style.opacity = 0;
        } else {
            Counter = 0;
        }
        if (Counter == 0) {
            SliderControlers[0].disabled = true;
        }
    } else {
        return false;
    }
}

let SliderArr1 = ['img/gn1.jpg', 'img/gn2.jpg', 'img/gn3.jpg', 'img/gn4.jpg', 'img/gn5.jpg']
let SliderArr2 = ['Blue', 'Purple', 'Black', 'StarLight', 'Red']
let SliderArr3 = ['img/gr1.jpg', 'img/gr2.jpg', 'img/gr3.jpg', 'img/gr4.jpg', 'img/gr5.jpg']
let SliderArr4 = ['img/gt1.jpg', 'img/gt2.jpg', 'img/gt3.jpg', 'img/gt4.jpg', 'img/gt5.jpg']
let SliderArr5 = ['img/gl1.jpg', 'img/gl2.jpg', 'img/gl3.jpg', 'img/gl4.jpg', 'img/gl5.jpg']
let SliderArr6 = ['img/gb1.jpg', 'img/gb2.jpg', 'img/gb3.jpg', 'img/gb4.jpg', 'img/gb5.jpg']
let cur = 0;
ControlInputs.forEach((item, index) => {
    item.onchange = () => {
        FirstBigs.forEach((elem, count) => {
            elem.style.left = -[index * 100] + '%';
        })
        cur += 360;
        OpacitySlide.style.opacity = 0;
        CentralText.style.transform = `perspective(40rem) rotateY(${cur}deg)`
        SpecialOne.style.translate = '100% 100%';
        PhonesFirstSlide.style.translate = '0 100%';
        FromSide.style.translate = '0 100%';
        FrontOfPhone.style.translate = '0 100%';
        setTimeout(() => {
            OpacitySlide.src = SliderArr1[index];
            OpacitySlide.style.opacity = 1;
            CentralText.innerText = SliderArr2[index];
            PhonesFirstSlide.src = SliderArr4[index];
            PhonesFirstSlide.style.translate = '0 0';
            SpecialOne.src = SliderArr3[index];
            SpecialOne.style.translate = '0 0';
            FromSide.src = SliderArr5[index];
            FromSide.style.translate = '0 0';
            FrontOfPhone.src = SliderArr6[index];
            FrontOfPhone.style.translate = '0 0';
        }, 500);
    }
})
function an() {
    requestAnimationFrame(an);
    if (-scrollY * .2 >= -50) {
        Header.style.top = -scrollY * .2 + 'px';
    } else {
        Header.style.top = -3.2 + 'rem';
    }
    if (73 + scrollY * .035 <= 100) {
        Header.style.width = 73 + scrollY * .035 + 'vw';
    } else {
        Header.style.width = 100 + 'vw';
    }
    if (scrollY >= Welcome.offsetTop / 10) {
        Heading.style.opacity = 1 - (scrollY - Welcome.offsetTop / 10) * .003;
    }
    if (scrollY >= Welcome.offsetTop / 5.5) {
        if (45 - (scrollY - Welcome.offsetTop / 5.5) * .04 >= 28) {
            FirstMainText.style.scale = .15 + (scrollY - Welcome.offsetTop / 5.5) * .00195;
            FirstMainText.style.top = 45 - (scrollY - Welcome.offsetTop / 5.5) * .05 + '%';
        } else {
            if (.85 - (scrollY - Welcome.offsetTop / 1.2) * .00195 >= .15) {
                FirstMainText.style.scale = .9 - (scrollY - Welcome.offsetTop / 1.2) * .00195;
            } else {
                FirstMainText.style.scale = .15;
            }
            FirstMainText.style.top = 26 + (scrollY - Welcome.offsetTop / 1.2) * .05 + '%';
        }
        if (40 - (scrollY - Welcome.offsetTop / 5.5) * .055 >= 17) {
            SecondMainText.style.top = 40 - (scrollY - Welcome.offsetTop / 5.5) * .055 + '%';
            SecondMainText.style.scale = .15 + (scrollY - Welcome.offsetTop / 5.5) * .00195;
        } else {
            if (.9 - (scrollY - Welcome.offsetTop / 1.2) * .00195 >= .15) {
                SecondMainText.style.scale = .85 - (scrollY - Welcome.offsetTop / 1.2) * .00195;
            } else {
                SecondMainText.style.scale = .15;
            }
            SecondMainText.style.top = 20 + (scrollY - Welcome.offsetTop / 1.2) * .055 + '%';
        }
    }
    if (scrollY >= Welcome.offsetTop / .8) {
        if (80 - (scrollY - Welcome.offsetTop / .8) * .09 >= 53) {
            BackgroundTextOne.style.left = 80 - (scrollY - Welcome.offsetTop / .8) * .09 + '%';
            CentralSide.style.opacity = 0;
            CentralSide.style.scale = 0;
            StickyDiv.style.gap = 5 + 'rem';
        } else {
            if (53 + (scrollY - Welcome.offsetTop / .6) * .15 <= 80) {
                BackgroundTextOne.style.left = 54 + (scrollY - Welcome.offsetTop / .6) * .15 + '%';
            } else {
                BackgroundTextOne.style.left = 80 + '%';
            }
            StickyDiv.style.gap = 5 + (scrollY - Welcome.offsetTop / .6) * .1 + 'rem';
            CentralSide.style.opacity = (scrollY - Welcome.offsetTop / .6) * .008;
            BatteryFiller.style.width = (scrollY - Welcome.offsetTop / .6) * .11 + '%';
            if ((scrollY - Welcome.offsetTop / .6) * .0015 <= 1.1) {
                CentralSide.style.scale = (scrollY - Welcome.offsetTop / .6) * .0015;
                CentralSide.style.transform = `perspective(40rem) rotateY(${-(scrollY - Welcome.offsetTop / .6) * .035}deg) rotateX(${(scrollY - Welcome.offsetTop / .6) * .03}deg) rotate(${-(scrollY - Welcome.offsetTop / .6) * .015}deg)`
            } else {
                CentralSide.style.scale = 1.03 + (scrollY - Welcome.offsetTop / .6) * .0001;
                CentralSide.style.transform = `perspective(40rem) rotateY(${9 - (scrollY - Welcome.offsetTop / .6) * .047}deg) rotateX(${20 + (scrollY - Welcome.offsetTop / .6) * .003}deg) rotate(${-(scrollY - Welcome.offsetTop / .6) * .015}deg)`
            }
        }
        if (50 - (scrollY - Welcome.offsetTop / .8) * .09 >= 23) {
            BackgroundTextTwo.style.right = 50 - (scrollY - Welcome.offsetTop / .8) * .09 + '%';
        } else {
            if (23 + (scrollY - Welcome.offsetTop / .6) * .15 <= 50) {
                BackgroundTextTwo.style.right = 24 + (scrollY - Welcome.offsetTop / .6) * .15 + '%';
            } else {
                BackgroundTextTwo.style.right = 50 + '%';
            }
        }
    }
    if (scrollY >= LadyPhoto.offsetTop / 1.35) {
        CentralSide.style.transform = `perspective(40rem) rotateY(${-35 + (scrollY - LadyPhoto.offsetTop / 1.35) * .115}deg) rotateX(${22 - (scrollY - LadyPhoto.offsetTop / 1.35) * .05}deg) rotate(${-14 + (scrollY - LadyPhoto.offsetTop / 1.35) * .015}deg)`
        LadyText.style.scale = Math.max(1, 1.15 - (scrollY - LadyPhoto.offsetTop / 1.1) * .0005);
    }
    if (scrollY >= LadyPhoto.offsetTop / 1.1) {
        LadyText.style.transform = `perspective(40rem) rotateX(${Math.max(-15, 35 - (scrollY - LadyPhoto.offsetTop / 1.1) * .07)}deg)`
        LadyPicture.style.top = Math.max(3, 30 - (scrollY - LadyPhoto.offsetTop / 1.1) * .04) + '%';
    }
    if (scrollY >= PhonesParent.offsetTop / 1.17) {
        PhonesSecondary.style.opacity = (scrollY - PhonesParent.offsetTop / 1.17) * .001;
        if (scrollY <= PhonesParent.offsetTop / 1.1) {
            PhonesHeading.style.scale = Math.min(1 + (scrollY - PhonesParent.offsetTop / 1.17) * .005, 2.2)
        } else {
            PhonesPictures[2].style.top = Math.max(30 - (scrollY - PhonesParent.offsetTop / 1.09) * .24, 0) + '%';
            if (2.2 - (scrollY - PhonesParent.offsetTop / 1.1) * .005 >= 1) {
                PhonesHeading.style.scale = Math.max(2.2 - (scrollY - PhonesParent.offsetTop / 1.1) * .005, 1);
            } else {
                PhonesHeading.style.translate = `0 ${Math.max(-15, 25 - (scrollY - PhonesParent.offsetTop / 1.05) * .3)}%`
            }
        }
        PhonesHeading.style.transform = `perspective(12rem) rotateX(${Math.min(-45 + (scrollY - PhonesParent.offsetTop / 1.17) * .12, 0)}deg)`
    }
    if (scrollY >= PhonesParent.offsetTop / 1.08) {
        PhonesPictures[3].style.top = Math.max(50 - (scrollY - PhonesParent.offsetTop / 1.08) * .24, 0) + '%';
    }
    if (scrollY >= PhonesParent.offsetTop / 1.06) {
        PhonesPictures[1].style.top = Math.max(50 - (scrollY - PhonesParent.offsetTop / 1.06) * .24, 0) + '%';
    }
    if (scrollY >= PhonesParent.offsetTop / 1.04) {
        PhonesPictures[4].style.top = Math.max(50 - (scrollY - PhonesParent.offsetTop / 1.04) * .3, 5) + '%';
    }
    if (scrollY >= PhonesParent.offsetTop / 1.02) {
        PhonesPictures[0].style.top = Math.max(50 - (scrollY - PhonesParent.offsetTop / 1.02) * .3, 5) + '%';
    }

    if (scrollY >= SliderParent.offsetTop / 1.08) {
        SliderItemsOne[0].style.translate = `0 ${Math.max(20 - (scrollY - SliderParent.offsetTop / 1.08) * .15, 1)}rem`
    }
    if (scrollY >= SliderParent.offsetTop / 1.06) {
        SliderItemsOne[1].style.translate = `0 ${Math.max(20 - (scrollY - SliderParent.offsetTop / 1.06) * .125, 1)}rem`
    }
    if (scrollY >= SliderParent.offsetTop / 1.04) {
        SliderItemsOne[3].style.translate = `0 ${Math.max(20 - (scrollY - SliderParent.offsetTop / 1.04) * .1, 1)}rem`
    }
    if (scrollY >= SliderParent.offsetTop / 1.02) {
        SliderItemsOne[2].style.translate = `0 ${Math.max(20 - (scrollY - SliderParent.offsetTop / 1.015) * .08, 1)}rem`
    }
    if (scrollY >= SliderParent.offsetTop / 1.005) {
        SliderItemsOne[4].style.translate = `0 ${Math.max(20 - (scrollY - SliderParent.offsetTop / 1.005) * .08, 1)}rem`
    }
    if (scrollY >= SliderParent.offsetTop / .96) {
        SliderItemsOne[5].style.translate = `0 ${Math.max(20 - (scrollY - SliderParent.offsetTop / .96) * .08, 1)}rem`
    }
    if (scrollY >= SliderParent.offsetTop / .95) {
        SliderItemsOne[6].style.translate = `0 ${Math.max(20 - (scrollY - SliderParent.offsetTop / .95) * .08, 1)}rem`
    }

    if (scrollY >= SecondSlider.offsetTop / 1.05) {
        ScrollTexts[0].style.opacity = (scrollY - SecondSlider.offsetTop / 1.05) * .02;
        ScrollTexts[0].style.top = Math.max(10 - (scrollY - SecondSlider.offsetTop / 1.05) * .07, 0) + 'rem';
    }
    if (scrollY >= SecondSlider.offsetTop / 1.035) {
        ScrollTexts[1].style.opacity = (scrollY - SecondSlider.offsetTop / 1.035) * .02;
        ScrollTexts[1].style.top = Math.max(10 - (scrollY - SecondSlider.offsetTop / 1.035) * .07, 0) + 'rem';
    }
    if (scrollY >= SecondSlider.offsetTop / 1.025) {
        ScrollTexts[2].style.opacity = (scrollY - SecondSlider.offsetTop / 1.025) * .02;
        ScrollTexts[2].style.top = Math.max(10 - (scrollY - SecondSlider.offsetTop / 1.025) * .07, 0) + 'rem';
    }
    if (scrollY >= SecondSlider.offsetTop / 1.015) {
        ScrollTexts[3].style.opacity = (scrollY - SecondSlider.offsetTop / 1.015) * .02;
        ScrollTexts[3].style.top = Math.max(10 - (scrollY - SecondSlider.offsetTop / 1.015) * .07, 0) + 'rem';
    }
    if (scrollY >= SecondSlider.offsetTop) {
        ScrollTexts[4].style.opacity = (scrollY - SecondSlider.offsetTop) * .02;
        ScrollTexts[4].style.top = Math.max(10 - (scrollY - SecondSlider.offsetTop) * .07, 0) + 'rem';
    }
    if (scrollY >= EasiestThing.parentElement.offsetTop / 1.1) {
        EasiestThing.style.bottom = (scrollY - EasiestThing.parentElement.offsetTop / 1.1) * .075 + '%';
        EasiestThing.style.opacity = (scrollY - EasiestThing.parentElement.offsetTop / 1.1) * .1 + '%';
    }
    if (scrollY >= DetectorPar.offsetTop) {
        DetectorText.style.opacity = (scrollY - DetectorPar.offsetTop) * .01;
        DetectorText.style.translate = `0 ${Math.max(7 - (scrollY - DetectorPar.offsetTop) * .07, 0)}rem`
    } else {
        DetectorText.style.opacity = null;
        DetectorText.style.translate = null;
    }
    if (scrollY >= DetectorPar.offsetTop / .97) {
        DetectorArrow.style.rotate = Math.max(-(scrollY - DetectorPar.offsetTop / .97) * 1.7, -360) + 'deg';
        DetectorButton.style.width = Math.min(5 + (scrollY - DetectorPar.offsetTop / .97) * .13, 35) + 'rem';
    } else {
        DetectorArrow.style.rotate = null;
        DetectorButton.style.width = null;
    }
}
an()
