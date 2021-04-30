


const randoms = {
    "1":[
{
    "page_number":12,
    "page_url": "myImage"
}
,
{
    "page_number":12,
    "page_url": "myImage"
}, 
{
    "page_number":12,
    "page_url": "myImage"
}
    ],
    "2": [
        {
            "page_number":12,
            "page_url": "myImage"
        }
        ,
        {
            "page_number":12,
            "page_url": "myImage"
        }, 
        {
            "page_number":12,
            "page_url": "myImage"
        }
    ],
    "3":[
        {
            "page_number":12,
            "page_url": "myImage"
        }
        ,
        {
            "page_number":12,
            "page_url": "myImage"
        }, 
        {
            "page_number":12,
            "page_url": "myImage"
        }
    ]
}











export default (req, res)=> {
  

    if (req.method =="POST"){
        return (
            res.json(randoms)
        )
    }
    else{
// console.log("love")
res.status(404).json({error:"Invalid "})
    }
}