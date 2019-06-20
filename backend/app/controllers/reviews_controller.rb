class ReviewsController < ApplicationController
  def index
      review = Review.all
      render json: review
  end
  
  def show    
     review = Review.find(params[:id])
      render json: review
  end
  def new
      review = Review.new
      
  end
  def create
      review = Review.create(review_params)
      render json: review
      
  end
  def edit
      review = Review.find(params[:id])
      
  end
  private
  def review_params 
      params.require(:review).permit(:beer_id, :user_id, :review_content, :rating)
      
  end
  
end
