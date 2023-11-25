document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});


let videoNum = 1;



function nextVideo() {
    if (videoNum < 3) {
        videoNum++;
    } else {
        videoNum = 1;
    }
    videoChange();
}
function previousVideo() {
    if (videoNum === 1) {
        videoNum = 3;
    } else {
        videoNum--;
    }
    videoChange();
}

document.querySelector('.right').addEventListener('click', () => {
    nextVideo();
});
document.querySelector('.left').addEventListener('click', () => {
    previousVideo();
});



function videoChange() {
    if (videoNum === 1) {
        document.querySelector('.work').innerHTML = `<iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE323j3OmEpGEwjnlHDAmjSpm9gbnWI6dWwwiXk3ALJdeyO7Xrx&playbackInfo=eyJ2aWRlb0lkIjoiM2UyM2Q1MDg1OWIzNDE0ZDgyNzM3MGI0ZGM0MDlkZDEifQ==" style="border:0; width: 100%; height: 600px;" allowFullScreen="true" allow="encrypted-media"></iframe>`;
    }
    if (videoNum === 2) {
        document.querySelector('.work').innerHTML = `<iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE323k2cYEmEfpTeKpVSkHEHwbKhYh30yNE6fjGz9gXHFtBoF2C&playbackInfo=eyJ2aWRlb0lkIjoiYzhiN2E2NjRiMjg3NDQ5YzgzZTNlNTIxNzYwNmY2MzQifQ==" style="border:0; width: 100%; height: 600px;" allowFullScreen="true" allow="encrypted-media"></iframe>`;
    } 
    if (videoNum === 3) {
        document.querySelector('.work').innerHTML = `<iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE323Z96WygHd2uHvCuwVg3SpqCG48YAbz9wVDHvux6P3Obi4FD&playbackInfo=eyJ2aWRlb0lkIjoiM2Q3NTQzNGIxNDE0NDZhNjk0ODc4M2ViNDFjMDVmMzkifQ==" style="border:0; width: 100%; height: 600px;" allowFullScreen="true" allow="encrypted-media"></iframe>`;
    }
}