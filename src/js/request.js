import loaderToggler from "./loader"

const request = async(resourse)=>{
  loaderToggler(true)
  const req = await fetch(resourse)
  console.log(req)
  if(!req.ok){
    throw new Error('Something went wrong :(')
  }

  const data = await req.json()
  loaderToggler(false)
  return data
}

export default request