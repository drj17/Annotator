import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
// import { createAnnotation } from '../../actions/annotation_actions';
class AnnotationField extends React.Component {
  constructor(props){
    super(props);

    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});

    this._onBoldClick = this._onBoldClick.bind(this);
    this._onItalicsClick = this._onItalicsClick.bind(this);
    this._onUnderlineClick = this._onUnderlineClick.bind(this);
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
    let raw = convertToRaw(this.state.editorState.getCurrentContent());
    let string = JSON.stringify(raw);

    this.props.createAnnotation({
      author_id: this.props.user.id,
      description: string,
      song_id: this.props.track.id,
      start_index: this.props.selection[0],
      end_index: this.props.selection[1]
    }).then(() => this.props.fetchAnnotations(this.props.track.id));

    this.props.closeAnnotation();
  }
  render() {
    return(
      <div className="text-editor">
        <h1 className = "new-annotation-header">Drop Some Knowledge</h1>
        <div className="toolbar">
          <button onMouseDown={() => this._onBoldClick()}><i className="fa fa-bold" aria-hidden="true"></i></button>
          <button onMouseDown={() => this._onItalicsClick()}><i className="fa fa-italic" aria-hidden="true"></i></button>
          <button onMouseDown={() => this._onUnderlineClick()}><i className="fa fa-underline" aria-hidden="true"></i></button>
        </div>
        <div className="draft-field">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            />
        </div>
        <button className="annotation-submit" onClick={()=>this.handleSubmit()}>SAVE</button>
      </div>
    );
  }
}

export default AnnotationField;
