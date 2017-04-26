import React from 'react';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import AnnotationField from './annotation_field';

class Annotation extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      type: this.props.annotationType,
      currentAnnotation: this.props.currentAnnotation,
      position: this.props.position,
      formOpen: false,
      editorState: EditorState.createEmpty(),
      readOnly: true,
    };

    this.readOnly = "true";
    this.onChange = (editorState) => this.setState({editorState});

    this.newAnnotation = this.newAnnotation.bind(this);
    this.showAnnotation = this.showAnnotation.bind(this);

  }

  componentDidMount(){
    if(this.props.currentAnnotation.id){
      let raw = convertFromRaw(JSON.parse(this.props.currentAnnotation.description));
      this.setState({
        editorState: EditorState.createWithContent(raw),
      });
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.currentAnnotation.id){
      let raw = convertFromRaw(JSON.parse(newProps.currentAnnotation.description));
      this.setState({
        editorState: EditorState.createWithContent(raw),
        type: newProps.annotationType
      });
    }
  }

  newAnnotation() {

    if(this.state.formOpen){
      return(
        <section className="annotation new-annotation">

          <form>
            <AnnotationField
              formType="new"
              user={this.props.currentUser}
              track={this.props.currentTrack}
              selection={this.props.selection}
              createAnnotation={this.props.createAnnotation}
              closeAnnotation={this.props.closeAnnotation}
              fetchAnnotations={this.props.fetchAnnotations}
              updateAnnotation={this.props.updateAnnotation}
              />
          </form>
        </section>
      );
    } else {
      return (
        <section className="annotation new-annotation">
          <button
            className="create-button"
            onClick={() => this.setState({formOpen: true})}
            >Create Annotation</button>
        </section>
      );
    }
  }

  handleDelete(){
    this.props.deleteAnnotation(this.props.currentAnnotation.id)
              .then(() => this.props.fetchAnnotations(this.props.currentTrack.id))
              .then(() => this.props.closeAnnotation());
  }

  handleEdit() {
    this.setState({type: "edit"});
  }

  showAnnotation() {
    let deleteButton = "";
    let editButton = "";
    if(this.props.currentUser.id === this.props.currentAnnotation.author_id){
      deleteButton = <button className="delete-button" onClick={() => this.handleDelete()}>Delete</button>;
      editButton = <button className="edit-button" onClick={() => this.handleEdit()}>Edit</button>;
    }
    return (
      <section className="annotation show-annotation">
        <Editor
          editorState={this.state.editorState}
          readOnly={this.readOnly}
          />
        {deleteButton}
        {editButton}
      </section>
    );
  }

  editAnnotation(){
    return (
      <section className="annotation new-annotation">

        <form>
          <AnnotationField
            formType="edit"
            currentAnnotation={this.state.currentAnnotation}
            user={this.props.currentUser}
            track={this.props.currentTrack}
            selection={this.props.selection}
            updateAnnotation={this.props.updateAnnotation}
            closeAnnotation={this.props.closeAnnotation}
            fetchAnnotations={this.props.fetchAnnotations}
            />
        </form>
      </section>
    );
  }

  render(){
    if(this.state.type === "new"){
      return this.newAnnotation();
    } else if (this.state.type === "show"){
      return this.showAnnotation();
    } else if (this.state.type === "edit"){
      return this.editAnnotation();
    }
  }
}

export default Annotation;
