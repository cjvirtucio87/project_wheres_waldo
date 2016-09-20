class PeopleController < ApplicationController
  def index
   @people = Person.all
    # @people = { person1: "hannah", persion2: "cj"}
    respond_to do |format|
      format.json { render json: @people, status: 200 }
    end
  end
end
