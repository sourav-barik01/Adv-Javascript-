function download(url, callback){
  return new Promise(function(resolve, reject) {
    console.log("Starting to download data from", url);
    setTimeout(function exec(){
      console.log("Download Completed!!");
      let content = "ABCDE";
      resolve(content)
    }, 1000);
  })
}

function write(data, callback){
  return new Promise(function(resolve, reject) {
    console.log("Started Writing a file with", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const fileName = "file.txt";
      resolve(fileName);
    }, 1000);
  })
}

function upload(url, file, callback){
  return new Promise(function(resolve, reject) {
    console.log("Started Uploading ", file, "on", url);
    setTimeout(function up() {
      console.log("Upload Completed");
      const response = "Success";
      resolve(response);
    }, 1000);
  })
}

download("www.xyz.com")
.then(function processDownload(value){
  console.log("Downloading done with following values", value);
  return write(value);
}).then(function processWrite(value) {
    console.log("Data written in the file with name", value);
    return upload(value);
}).then(function processUpload(value) {
    console.log("We have uploaded with", value);
});


// Output:
// Starting to download data from www.xyz.com
// Download Completed!!
// Downloading done with following values ABCDE
// Started Writing a file with ABCDE
// Completed writing the data in a file
// Data written in the file with name file.txt
// Started Uploading  undefined on file.txt
// Upload Completed
// We have uploaded with Success
