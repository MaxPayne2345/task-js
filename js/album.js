function albumPersone(jsonObj) {
    for(let obj_2 of jsonObj){
        if (obj_2["title"] == null) {
            continue
        }
        var myPara_1 = document.createElement('p')
        myPara_1.textContent = '>' + obj_2["title"]
        albumsPer.appendChild(myPara_1)
    }
  }
