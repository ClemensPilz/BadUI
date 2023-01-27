export default function clickBoxFctn() {
    let counter = document.getElementById('counter');
    let clickBox = document.getElementById('clickBox');
    let count = 0;

    clickBox?.addEventListener('mouseover', moveClickBox);

    function moveClickBox() {
        let x = Math.floor(Math.random() * 101);
        let y = Math.floor(Math.random() * 101);
        clickBox.style.left = x.toString() + '%';
        clickBox.style.top = y.toString() + '%';
        clickBox.style.transform = 'translate(-' + x + '%, -' + y + '%)';
        count++;
        counter.innerText = count;
        if (count >= 15) {
            clickBox.removeEventListener('mouseover', moveClickBox);
            alert('That\'s enough');
        }

    }
}