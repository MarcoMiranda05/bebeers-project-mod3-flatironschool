class ReviewsController < ApplicationController
  def index
      review = Review.all
      render json: review, include: [:beer, :user]
  end
  def show    
     review = Review.find_by(id: params[:id])
      render json: review, include: [:beer, :user]
  end
  def new
      review = Review.new
      
  end
  def create
      review = Review.create( review_params)
      render json: review
      
  end
  def edit
      review = Review.find_by(params[:id])
      
  end
  private
  def review_params 
      params.require(:review).permit(:beer, :user, :reviews, :ratings)
      
  end
  
end