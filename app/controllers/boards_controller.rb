class BoardsController < ApplicationController
  def index
    @closets = Closet.where(board_id: current_user.id)
  end

  def trending
    @item = Item.first
    render "trending"
  end
end
