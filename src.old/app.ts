import './css/style.css';

//const app = document.getElementById("app") as HTMLElement;

const btns = document.getElementsByTagName('button') as HTMLCollectionOf<HTMLButtonElement>;

const exploreBtn = btns[0];

exploreBtn?.addEventListener('click', () => {
    alert(`${window.location.origin}/crew.html`);    
});

console.log(btns);