class ReviewsController < ApplicationController

    def index
        review = Review.all
        render json: review, include: [:beer, :user]
    end

    def show    
       review = Review.find_by(id: params[:id])
        render json: review, include: [:beer, :user]
    end
end
