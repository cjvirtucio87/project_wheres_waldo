class TagsController < ApplicationController
  def index
    @tags = Tag.all
    data = @tags.map do |tag|
      {id: tag.id,
       person_name: tag.person.name,
       left: tag.left,
       top: tag.top}
    end

    respond_to do |format|
      format.json { render json: data, status: :created }
      format.html { render :index }
    end
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

  def destroy
    @tag = Tag.find(params[:id])

    if @tag.destroy
      respond_to do |format|
        format.json
      end
    end

  end

  private

    def tag_params
      params.require(:tag).permit(:id, :person_id, :top, :left)
    end
end
