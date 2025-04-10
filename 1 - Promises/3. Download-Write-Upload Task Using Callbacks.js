function download(url, callback){
  console.log("Starting to download data from", url);
  setTimeout(function exec(){
    console.log("Download Completed!!");
    let content = "ABCDE";
    callback(content)
  }, 2000);
}

function write(data, callback){
  console.log("Started Writing a file with", data);
  setTimeout(function write() {
    console.log("Completed writing the data in a file");
    const fileName = "file.txt";
    callback(fileName);
  })
}

function upload(url, file, callback){
  console.log("Started Uploading ", file, "on", url);
  setTimeout(function upload() {
    console.log("Upload Completed");
    const response = "Success";
    callback(response);
  })
}

download("www.xyz.com", function processDownload(content){
  console.log("We are now going to process the download data");
  write(content, function processWrite(filename) {
    console.log("We have downloaded and written the file, now will upload");
    upload("www.upload.com", filename, function processUpload(response) {
      console.log("We have uploaded with", response);
    })
  })
});


// Output :
// Starting to download data from www.xyz.com
// Download Completed!!
// We are now going to process the download data
// Started Writing a file with ABCDE
// Completed writing the data in a file
// We have downloaded and written the file, now will upload
// Started Uploading  file.txt on www.upload.com
// Upload Completed
// We have uploaded with Success
