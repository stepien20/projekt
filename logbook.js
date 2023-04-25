const select= document.querySelector(`#dzial`);
    teachingProgram.forEach(element => {
        const optGr=document.createElement(`option`)
        optGr.label=`${element.name}`
        
        select.appendChild(optGr)
    });
    
    const select_temat= document.querySelector(`#temat`);
    select_temat.addEventListener(`change`,function(){
        
        select_temat.innerHTML=`<option value=" "></option>`
        const tab= teachingProgram.filter((elem)=> elem.name ===this.value)
        tab[0].topic.forEach(element => { 
            const elem=document.createElement(`option`)
            elem.value=element
            elem.innerText=element
            select_temat.appendChild(elem)
        });
    })
    
    teachingProgram.forEach(element => {
        const optGr=document.createElement(`option`)
        optGr.label=`${element.name}`
        
        select.appendChild(optGr)
    });
    // element.topic.forEach(option =>{
    //       const opt=document.createElement(`option`)
    //       opt.value = option;
    //       opt.innerText =option;
    //       optGr.append(opt);
    //     })