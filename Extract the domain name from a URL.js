//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//Solution
function domainName(url){
  let arr1 = [...url]
  let arr2 = []
  let ping = false
  for(let i = 0; i <arr1.length;i++){
    if(arr1[i]=='/'){
      ping = true
      i += 2
    }else if(arr1[i]=="." && !ping){
      i = 0
      ping = true
    }
    if(ping){
      arr2.push(arr1[i])
    }
    if(i== arr1.length - 1 && !ping){
      i=-1
      ping = true
    }
  }
  console.log(arr2)
  
  ping = false
  let arr3 = []
  for(let i = 0;i<arr2.length;i++){
    if(arr2[0]=="w" && arr2[1]=="w" && arr2[2]=="w"&& !ping){
      i=4
      ping = true
    }
    if(arr2[i]=="."){
      return makeStr(arr3)
    }
    arr3.push(arr2[i])
  }
}
function makeStr(arr){
  let str = ''
  for(let i = 0; i<arr.length; i++){
    str+=arr[i]
  }
  return str
}
