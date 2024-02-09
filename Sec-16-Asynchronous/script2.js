'use strict';

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath1) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath1;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        })

        img.addEventListener('error', function () {
            reject(new Error("Image not found!! 💥💥💥"));
        })
    })
}

const wait = function (seconds) {
    return new Promise(function (resolve, _) {
        setTimeout(resolve, seconds * 1000)
    })
}

const laodAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        const imgEl = await Promise.all(imgs);
        imgEl.forEach(img => img.classList.add('parallel'));
    }
    catch (err) {
        console.log(err);
    }
}
laodAll(['img/img-3.jpg', 'img/img-2.jpg', 'img/img-1.jpg']);

console.log(import.meta);