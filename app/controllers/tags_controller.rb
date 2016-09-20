class TagsController < ApplicationController
  def index
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      respond_to do |format|
        format.json { render json: @tag, status: :created }
      end
    else
      flash.now[:info] = 'Not working.'
    end
  end

  private

    def tag_params
      params.require(:tag).permit(:id, :person_id, :top, :left)
    end
end
