const sliderRange = document.getElementById("slider");
const views = document.getElementById("page-views");
const priceTag = document.getElementById("price");
const toggleBtn = document.getElementById("btn");
const container = document.getElementById("container");
sliderRange.addEventListener("input", (e) => {
    console.log(sliderRange.value);

    if(toggleBtn.checked === false){
        priceTag.textContent = `$${e.target.value}.00`;
    }
    else if(toggleBtn.checked === true){
        priceTag.textContent = `$${e.target.value -(e.target.value * 0.25).toFixed(2)}`
    }
    views.textContent = `${6.25 * e.target.value }K`
        sliderRange.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${sliderRange.value/32 * 100}%, hsl(224, 65%, 95%) ${sliderRange.value/32 * 100}%, hsl(224, 65%, 95%) 100%)`;
}); 
    
container.addEventListener("change", e => {
    if(e.target.name == "toggleBtn"){
        let currentPrice = parseInt(sliderRange.value);
        if(toggleBtn.checked === false){
            priceTag.textContent = `$${currentPrice}.00`;
        }
        else if(toggleBtn.checked === true){
            priceTag.textContent = `$${currentPrice -(currentPrice * 0.25).toFixed(2)}`
        }
    }
})

