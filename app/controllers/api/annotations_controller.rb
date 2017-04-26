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

    if @annotation.update_attributes(annotation_params)
      render "/api/annotations/show"
    else
      render json @annotation.errors.full_messages, status: 422
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

  private

  def annotation_params
    params.require(:annotation).permit(:author_id, :score, :description, :song_id, :start_index, :end_index)
  end
end
