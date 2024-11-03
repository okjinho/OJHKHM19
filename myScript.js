// 초기 페이지 로딩 시 스크롤 잠금 활성화
document.body.classList.add('no-scroll');

let isTransitionComplete = false;
let isAnimated = false;  
let isInk03Animated = false;
let isPage04InkAnimated = false;
let isPage05InkAnimated = false;
let isPage06InkAnimated = false;

// 애니메이션이 끝난 후 자동 스크롤 함수
function scrollTo2800px() {
    window.scrollTo({
        top: 2900,
        behavior: 'smooth'
    });
}

// 클릭 시 페이지 전환 및 Ink 애니메이션 실행
document.addEventListener('click', function () {
    if (isTransitionComplete) return;

    const frontImage = document.querySelector('.frontImage');
    const blackOverlay = document.querySelector('.blackOverlay');
    const body = document.querySelector('body');
    const inkElement = document.getElementById('Page_01_Ink_01');

    // FrontImage가 먼저 사라짐
    frontImage.classList.add('hidden');

    // 1초 후 검은 박스가 사라짐
    setTimeout(function () {
        blackOverlay.classList.add('hidden');
    }, 100);

    // 검은 박스 애니메이션이 끝난 후 스크롤을 다시 허용
    setTimeout(function () {
        body.classList.remove('no-scroll');

        // 페이지 전환 후 0.5초 뒤에 Ink 애니메이션 실행
        setTimeout(function () {
            inkElement.classList.add('expand');
            isTransitionComplete = true;
        }, 100);
    }, 800);
    
});

// 스크롤에 따라 Page_03_BackGround_01의 움직임 제어
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const background03 = document.getElementById('Page_03_BackGround_01');

    if (scrollTop >= 4250) {
        background03.style.opacity = 1;
        background03.style.top = "0";
    } else {
        background03.style.opacity = 0;
        background03.style.top = "100vh";
    }
});

// 스크롤 위치에 따른 애니메이션 제어
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const targetPosition = 2800; // 애니메이션 트리거 위치
    const body = document.querySelector('body');

    if (scrollTop >= targetPosition && !isAnimated) {
        isAnimated = true;
        body.classList.add('scroll-locked');
        body.style.overflow = 'hidden';

        // ink 이미지 애니메이션 실행
        setTimeout(() => {
            document.getElementById('Page_02_Ink_01').style.animation = 'expandInk 0.3s ease forwards';
        }, 100);

        setTimeout(() => {
            document.getElementById('Page_02_Ink_02').style.animation = 'expandInk 0.3s ease forwards';
        }, 250);

        setTimeout(() => {
            document.getElementById('Page_02_Ink_03').style.animation = 'expandInk 0.3s ease forwards';
        }, 350);

        // 텍스트와 이미지 페이드 인 애니메이션
        setTimeout(() => {
            document.getElementById('Page_02_Text_02').style.animation = 'fadeInText 0.5s ease forwards';
            document.getElementById('Page_02_Text_Centered').style.animation = 'fadeInText 0.5s ease forwards';
            document.getElementById('Page_02_text_line_01').style.animation = 'fadeInText 0.5s ease forwards';
            document.getElementById('Page_02_text_line_02').style.animation = 'fadeInText 0.5s ease forwards';
        }, 1600);

        // Page_02_Text_Centered 애니메이션이 끝난 후 선 확장 애니메이션 실행
        setTimeout(() => {
            document.getElementById('Page_02_text_line_01').style.animation = 'widthExpand01 0.5s ease forwards';
            document.getElementById('Page_02_text_line_02').style.animation = 'widthExpand02 0.5s ease forwards';
        }, 2100); // 1600ms 이후 500ms 대기 후 실행


        // 애니메이션 종료 후 스크롤 잠금 해제
        setTimeout(() => {
            body.classList.remove('scroll-locked');
            body.style.overflow = '';
        }, 2500);
    }

});

// 스크롤 위치에 따른 Page_03_Ink_01 애니메이션 제어
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const body = document.querySelector('body');

    if (scrollTop >= 4800 && !isInk03Animated) {
        isInk03Animated = true;

        // 스크롤 잠금 설정
        body.classList.add('scroll-locked');
        body.style.overflow = 'hidden';

        // Page_03_Ink_01 애니메이션 실행
        const inkElement = document.getElementById('Page_03_Ink_01');
        inkElement.style.animation = 'slideExpandInk 0.5s ease forwards';

        // 애니메이션 종료 후 스크롤 잠금 해제
        setTimeout(() => {
            body.classList.remove('scroll-locked');
            body.style.overflow = '';
        }, 500); // 애니메이션 종료 후 스크롤 해제
    }
});

// 클릭 시 페이지 전환 및 Ink 애니메이션 실행
document.addEventListener('click', function () {
    if (isTransitionComplete) return;

    const frontImage = document.querySelector('.frontImage');
    const blackOverlay = document.querySelector('.blackOverlay');
    const body = document.querySelector('body');
    const inkElement = document.getElementById('Page_01_Ink_01');

    // FrontImage가 먼저 사라짐
    frontImage.classList.add('hidden');

    setTimeout(function () {
        blackOverlay.classList.add('hidden');
    }, 100);

    setTimeout(function () {
        body.classList.remove('no-scroll');
        setTimeout(function () {
            inkElement.classList.add('expand');
            isTransitionComplete = true;
        }, 500);
    }, 2000);
});

// 스크롤에 따른 Page_04_Ink 애니메이션 제어
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const targetPositionPage04Ink = 7500; // Page_04_Ink 애니메이션 트리거 위치
    const body = document.querySelector('body');

    if (scrollTop >= targetPositionPage04Ink && !isPage04InkAnimated) {
        isPage04InkAnimated = true;
        body.classList.add('scroll-locked');
        body.style.overflow = 'hidden';

        // Page_04_Ink 이미지 애니메이션 실행
        setTimeout(() => {
            document.getElementById('Page_04_Ink_01').style.animation = 'expandInk 0.3s ease forwards';
        }, 100);

        setTimeout(() => {
            document.getElementById('Page_04_Ink_02').style.animation = 'expandInk 0.3s ease forwards';
        }, 250);

        setTimeout(() => {
            document.getElementById('Page_04_Ink_03').style.animation = 'expandInk 0.3s ease forwards';
        }, 350);

        setTimeout(() => {
            document.getElementById('Page_04_Text_01').style.animation = 'fadeInText 0.5s ease forwards';
            document.getElementById('Page_04_Text_02').style.animation = 'fadeInText 0.5s ease forwards';
        }, 1000); // Ink 애니메이션 종료 후 텍스트 애니메이션 시작

        // Page_04_text_line 이미지 애니메이션 실행
        setTimeout(() => {
            document.getElementById('Page_04_text_line_01').style.animation = 'widthExpand04_01 0.5s ease forwards';
            document.getElementById('Page_04_text_line_02').style.animation = 'widthExpand04_02 0.5s ease forwards';
        }, 1500); // 텍스트 애니메이션 이후 500ms 대기 후 실행

        // 애니메이션 종료 후 스크롤 잠금 해제
        setTimeout(() => {
            body.classList.remove('scroll-locked');
            body.style.overflow = '';
        }, 2500);
    }
});

// Page_05_Ink_01 애니메이션 트리거 위치 설정
const targetPositionPage05Ink = 9700; // 9800px 지점에서 애니메이션 실행

// 스크롤 위치에 따른 Page_05_Ink_01 애니메이션 제어
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const body = document.querySelector('body');

    if (scrollTop >= targetPositionPage05Ink && !isPage05InkAnimated) {
        isPage05InkAnimated = true;

        // 스크롤 잠금 설정
        body.classList.add('scroll-locked');
        body.style.overflow = 'hidden';

        // Page_05_Ink_01 애니메이션 실행
        const inkElement = document.getElementById('Page_05_Ink_01');
        inkElement.style.animation = 'scaleExpandInk 0.3s ease forwards';

        // 애니메이션 종료 후 스크롤 잠금 해제
        setTimeout(() => {
            body.classList.remove('scroll-locked');
            body.style.overflow = '';
        }, 500); // 애니메이션 종료 후 스크롤 해제
    }
});

// Page_06_Ink 애니메이션 트리거 위치 설정
const targetPositionPage06Ink = 11900; // 12000px 지점에서 애니메이션 실행

// 스크롤 위치에 따른 Page_06_Ink 및 Page_06_text_line 애니메이션 제어
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const body = document.querySelector('body');

    if (scrollTop >= targetPositionPage06Ink && !isPage06InkAnimated) {
        isPage06InkAnimated = true;

        // 스크롤 잠금 설정
        body.classList.add('scroll-locked');
        body.style.overflow = 'hidden';

        // Page_06_Ink 이미지 애니메이션 실행
        setTimeout(() => {
            document.getElementById('Page_06_Ink_01').style.animation = 'expandInk 0.3s ease forwards';
        }, 100);

        setTimeout(() => {
            document.getElementById('Page_06_Ink_02').style.animation = 'expandInk 0.3s ease forwards';
        }, 250);

        setTimeout(() => {
            document.getElementById('Page_06_Ink_03').style.animation = 'expandInk 0.3s ease forwards';
        }, 350);

        // Page_06_Text 애니메이션 실행
        setTimeout(() => {
            document.getElementById('Page_06_Text_01').style.animation = 'fadeInText 0.5s ease forwards';
            document.getElementById('Page_06_Text_02').style.animation = 'fadeInText 0.5s ease forwards';
        }, 1000); // Ink 애니메이션 종료 후 텍스트 애니메이션 시작

        // Page_06_text_line 애니메이션 실행
        setTimeout(() => {
            document.getElementById('Page_06_text_line_01').style.animation = 'widthExpand06_01 0.5s ease forwards';
            document.getElementById('Page_06_text_line_02').style.animation = 'widthExpand06_02 0.5s ease forwards';
        }, 1500); // 텍스트 애니메이션 이후 500ms 대기 후 실행

        // 애니메이션 종료 후 스크롤 잠금 해제
        setTimeout(() => {
            body.classList.remove('scroll-locked');
            body.style.overflow = '';
        }, 2500); // 모든 애니메이션이 끝난 후 잠금 해제
    }
});
