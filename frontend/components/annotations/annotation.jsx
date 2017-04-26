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
      readOnly: true
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
        editorState: EditorState.createWithContent(raw)
      });
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.currentAnnotation.id){
      let raw = convertFromRaw(JSON.parse(newProps.currentAnnotation.description));
      this.setState({
        editorState: EditorState.createWithContent(raw)
      });
    }
  }

  newAnnotation() {
    if(this.state.formOpen){
      return(
        <section className="annotation new-annotation">

          <form>
            <AnnotationField
              user={this.props.currentUser}
              track={this.props.currentTrack}
              selection={this.props.selection}
              createAnnotation={this.props.createAnnotation}
              closeAnnotation={this.props.closeAnnotation}
              fetchAnnotations={this.props.fetchAnnotations}
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

  showAnnotation() {
    let deleteButton = "";
    let editButton = "";
    if(this.props.currentUser.id === this.props.currentAnnotation.author_id){
      deleteButton = <button className="delete-button" onClick={() => this.handleDelete()}>Delete</button>;
    }
    return (
      <section className="annotation show-annotation">
        <Editor
          editorState={this.state.editorState}
          readOnly={this.readOnly}
          />
        {deleteButton}
      </section>
    );
  }

  editAnnotation(){
    return (
      <section className="annotation new-annotation">

        <form>
          <AnnotationField
            formType="edit"
            user={this.props.currentUser}
            track={this.props.currentTrack}
            selection={this.props.selection}
            createAnnotation={this.props.createAnnotation}
            closeAnnotation={this.props.closeAnnotation}
            fetchAnnotations={this.props.fetchAnnotations}
            />
        </form>
      </section>
    );
  }

  render(){
    if(this.props.annotationType === "new"){
      return this.newAnnotation();
    } else {
      return this.showAnnotation();
    }
  }
}

export default Annotation;
