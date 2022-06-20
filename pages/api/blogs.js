// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogpost')
  let myfile;
  let allblog=[]
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogpost/'+item),'utf-8')
    allblog.push(JSON.parse(myfile))
    
  }
  res.status(200).json(allblog)
  
}
