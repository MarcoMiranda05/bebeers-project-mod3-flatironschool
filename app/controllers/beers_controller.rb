class BeersController < ApplicationController
    before_action :current_beer, only: [:show, :edit, :update]


    def index
        beers = Beers.all

        render json: beers
    end

    def show

        render json: beer
    end

    def new
        beer = Beer.new
        
    end

    def create
        beer = Beer.create( beer_params)

        render json: beer
    end

    def edit
      
    end

    def update

        beer.update(beer_params)

        render json: beer
    end

    private 

    def beer_params
        params.require(:beer).permit(:name, :brewery, :country, :notes, :abv, :image)
        
    end

    def current_beer
      beer =  Beer.find(:id params[:id])
    end
end
