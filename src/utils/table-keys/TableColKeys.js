

export const tableKeysVolume=(title)=>{
  console.log("title",title)
  if(title==="YOY-Volume"){
      return ["Volume","QuaterVolume","HalfVolume","TotalVolume"]
  }else if(title==="YOY-AWS"){
      return ["Aws","QuaterAws","HalfAws","TotalAws"]
  }else if(title==="YOY-ADS"){ 
       return ["Ads","QuaterAds","HalfAds","TotalAds"]
  }else{
    return "null"
  }
}



export const tableHeaderTitles=(title)=>{
  console.log("title",title)
  if(title.includes("Quater")){
      return ["Q1","Q2","Q3","Q4"]
  }else if(title.includes("half")){
      return ["H1","H2"]
  }else if(title.includes("Total")){ 
       return ["Total"]
  }else{
    return ["Year","JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
  }
}