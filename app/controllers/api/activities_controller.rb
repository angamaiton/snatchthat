class Api::ActivitiesController < ApplicationController
  def index
    # activities = Activity.all
    # paginate json: activities

    activities = paginate Activity.all, per_page: 10

    render json: activities
  end

  

end