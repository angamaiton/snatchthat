class Api::SearchesController < ApplicationController
  def show
    @search = Search.new(params[:search][:keyword], params[:search][:source_type])
    @results = @search.results
    render json: @results
  end

  private

  def search_params
    params.require(:search).permit(:keyword, :source_type)
  end
end
