import React from 'react';
import { connect } from 'react-redux';//connect is high order component of react redux,connect react component to redux store
import { fetchTableData } from '../redux';//importing from index file of redux folder
import '../css/TableContainerCss.css'; 
class TableContainer extends React.Component {
  componentDidMount(){
    this.props.fetchTableData();//1. 
  }
    render() { 
           
          var header = this.props.tableData ?  Object.keys(this.props.tableData[0]) : "";
          const tableHeader = header && header.map(val=> 
                              {
                                  return (
                                              <th>{val}</th>
                                           );
                              });
          const tableData =this.props.tableData && this.props.tableData.map((rowObj, i) => {
                            let td = Object.keys(rowObj).map((val, ind) => {
                                  return <td key={ind}>{rowObj[val]}</td>  
                          })
                          return (
                              <tr key={i}>{td}</tr>
                            )
                    }); 
          return(
            <div>
            {
              this.props.loading 
              ? <p>Loading...</p> 
              : this.props.error
              ? <p>Error, try again</p>
                    : <table id="customers">
                        <thead>
                          <tr>
                            {tableHeader} 
                          </tr>
                        </thead>
                        <tbody>
                            {tableData} 
                         </tbody>
                      </table>
                } 
              </div> );
    }
}
const mapStateToProps = state => {
  return{
    tableData : state.table.fetchedData,
    loading: state.table.loading,
    error: state.table.error
  }
}
 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTableData: () => dispatch(fetchTableData())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TableContainer);  
