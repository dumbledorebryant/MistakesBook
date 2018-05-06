import React from 'react'
import {Navbar, NavDropdown, FormControl, FormGroup, Button} from 'react-bootstrap'
import {InputGroup, MenuItem, PageHeader} from 'react-bootstrap'
import 'react-quill/dist/quill.snow.css'
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
Quill.register('modules/imageDrop', ImageDrop);

class ChallengeAgain extends React.Component{
    constructor(){
        super();
        this.state={
            text:""
        }
    }
    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image','formula'],
            ['clean'],
        ],
        imageDrop: true,
    };

    formats = [
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'indent',
        'link', 'image','formula','clean'
    ];
    render(){
        return(
            <div>
                <br/>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavDropdown eventKey={1} title="SELECT_Tags" id="basic-nav-dropdown">
                                <MenuItem eventKey={1.1}>Maths</MenuItem>
                                <MenuItem eventKey={1.2}>Physics</MenuItem>
                                <MenuItem eventKey={1.3}>English</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.4}>List ALL</MenuItem>
                            </NavDropdown>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                            {' '}
                            <Button type="submit">Choose</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>

                <InputGroup>
                    <InputGroup.Button>
                        <Button type="submit">Record Time</Button>
                    </InputGroup.Button>
                    <FormControl type="text"/>
                    <InputGroup.Button>
                        <Button type="submit">Auto GET Time</Button>
                    </InputGroup.Button>
                </InputGroup>
                <PageHeader><small>Add NEW Contents</small></PageHeader>
                <ReactQuill theme="snow" value={ this.state.text }
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="Please input Mistakes-Content">
                </ReactQuill>
                <br/>
                <Button type={"success"}>Submit</Button>
            </div>
        )
    }
}
export default ChallengeAgain;
