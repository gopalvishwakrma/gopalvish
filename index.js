const imgs = Array.from(document.getElementsByClassName('carousel'));
        const rightBtn = document.getElementById('right-btn');
        const leftBtn = document.getElementById('left-btn');

        let position = 0;

        // Initially, show the first image and hide others
        imgs.forEach((img, index) => {
            img.style.display = index === position ? 'block' : 'none';
        });

        const moveRight = () => {
            position = (position + 1) % imgs.length;
            imgs.forEach((img, index) => {
                img.style.display = index === position ? 'block' : 'none';
            });
        }

        const moveLeft = () => {
            position = (position - 1 + imgs.length) % imgs.length;
            imgs.forEach((img, index) => {
                img.style.display = index === position ? 'block' : 'none';
            });
        }

        rightBtn.addEventListener("click", moveRight);
        leftBtn.addEventListener("click", moveLeft);