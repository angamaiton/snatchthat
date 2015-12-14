class Api::ClosetsController < ApplicationController
  def index
    @closets = Closet.all
    render json: @closets
  end

  def create
    closet = Closet.new(closet_params)
    closet.user_id = params["closet"]["board_id"]
    closet.save
    # track_activity(closet)
    # redirect_to api_closet_path(closet)
  end

  def show
    closet = Closet.find(params[:id])
    render json: closet
  end

  def destroy
    @closet = Closet.find(params[:id])
    @closet.destroy
    track_activity(@closet)
    # redirect_to '/'
  end

  private
  def closet_params
    params.require(:closet).permit(:name, :board_id, :user_id)
  end

end
