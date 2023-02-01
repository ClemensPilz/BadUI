export default function setClickBox() {
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
        counter.innerText = count.toString();
        if (count >= 19) {
            clickBox.removeEventListener('mouseover', moveClickBox);
            alert('That\'s enough');
            clickBox.parentElement.classList.add("o-50");
            winCount ++;
        }

    }
}