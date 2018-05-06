import React from 'react'
import {Navbar, FormControl, FormGroup, Button} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './MistakesTable.css'

//const originData = [];
//function addProducts(Data, quantity) {
    //for (let i = 0; i < quantity; i++) {
        //Data.push({
            //id: i,
            //tag: "Mistakes"+i.toString(),
            //content: 9*i,
            //reason:"第"+i.toString()+"天",
        //});
    //}
//}
//添加数据
//addProducts(originData, 50);

class MistakesTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            sortName: undefined,
            sortOrder: undefined
        };
        this.onSortChange = this.onSortChange.bind(this);
        this.searchMistake = this.searchMistake.bind(this);
        this.setDBdata = this.setDBdata.bind(this);
    }

    searchMistake(event){

    }

    onSortChange(sortName, sortOrder) {
        this.setState({
            sortName,
            sortOrder
        });
    }

    setDBdata(){
        if(this.props.valid === 0)
        {
            this.setState({
                data:
                    {
                        "id": "login needed",
                        "tag": "login needed",
                        "content": "login needed",
                        "reason": "login needed"
                    }
            });
        }
        else{
            this.setState({
                data: this.props.data
            });
        }
    }

    render() {


        const options = {
            sortName: this.state.sortName,
            sortOrder: this.state.sortOrder,
            onSortChange: this.onSortChange,
        };
        const selectRow = {
            mode: 'checkbox',  // multi select
            clickToSelectAndEditCell: true,
            columnWidth: '30px'
        };
        const cellEdit = {
            mode: 'click', // click cell to edit
            blurToSave: true,
        };
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="http://www.baidu.com">Brand</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="SearchID" />
                            </FormGroup>
                            {' '}
                            <Button type="submit"
                                    onClick={this.searchMistake}>
                                Submit
                            </Button>
                            <Button type="submit"
                                    onClick={this.setDBdata}>
                                refresh
                            </Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                <BootstrapTable data={ this.state.data } height="300px" keyBoardNav
                                columnFilter
                                selectRow={ selectRow }
                                cellEdit={ cellEdit } pagination
                                options={ options }>
                    <TableHeaderColumn dataField='id'>MistakeID</TableHeaderColumn>
                    <TableHeaderColumn dataField='tag' isKey={true} dataSort={ true }>Tag</TableHeaderColumn>
                    <TableHeaderColumn dataField='content'>Content</TableHeaderColumn>
                    <TableHeaderColumn dataField='reason'>Reasons</TableHeaderColumn>
                </BootstrapTable >
            </div>

        );
    }

}
export default MistakesTable;
