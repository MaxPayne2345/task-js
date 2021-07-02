function namePersone(jsonObj) {
    for(let obj of jsonObj){
        if (obj["name"] == null) {
            continue
        }
        var myPara = document.createElement('p')
        myPara.textContent = '>' + obj["name"]
        namePer.appendChild(myPara)
    }
  }
