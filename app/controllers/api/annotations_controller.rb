class Api::AnnotationsController < ApplicationController
  def create
    @annotation = Annotation.new(annotation_params)

    if @annotation.save
      render "/api/annotations/show"
    else
      render json @annotation.errors.full_messages, status: 422
    end
  end

  def index
    @annotations = Annotation.where(song_id: params[:song_id])
    render "/api/annotations/index"
  end

  def show
    @annotation = Annotation.find(params[:id])
    render "/api/annotations/show"
  end

  def update
    @annotation = Annotation.find(params[:id])

    if params[:vote]
      @vote = Vote.new(params[:vote].permit(:user_id, :annotation_id, :value))
      if @vote.save!
        @user = User.find(@vote.user_id)
        Vote.where('annotation_id = ? AND user_id = ? AND value != ?', @vote.annotation.id, @vote.user.id, @vote.value).destroy_all
        @annotation.update_attributes(score: @annotation.user_votes)
        render "/api/annotations/show"
      end
    else
      if @annotation.update_attributes(annotation_params)
        render "/api/annotations/show"
      else
        render json @annotation.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    @song = Song.find(@annotation.song_id)
    if @annotation
      @annotation.destroy
      render "api/songs/show"
    else
      render json: ["No such annotation"], status: 404
    end
  end

  def upvote
    vote(1)
  end

  def downvote
    vote(-1)
  end

  private

  def vote(direction)
    @annotation = Annotation.find(params[:id])
    @vote = @annotation.votes.find_or_initialize_by(user: current_user)

    unless @vote.update(value: direction)
      render json @vote.errors.full_messages
    end
  end


  def annotation_params
    params.require(:annotation).permit(:author_id, :score, :description, :song_id, :start_index, :end_index)
  end
end
