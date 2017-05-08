import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

// import { createAnnotation } from '../../actions/annotation_actions';
class AnnotationField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: ""
    };
    this.state = {editorState: EditorState.createEmpty()};


    this.onChange = (editorState) => this.setState({editorState});
    this.handleSubmit = this.handleSubmit.bind(this);

    this._onBoldClick = this._onBoldClick.bind(this);
    this._onItalicsClick = this._onItalicsClick.bind(this);
    this._onUnderlineClick = this._onUnderlineClick.bind(this);

  }

  componentDidMount(){
    if(this.props.formType === "edit"){
      let raw = convertFromRaw(JSON.parse(this.props.currentAnnotation.description));
      this.setState({
        editorState: EditorState.createWithContent(raw)
      });
    }
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onItalicsClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  handleSubmit() {
    let text = this.state.editorState.getCurrentContent().getPlainText();
    if(text.length === 0){
       let error = <span className="annotation-error">Annotation Can't Be Blank</span>;
        this.setState({errors: error});
    } else {
      let raw = convertToRaw(this.state.editorState.getCurrentContent());
      let string = JSON.stringify(raw);
      if(this.props.formType === "new"){
        this.props.createAnnotation({
          author_id: this.props.user.id,
          description: string,
          song_id: this.props.track.id,
          start_index: this.props.selection[0],
          end_index: this.props.selection[1]
        }).then(() => this.props.fetchAnnotations(this.props.track.id));
      } else {
        this.props.updateAnnotation({
          id: this.props.currentAnnotation.id,
          description: string
        });
      }
      this.props.closeAnnotation();
    }

  }
  render() {
    let header = this.props.formType === "new" ? "Drop Some Knowledge" : "Edit This Annotation";

    return(
      <div className="text-editor">
        <h1 className = "new-annotation-header">{header}</h1>
        <div className="toolbar">
          <span onMouseDown={() => this._onBoldClick()}><i className="fa fa-bold" aria-hidden="true"></i></span>
          <span onMouseDown={() => this._onItalicsClick()}><i className="fa fa-italic" aria-hidden="true"></i></span>
          <span onMouseDown={() => this._onUnderlineClick()}><i className="fa fa-underline" aria-hidden="true"></i></span>
        </div>
        {this.state.errors}
        <div className="draft-field">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            />
        </div>
        <div className="annotation-controls">
          <button className="annotation-submit" onClick={()=>this.handleSubmit()}>SAVE</button>
          <button className="cancel-button" onClick={() => this.props.closeAnnotation()}>CANCEL</button>
        </div>
      </div>
    );
  }
}

export default AnnotationField;
