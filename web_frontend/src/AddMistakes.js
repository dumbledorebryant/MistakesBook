import React from 'react'
import {InputGroup, FormControl, DropdownButton, MenuItem, Button, PageHeader} from 'react-bootstrap'
import 'react-quill/dist/quill.snow.css'
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
Quill.register('modules/imageDrop', ImageDrop);

class AddMistakes extends React.Component{
    constructor(){
        super();
        this.state={
            title: "",
            tag: "",
            content: "12345",
            reason: "67890",
            userID: [],

            text:"",
            tag_input:""
        };
        this.getTags = this.getTags.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.GetTag = this.GetTag.bind(this);
        this.postMistakeInfo = this.postMistakeInfo.bind(this);
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

    getTags(event){
        this.setState({
            tag: event.target.value
        })
    }
    getTitle(event){
        this.setState({
            tag: event.target.value
        })
    }

    postMistakeInfo(){

        fetch('http://localhost:8080/Data/Send?' +
            'title=' + this.state.title + '&' +
            'content=' + this.state.content + '&' +
            'cause=' + this.state.reason + '&' +
            'tags=' + this.state.tag + '&' +
            'userID=' + this.props.username,
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(function (response) {
                console.log('Request successful', response);
                return response.text();
            })
            .then(function (result) {
                alert(result);
                console.log("result: ", result);
            })
    }

    GetTag(){
        this.setState({
            tag_input: "Maths"
        })
    }

    render(){
        return(
            <div>
                <br/>
                <InputGroup>
                    <InputGroup.Button>
                        <Button type="button" onChange={this.getTitle}>Add Title</Button>
                    </InputGroup.Button>
                    <FormControl type="text"/>
                    <InputGroup.Button>
                        <Button type="submit" onChange={this.getTags}>Submit</Button>
                    </InputGroup.Button>
                </InputGroup>
                <br/>

                <InputGroup>
                    <DropdownButton componentClass={InputGroup.Button}
                                    id="input-dropdown-addon"
                                    title="Add Tag" type="button" >
                        <MenuItem key="added" >Tags added</MenuItem>
                        <MenuItem divider />
                        <MenuItem key="maths" onSelect={this.GetTag}>Maths</MenuItem>
                        <MenuItem key="physics">Physics</MenuItem>
                        <MenuItem key="chemistry">Chemistry</MenuItem>
                    </DropdownButton>
                    <FormControl type="text" value={this.state.tag_input}/>
                    <InputGroup.Button>
                        <Button type="submit">Submit</Button>
                    </InputGroup.Button>
                </InputGroup>
                <PageHeader><small>Add Contents</small></PageHeader>
                <ReactQuill theme="snow" value={ this.state.text }
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="Please input Mistakes-Content">
                </ReactQuill>
                <PageHeader><small>Add Analysis</small></PageHeader>
                <ReactQuill theme="snow" value={ this.state.text }
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="Please input Reason-Analysis">
                </ReactQuill>
                <br/>
                <InputGroup>
                    <InputGroup.Button>
                        <Button type="submit" onClick={this.postMistakeInfo}>Submit</Button>
                    </InputGroup.Button>
                </InputGroup>
            </div>
        )
    }
}
export default AddMistakes;