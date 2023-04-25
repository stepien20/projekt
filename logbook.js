const select= document.querySelector(`#dzial`);
select.innerHTML=`<option> </option>`
    teachingProgram.forEach(element => {
        const optGr=document.createElement(`option`)
        optGr.label=`${element.name}`
        optGr.value=`${element.name}`
        select.appendChild(optGr)
    });

    const select_temat= document.querySelector(`#temat`);
    
    select.addEventListener(`change`,function(){

        select_temat.innerHTML=``;
        console.log(this.value)
        const tab = teachingProgram.filter((elem)=> elem.name ===this.value)
        console.log(tab)
        tab[0].topic.forEach(element => { 
            const elem=document.createElement(`option`)
            elem.value=element
            elem.innerText=element
            select_temat.appendChild(elem)
        });
    })
  let id=0;
    const butsub=document.querySelector(`input[type="submit"]`)
   butsub.addEventListener(`click`, function(evt){
    evt.preventDefault();
    const opiekun=document.querySelector(`input[name="opiekun"]:checked`).id
    const datazaj=document.querySelector(`#data`).value
    const dzial=document.querySelector(`#dzial`).value;
    const temat=document.querySelector(`#temat`).value;
    const sprawozdanie=document.querySelector(`textarea`).value
    const done=Boolean(document.querySelector(`#done:checked`))
    const godz=parseInt(document.querySelector(`#time`).value)
    const opanowanie=document.querySelector(`#lvl`).value
   id++;
    const display=document.querySelector(`.display`)
    const ele=document.createElement(`fieldset`)
    ele.id=id;
    ele.innerHTML=`Data: ${datazaj} <br>Opiekun:${opiekun} <br> 
    Dział:${dzial} <br>Temat: ${temat} <br>
    Sprawozdanie: ${sprawozdanie} <br>
    Trwało ${godz} godzin <br>
    Stopień opanowania materiału: ${opanowanie}
    `
    if (done){ele.innerHTML+=`<br><i>Zrealizowano</i>`}
    display.appendChild(ele);
})