class BeersController < ApplicationController
  
  def index
    beers = Beer.all
    render json: beers, include: [
      {
        :reviews => { 
          except: [:id, :beer_id, :created_at, :updated_at]
        }
      },
      {
        :country => {
          except: [:id, :created_at, :updated_at]
        }
      },
      {
        :style => {
          except: [:id, :created_at, :updated_at]
        }
      },
      {
        :users => {
          except: [:id, :created_at, :updated_at]
        }
      }
    ]
  end
  def show
    beer = Beer.find(params[:id])
    render json: beer, include: [
      {
        :reviews => { 
          except: [:id, :beer_id, :created_at, :updated_at]
        }
      },
      {
        :country => {
          except: [:id, :created_at, :updated_at]
        }
      },
      {
        :style => {
          except: [:id, :created_at, :updated_at]
        }
      },
      {
        :users => {
          except: [:id, :created_at, :updated_at]
        }
      }
    ]
      
      
  end
  def new
    beer = Beer.new
    
  end
  def create
    beer = Beer.create(beer_params)
    render json: beer
  end
  def edit
    beer = Beer.find(params[:id])
   
  end
  def update
    beer = Beer.find(params[:id])
    beer.update(beer_params)
    render json: beer
  end
  private 
  def beer_params
    params.require(:beer).permit(:name, :brewery, :country_id, :notes, :abv, :image, :style_id)
    
  end
  
end
