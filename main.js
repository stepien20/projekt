const form=document.querySelector(`form`)
const section=document.querySelector(`section`)
const but=document.querySelector(`input[type="submit"]`);
but.addEventListener(`click`, function(evt){
    evt.preventDefault()
    const name=document.querySelector(`#name`) .value  
     const surname=document.querySelector(`#surname`).value
     const klasa=document.querySelector(`#klasa`).value
    const rokszk=document.querySelector(`#rok_szk`).value
     const place=document.querySelector(`#place`).value
     const start_date=document.querySelector(`#start_date`).value
     const end_date=document.querySelector(`#end_date`).value
     const display=document.querySelector(`#metryka`)
     display.innerHTML=`<h2>Dane ucznia</h2>
     <p id="namesurname">Imię i nazwisko: ${name} ${surname}</p>
     <p id="klasarokszk">Klasa: ${klasa} Rok szkolny: ${rokszk}</p>
     <p id="place">Odbytej w: ${place} </p>
     <p id="start_end_date">Odbytej w terminie: od ${start_date} do ${end_date}</p>
     <button id="edit">Edit</button>`;
     form.classList.toggle(`hidden`)
     section.classList.toggle(`hidden`)
     const butedit=document.querySelector(`#edit`)
butedit.addEventListener(`click`,function(evt){
    evt.preventDefault();
form.classList.toggle(`hidden`)
section.classList.toggle(`hidden`)   
})   
})
