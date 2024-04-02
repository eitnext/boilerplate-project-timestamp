const utcEl = document.querySelector('#utc');
const unixEl = document.querySelector('#unix');
const textEl = document.querySelector('#text');


(
    async () => {
        const res = await fetch('http://localhost:3000/api');
        const data = await res.json();
        const {utcToLocal, utc, unix, url} = data;
        const utcUrl = `http://${url}/api/${utcToLocal}`;
        const unixUrl = `http://${url}/api/${unix}`;
        utcEl.setAttribute('href', utcUrl );
        unixEl.setAttribute('href', unixUrl);
        utcEl.innerText  =  utcUrl;
        unixEl.innerText =  unixUrl
        
        textEl.innerText = `{"unix": ${unix}, "utc":"${utc}"}`;


    }
)()