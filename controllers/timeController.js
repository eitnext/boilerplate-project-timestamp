const isValideDate = (date) => {
    return !isNaN(new Date(date))
}

 console.log(new Date(1451001600000).toUTCString());
 

exports.getTStamp = (req, res) => {
    const {date} = req.params;
    if(Number(date)){
        res.status(200).json({
            unix: Number(date),
            utc: new Date(Number(date)).toUTCString()
        })

    }else if(isValideDate(date)){
        res.status(200).json({
            unix: new Date(date).getTime(),
            utc: new Date(date).toUTCString()
        })

    }else{
        res.status(200).json({
            error: 'Invalid Date'
        })
    }

}

exports.getDefault = (req, res) => {
    const unix = Date.now();
    const utcToUTC = new Date().toUTCString();
    const utc = new Date().toUTCString();
    const utcToLocal = new Date().toLocaleDateString().replace(/\//g, '-');
    const url = req.get('host');

    res.status(200).json({
        unix,
         
        utcToLocal,
        url,
        utc
    })
}