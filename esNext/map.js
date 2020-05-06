const techs = new Map()
techs.set('react',{framework:false})
techs.set('angular',{framework:true})

console.log(techs.get('angular').framework)