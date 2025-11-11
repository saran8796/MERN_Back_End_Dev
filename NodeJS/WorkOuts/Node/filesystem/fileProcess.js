import { log } from "console";
import datas from "fs";

// log(datas);

// file handling methods
datas.writeFile("process.js", "console.log('File created');", (err) => {
  if (err) throw err.message;
  log("File created successfully");
});

datas.readFile("process.js", (err, data) => {
  if (err) throw err.message;
  log(data.toString());
});

datas.appendFile("process.js", "console.log('Appended Line');", (err) => {
  if (err) throw err.message;
  log("File appended successfully");
});

// datas.unlink();
// datas.rename();
// datas.existsSync();

// // folder handling methods

// datas.mkdir("Node", (err) => {
//   if (err) throw err.message;
//   log("Folder created successfully");
// });

datas.writeFile("./Node/info.txt", "Node.js Folder File", (err) => {
  if (err) throw err.message;
  log("File created inside folder successfully");
});

datas.readdir("./Node", (err, files) => {
  if (err) throw err.message;
  log(files);
});

// datas.rmdir();
