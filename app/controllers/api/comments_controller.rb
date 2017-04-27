class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render '/api/comments/show'
    else
      render json: @comment.errors, state: 422
    end
  end

  def update
    @comment = Comment.find(params:id)

    if @comment.update_attributes(comment_params)
      render '/api/comments/show'
    else
      render json: @comment.errors, state: 422
    end
  end

  def delete
    @comment = Comment.find(params[:id])

    if @comment
      @comment.destroy
    else
      render json: ["No such comment"], status: 404
    end
  end

  def index
    if params[:song_id]
      @comments = Comment.where(commentable_id: params[:song_id], commentable_type: "Song")
    else
      @comments = Comment.where(commentable_id: params[:annotation_id], commentable_type: "Annotation")
    end
    render 'api/comments/index'
  end
end
