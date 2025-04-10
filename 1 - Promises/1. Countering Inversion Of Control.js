/* 
This is a normal function in which High Order Function is taking a callback. But here occurs 2 problem with callback; 
1) Callback Hell : Basically its a readability problem where there are multiple callbacks inside callbacks resulting in pyramid form structure
2) Inversion Of Control : Where your callback power is given to other. It depends how your function is called by others
*/

// THIS IS INVERSION OF CONTROL 
function download(url, callBack){
    console.log("Started Downloading from ", url);
    setTimeout(function hello(){
        console.log("Download Completed after 5 sec");
        const content = "ABCDE";
        callback(content);
        callback(content);    /* Here callback is called 2 times..So other functions is deciding when to call your callback, where to 
    call your callback, whether to call your callback, how many times to call your callback etc... */
    }, 5000);  
}
download("www.xyz.com", function processDownload(data){
   console.log("Download Data is ", data); 
});


// This get resolved by the promises
function download(url){
    console.log("Started Downloading from ", url);
    return new Promise(function exec(res, rej){
        setTimeout(function hello(){
            console.log("Download Completed after 5 sec");
            const content = "ABCDE";
            res("Done");
        }, 5000);
    })
}
download("www.xyz.com").then(    // Now we are'nt giving callback to other function & due to this i am responsible for this callback.
    function success(value){
        console.log("Download Data is ", value);
}, function failed(value){
    console.log("Error in Downloading Data ", value);
});
