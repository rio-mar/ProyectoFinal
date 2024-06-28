//tipos de plan
const basico = 300;//bolivares
const premium = 800;//bolivares

document.getElementById('basic').textContent = basico;
document.getElementById('premium').textContent = premium;

// Realiza una solicitud a la API para obtener datos sobre el dólar
fetch('https://pydolarvenezuela-api.vercel.app/api/v1/dollar?page=bcv')
  .then(response => response.json())
  .then(data => {
    
    //Se pide el valor del euro que se encuentra en el atributo promedio

    const dolaroficial  = data.monitors.usd.price;
    console.log(dolaroficial);
    //calcular precio para dolares
    const dolarBasico =  basico / dolaroficial;
    const dolarBasico2 = dolarBasico.toFixed(2);

    const dolarPremium = premium / dolaroficial;
    const dolarPremium2 = dolarPremium.toFixed(2);

    // Actualiza los valores en la tabla
    document.getElementById("dolarBasico").textContent = dolarBasico2;
    document.getElementById("dolarPremium").textContent = dolarPremium2;
    document.getElementById("dolar").textContent = dolaroficial;

});


  //api para valor del euro y yen chino en bs

  fetch('https://pydolarvenezuela-api.vercel.app/api/v1/dollar?page=bcv')
  .then(response => response.json())
  .then(data => {

    //Se pide el valor del euro que se encuentra en el atributo promedio 
    const eurooficial  = data.monitors.eur.price;
    console.log(eurooficial);
    //calcular precio para euros
    const euroBasico =  basico / eurooficial;
    const euroBasico2 = euroBasico.toFixed(2);

    const euroPremium = premium / eurooficial;
    const euroPremium2 = euroPremium.toFixed(2);

    // Actualiza los valores en la tabla
    document.getElementById("euro").textContent = eurooficial;
    document.getElementById("euroBasico").textContent = euroBasico2;
    document.getElementById("euroPremium").textContent = euroPremium2;

});

  fetch('https://pydolarvenezuela-api.vercel.app/api/v1/dollar?page=bcv')
  .then(response => response.json())
  .then(data => {

    //Se pide el valor del euro que se encuentra en el atributo promedio 
    const yenoficial  = data.monitors.cny.price;
    console.log(yenoficial);

    //calcular precio para euros
    const yenBasico =  basico / yenoficial;
    const yenBasico2 = yenBasico.toFixed(2);

    const yenPremium = premium / yenoficial;
    const yenPremium2 = yenPremium.toFixed(2);
    // Actualiza los valores en la tabla
    document.getElementById("yen").textContent = yenoficial;
    document.getElementById("yenBasico").textContent = yenBasico2;
    document.getElementById("yenPremium").textContent = yenPremium2;

});



