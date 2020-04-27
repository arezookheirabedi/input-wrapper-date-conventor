import React , {Component} from "react"
import { CatodGrid ,Catodcolumn} from '@cattod/react-grid';
import "@cattod/react-grid/build/index.css"
interface IRowData {
    make ?:string,
model ?: string,
price ?: number,
date?: string,
rate?: number
}

interface IState {
  columnDefs: Array<Catodcolumn<IRowData>>

  rowData : Array<IRowData>
}
export class Example extends Component<{}, IState> {
      constructor(props:{}) {
    super(props)
    this.state = {
       columnDefs: [
        {title:"Make",
    
          key:"Make",
          displayValue:(rowData)=>{return this.displayValueMake(rowData)}         
          },
          {title:"Model",
      
          key:"Model",
          displayValue:(rowData)=>{return this.displayValueModel(rowData)}
          },
        
          {title:"Rate",
         
          key:"rate",
          displayValue: () =>{return StarRate}
      
          }
      ],
      
         rowData :  [
          { make: "Toyota", model: "Camery", price: 62000, date:"2020/01/01", rate:4},
          { make: "Ford", model: "Mondeo", price: 32000 , date:"2018/01/01", rate:5},
          { make: "Porsche", model: "Boxter", price: 72000, date:"20190/01/01", rate:3 }],
    }

  }

  
 displayValueMake = (data:IRowData):any=>{
  
 
  return `${data.make } ${data.model}`

}
 displayValueModel = (data:IRowData):any=>{

  return data.model

}

 addRow = (data:IRowData)=>{
  console.log(data)

}
 removeRow = (data:IRowData)=>{
  console.log(data)

}

    render(){
         const message= "empty data"
        return(
          <CatodGrid<IRowData>
          message = {message}
         dataRow = {this.state.rowData}
         columnDef={this.state.columnDefs}
       
        /> 
        )
    }
}


function StarRate(props:any) { 

        return(
       <div> 
          {props.value.map((item:number)=>{
        return (  <span key={item}  className={`fas fa-star`}></span>)
    })}

       </div>
        )
  

}