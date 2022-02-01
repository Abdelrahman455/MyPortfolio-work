export function datafetch() {
  //container
  let con = document.getElementById("work")
  //fetch data
  function fetchwork() {
    return fetch("js/work/data.json")
      .then(res => res.json())
      .then(data => {
        return data
      })
  }

  //show work
  function showwork(data) {
    //appendding dat to the container
    data.forEach(data2 => {
      con.innerHTML += `
      <div class="workcon">
  
        <div class="imgcon">
          <img src="${data2.img}" alt="">
        </div>
  
        <div class="desccon">
          <div class="descheader">
            <b>
              <p>${data2.titel}</p>
            </b>
          </div>
          <div class="descdesc">
            <p>${data2.desc}</p>
          </div>
  
          <div class="descbutton">
            <button class="buttonlight">
              <a href="${data2.link}">see</a>
            </button>
            <button class="buttonlight">
              <a href="${data2.code}">Github</a>
            </button>
          </div>
        </div>
  
      </div>
      `
    })
  }

  fetchwork().then(data => {
    showwork(data)
  })
  
}