import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import AnnotationField from './annotation_field';
import VotesContainer from './voting/votes_container';
import CommentContainer from '../comments/comment_container';

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

  handleClickOutside() {
    if(!this.props.loginOpen){
      this.props.closeAnnotation();
    }
  }

  componentDidMount(){
    if(this.props.currentAnnotation.id){
      this.props.fetchAnnotationComments(this.props.currentAnnotation.id);
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
      let startAnnotationButton = <button
         className="create-button"
         onClick={() => this.props.openLoginModal()}
         >Please Sign In To Annotate</button>;
      if(this.props.currentUser){
        startAnnotationButton = <button
            className="create-button"
            onClick={() => this.setState({formOpen: true})}
            >Create Annotation</button>;
      }
      return (
        <section className="annotation new-annotation">
          {startAnnotationButton}
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
    this.props.changeAnnotationType("edit");
  }

  showAnnotation() {
    let deleteButton = "";
    let editButton = "";
    let author = "";
    if(this.props.currentUser && this.props.currentUser.id === this.props.currentAnnotation.author_id){
      deleteButton = <button className="delete-button" onClick={() => this.handleDelete()}>Delete</button>;
      editButton = <button className="edit-button" onClick={() => this.handleEdit()}>Edit</button>;
    } else {
      author = <span style={{fontStyle: "italic", color: "#9A9A9A"}}>Submitted by: {this.props.currentAnnotation.author}</span>;
    }
    return (
      <section className="annotation show-annotation">
        <Editor
          editorState={this.state.editorState}
          readOnly={this.readOnly}
          />
                  {author}
        <VotesContainer />
        <div className='annotation-controls'>
          {deleteButton}

          {editButton}
        </div>
        <CommentContainer
           comments={this.props.comments}
           commentableId={this.props.currentAnnotation.id}
           commentableType="Annotation"
           overRide="true"
          />
      </section>
    );
  }

  editAnnotation(){
    return (
      <section className="annotation new-annotation">

        <form>
          <AnnotationField
            formType="edit"
            currentAnnotation={this.props.currentAnnotation}
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
        if(this.props.annotationType === "new"){
      return this.newAnnotation();
    } else if (this.props.annotationType === "show"){
      return this.showAnnotation();
    } else if (this.props.annotationType === "edit"){
      return this.editAnnotation();
    }
  }
}

export default onClickOutside(Annotation);
