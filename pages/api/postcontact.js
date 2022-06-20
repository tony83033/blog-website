import * as fs from 'fs'
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      let data = await fs.promises.readdir('mycontact/')
      console.log(data)
      fs.promises.writeFile(`mycontact/${data.length+1}.json`,JSON.stringify(req.body),'utf-8',)
      res.status(200).json({"Post":"Post"})

      console.log(req.body)
    } else {
      // Handle any other HTTP method
        res.status(200).json({'Name':"Sumit"})
    }
  }