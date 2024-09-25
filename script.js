// script.js
const fs = require("fs")
const path = require("path")

// Function to replace .png with .jpg in a file
const replacePngWithJpg = (filePath) => {
  // Read the file content
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err)
      return
    }

    // Replace .png with .jpg
    const updatedData = data.replace(/\.png/g, ".jpg")

    // Write the updated content back to the file
    fs.writeFile(filePath, updatedData, "utf8", (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}:`, err)
      } else {
        console.log(`Updated ${filePath}`)
      }
    })
  })
}

// Function to read all files in a directory
const readFilesInDirectory = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dirPath}:`, err)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file)
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for file ${filePath}:`, err)
          return
        }

        // If it's a directory, read files in it
        if (stats.isDirectory()) {
          readFilesInDirectory(filePath)
        } else if (
          path.extname(file) === ".mdx" ||
          path.extname(file) === ".md"
        ) {
          // Process .mdx and .md files
          replacePngWithJpg(filePath)
        }
      })
    })
  })
}

// Start reading files from the content directory
const contentDirectory = path.join(__dirname, "content") // Adjust the path as necessary
readFilesInDirectory(contentDirectory)
